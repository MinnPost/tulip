/**
 * Main application file
 */
(function($, undefined) {
  var Tulip = window.Tulip = (function() {
    // Constructor
    function tulip(options) {
      // Create options
      this.options = _.extend(this.defaultOptions, options);
      this.el = this.options.el;
      this.$el = $(this.options.el);
      
      if (this.options.startManually === false) {
        this.start();
      }
      return this;
    }
    
    // Default options
    tulip.prototype.defaultOptions = {
      startManually: false,
      templatePrefix: 'app/templates/'
    };
    
    // Start function
    tulip.prototype.start = function() {
      var thisTulip = this;
      
      this.getTemplates().done(function() {
        thisTulip.render();
      });
      return this;
    };
    
    tulip.prototype.getTemplates = function() {
      var thisTulip = this;
      var defers = [];
      this.templates = this.templates || {};
      
      _.each([
        'application.html',
        'configuration.html',
      ], function(t) {
        var defer = $.get(thisTulip.options.templatePrefix + t);
        $.when(defer).done(function(template) {
          thisTulip.templates[t] = template;
        });
        defers.push(defer);
      });
      return $.when.apply($, defers);
    };
    
    // Default map configuration
    tulip.prototype.defaultMapConfig = function() {
      // Get the default config values form the Simple Map library
      var smd = SimpleMapD3();
      var config = smd.options;
      
      config.datasource = 'data/europe-population-density-geocommons.geo.json';
      config.projection = 'azimuthalEqualArea';
      config.colorProperty = 'population';
      
      // We want to be explicit about styles as Canvg doesn't seem
      // to work well with CSS styles
      config.styles = {
        stroke: '#898989',
        'stroke-width': '.4px',
        'stroke-opacity': '.85'
      };
      config.stylesHover = {
        'stroke-opacity': '1',
        'stroke-width': '2px'
      };
      config.stylesCanvas = {
      };
      config.stylesLegendContainer = {
        stroke: '#222222',
        'stroke-width': '1px',
        'fill-opacity': '1'
      };
      config.stylesLegendTitleText = {
        fill: '#222222'
      };
      config.stylesLegendText = {
        fill: '#222222'
      };
      config.stylesLegendSwatch = {
      };
      
      // Default template output
      config.tooltipContentTemplate = ' \
<% _.each(p, function(prop, name) { %> \
  <%= name %>: <%= prop %> <br /> \
<% }) %> \
      ';
      config.tooltipContent = function(d) {
        return _.template(config.tooltipContentTemplate)({ p: d.properties });
      };
      
      return config;
    };
    
    // Render parts
    tulip.prototype.render = function() {
      this.mapConfig = new this.TulipMapConfigurationModel(this.defaultMapConfig(), {
        app: this
      });
      this.appView = new this.TulipMainAppView({
        el: this.el,
        app: this
      }).render();
    
      return this;
    };
    
    return tulip;
  })();
})(jQuery);