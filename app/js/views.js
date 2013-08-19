/**
 * Views for Tulip app
 */

(function(Tulip, $, undefined) {

  /**
   * Main application view
   */
  Tulip.prototype.TulipMainAppView = Backbone.View.extend({
    initialize: function(options) {
      this.templates = options.app.templates;
    },
    
    events: {
    },
    
    // Main template render
    render: function() {
      this.$el.html(_.template(this.templates['application.html'])({ }));
      this.renderMap().renderConfig();
      return this;
    },
    
    // Render config into app
    renderConfig: function() {
      this.configView = new this.options.app.TulipConfigView({
        el: this.$el.selector + ' .tulip-config-container',
        app: this.options.app,
        map: this.mapView,
        model: this.options.app.mapConfig
      }).render();
      return this;
    },
    
    // Render map into app
    renderMap: function() {
      this.mapView = new this.options.app.TulipMapView({
        el: this.$el.selector + ' .tulip-map-container',
        app: this.options.app,
        model: this.options.app.mapConfig
      }).render();
      return this;
    }
  });

  /**
   * Configuration application view
   */
  Tulip.prototype.TulipConfigView = Backbone.View.extend({
    model: Tulip.prototype.TulipMapConfigurationModel,
  
    initialize: function(options) {
      var thisView = this;
      this.templates = options.app.templates;
      this.model.on('change', function() {
        thisView.options.map.render();
      });
      this.options.map.on('mapDataLoaded', function() {
        thisView.stickit();
      });
    },
    
    events: {
      'click .tulip-export-image': 'handleExportImage'
    },
    
    bindings: {
      '.tulip-configuration-projection': {
        observe: 'projection',
        selectOptions: {
          collection: function() {
            return this.model.get('projectionOptions');
          }
        }
      },
      '.tulip-configuration-colorOn': {
        observe: 'colorOn'
      },
      '.tulip-configuration-colorProperty': {
        observe: 'colorProperty',
        selectOptions: {
          collection: function() {
            // Need to get current map with loaded data
            // TODO: The data is not available until later, need
            // to find a way to trigger this.
            var options = [];
            var map = this.options.map.smd;
            
            if (_.isObject(map.data) && _.isObject(map.data.features)) {
              _.each(map.data.features[0].properties, function(prop, p) {
                options.push({ value: p, label: p });
              });
            }
            return options;
          }
        }
      },
      '.tulip-configuration-colorSet': {
        observe: 'colorSet',
        selectOptions: {
          collection: function() {
            var smd = SimpleMapD3();
            var options = [];
            
            _.each(smd.brewer, function(set, b) {
              options.push({ value: b, label: b });
            });
            return options;
          }
        }
      },
      '.tulip-configuration-colorReverse': {
        observe: 'colorReverse'
      },
      '.tulip-configuration-tooltipOn': {
        observe: 'tooltipOn'
      },
      '.tulip-configuration-dragOn': {
        observe: 'dragOn'
      }
    },
    
    // Main template render
    render: function() {
      this.$el.html(_.template(this.templates['configuration.html'])({ }));
      this.stickit();
      return this;
    },
    
    // Handle export image
    handleExportImage: function(e) {
      e.preventDefault();
      var $target = $(e.currentTarget);
      var id = _.uniqueId('tulip-id-');
      var map = this.options.map;
      var image;
      
      map.$mapEl.find('svg').attr('id', id);
      image = Pancake(id);
      image.download('map.png');
    }
  });

  /**
   * Map  view
   */
  Tulip.prototype.TulipMapView = Backbone.View.extend({
    model: Tulip.prototype.TulipMapConfigurationModel,
  
    initialize: function(options) {
      this.templates = options.app.templates;
      this.mapEl = this.$el.selector + ' .tulip-map';
      this.$mapEl = $(this.mapEl);
    },
    
    events: {
    },
    
    // Main template render
    render: function(config) {
      var thisView = this;
      
      config = _.extend(this.model.toJSON(), config);
      config.container = this.mapEl;
      this.$mapEl.html('').height($(window).height());
      this.smd = SimpleMapD3(config);
      this.smd.events.on('dataLoaded.tulip', function(smd) {
        thisView.trigger('mapDataLoaded');
      });
      return this;
    }
  });
})(Tulip, jQuery, undefined);