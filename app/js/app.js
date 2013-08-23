/**
 * Main application file
 */
(function($, undefined) {
  // TODO: handle compiled templates
  //var compiledTemplates = _.clone(Tulip.templates);

  var Tulip = window.Tulip = (function() {
    // Constructor
    function tulip(options) {
      // Create options
      this.options = _.extend(this.defaultOptions, options);
      this.el = this.options.el;
      this.$el = $(this.options.el);
      
      // Since map options are bit complex, we maintain the default
      // example here.
      if (!_.isObject(this.options.mapConfig)) {
        this.options.mapConfig = _.extend(this.defaultMapConfig(), this.exampleMapConfig());
      }
      else {
        this.options.mapConfig = _.extend(this.defaultMapConfig(), this.options.mapConfig);
      }
      
      // Start manually
      if (this.options.startManually === false) {
        this.start();
      }
      return this;
    }
    
    // Default options
    tulip.prototype.defaultOptions = {
      // Whether to start manually or not.  The default is to start automatically
      startManually: false,
      // Location of tempaltes
      templatePrefix: 'app/templates/',
      // title used in the right-hand bar
      title: 'T<span class="tulip-u">u</span>lip <span class="tulip-beta">beta</span>',
      // Description used in the right-hand bar
      description: 'Tulip is an application to make building choropleth styled maps easy.',
      // The configuration options that should be hidden and not available to the user
      hideConfig: []
      // The default map configuration.  The default is handled in other places
      // mapConfig
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
        'loading.html',
        'attribute-picker.html'
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
      
      // Width and heigh are not actually config values
      // as the map fills the container, but these will affect
      // the container
      config.width = '100%';
      config.height = '100%';
      
      // Projection
      config.rotation = [0, 0, 0];
      
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
      
      // Dragging enabled for export
      config.legendDragOn = true;
      config.mapDragOn = true;
      
      return config;
    };
    
    // Example config.  Used if no other mapConfig values are found
    tulip.prototype.exampleMapConfig = function() {
      var exampleConfig = {};
      exampleConfig.datasource = 'data/world-population.geo.json';
      exampleConfig.fileName = 'world-population.geo.json';
      exampleConfig.fileSize = '4279065';
      exampleConfig.fileType = 'geojson';
      exampleConfig.projection = 'eckert4';
      exampleConfig.colorProperty = 'POP2005';
      exampleConfig.mapOffset = [12, 0];
      exampleConfig.graticuleOn = true;
      exampleConfig.globeOn = true;
      exampleConfig.colorOn = true;
      exampleConfig.legendTitle = '2005 Population';
      exampleConfig.legendFormatterString = ',f0';
      exampleConfig.legendFormatter = d3.format(exampleConfig.legendFormatterString);
      exampleConfig.tooltipContentTemplate = '<strong><%= p.NAME %></strong> <br> Population: <%= d3.format(",f0")(p.POP2005) %>';
      exampleConfig.tooltipContent = function(d) {
        return _.template(exampleConfig.tooltipContentTemplate)({ p: d.properties });
      };
      
      return exampleConfig;
    };
    
    // Render parts
    tulip.prototype.render = function() {
      this.mapConfig = new this.TulipMapConfigurationModel(
        this.options.mapConfig, 
        { app: this }
      );
      this.appView = new this.TulipMainAppView({
        el: this.el,
        app: this
      }).render();
    
      return this;
    };
    
    return tulip;
  })();
})(jQuery);