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