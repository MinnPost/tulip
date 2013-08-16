/**
 * Main application file
 */
(function($, undefined) {
  var Tulip = window.Tulip = (function() {
    // Constructor
    function tulip(options) {
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
      templatePrefix: 'app/templates/',
      projectionOptions: [
        { value: 'albersUsa', label: 'Albers USA' },
        { value: 'azimuthalEqualArea', label: 'Azimuthal Equal Area' },
        { value: 'azimuthalEquidistant', label: 'Azimuthal Equidistant' },
        { value: 'conicEqualArea', label: 'Conic Equal Area' },
        { value: 'conicConformal', label: 'Conic Conformal' },
        { value: 'conicEquidistant', label: 'Conic Equidistant' },
        { value: 'equirectangular', label: 'Equirectangle' },
        { value: 'gnomonic', label: 'Gnomonic' },
        { value: 'mercator', label: 'Mercator' },
        { value: 'orthographic', label: 'Orthographic' },
        { value: 'stereographic', label: 'Stereographic' },
        { value: 'transverseMercator', label: 'Transverse Mercator' }
      ]
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
      config.datasource = 'data/us-counties.topo.json';
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