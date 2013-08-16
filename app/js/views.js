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
    },
    
    events: {
    },
    
    bindings: {
      '.tulip-configuration-projection': {
        observe: 'projection',
        selectOptions: {
          collection: function() {
            return this.options.app.options.projectionOptions;
          }
        }
      }
    },
    
    // Main template render
    render: function() {
      this.$el.html(_.template(this.templates['configuration.html'])({ }));
      this.stickit();
      return this;
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
      config = _.extend(this.model.toJSON(), config);
      config.container = this.mapEl;
      this.$mapEl.html('').height($(window).height());
      this.smd = SimpleMapD3(config);
      return this;
    }
  });
})(Tulip, jQuery, undefined);