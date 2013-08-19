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
      var exampleConfig = {};
      
      // Formatter is a function, so be explicit about
      // the way this application handles that
      config.legendFormatterString = ',';
      config.legendFormatter = d3.format(config.legendFormatterString);
      
      // We want to be explicit about styles as Canvg doesn't seem
      // to work well with CSS styles
      config.styles = {
        stroke: '#898989',
        'stroke-width': '.4px',
        'stroke-opacity': '0.85'
      };
      config.stylesHover = {
        'stroke-opacity': '1',
        'stroke-width': '2px'
      };
      config.stylesBackground = {
        fill: '#FFFFFF'
      };
      config.stylesLegendContainer = {
        stroke: '#222222',
        'stroke-width': '1px',
        fill: '#FFFFFF',
        'fill-opacity': '0.85'
      };
      config.stylesLegendTitleText = {
        fill: '#222222'
      };
      config.stylesLegendText = {
        fill: '#222222'
      };
      config.stylesLegendSwatch = {
      };
      config.stylesGraticule = {
        stroke: '#222222',
        'stroke-width': '.5px',
        fill: '#FFFFFF',
        'stroke-opacity': '0.75'
      };
      config.stylesGlobe = {
        stroke: '#222222',
        'stroke-width': '5px',
        fill: '#FFFFFF',
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
      
      // Legend
      config.legendScale = 1;
      
      // Make example
      config.datasource = 'data/world-population.geo.json';
      config.projection = 'eckert4';
      config.colorProperty = 'POP2005';
      config.graticuleOn = true;
      config.globeOn = true;
      config.colorOn = true;
      config.legendFormatterString = ',f0';
      config.legendTitle = '2005 Population';
      config.legendFormatter = d3.format(config.legendFormatterString);
      config.tooltipContentTemplate = '<strong><%= p.NAME %></strong> <br> Population: <%= d3.format(",f0")(p.POP2005) %>';
      config.tooltipContent = function(d) {
        return _.template(config.tooltipContentTemplate)({ p: d.properties });
      };
      config = _.extend(config, exampleConfig);
      
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