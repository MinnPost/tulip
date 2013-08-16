/**
 * Main application file
 */
(function($, undefined) {
  var Tulip = window.Tulip = (function() {
    // Constructor
    function tulip(options) {
      // Check to see if we have extended geo options
      if (_.isFunction(d3.geo.aitoff)) {
        this.defaultOptions.projectionOptions = _.union(
          this.defaultOptions.projectionOptions, this.projectionOptionsExtended);
      }
    
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
    
    // Extended projection options
    tulip.prototype.projectionOptionsExtended = [
      { value: 'aitoff', label: 'Aitoff' },
      { value: 'airy', label: 'Airy’s minimum-error azimuthal' },
      { value: 'albers', label: 'Albers equal-area conic' },
      { value: 'armadillo', label: 'Armadillo' },
      { value: 'august', label: 'August conformal' },
      { value: 'azimuthalEqualArea', label: 'Lambert azimuthal equal-area' },
      { value: 'azimuthalEquidistant', label: 'azimuthal equidistant' },
      { value: 'baker', label: 'Baker Dinomic' },
      { value: 'berghaus', label: 'Berghaus Star' },
      { value: 'boggs', label: 'Boggs eumorphic' },
      { value: 'bonne', label: 'Bonne' },
      { value: 'bromley', label: 'Bromley' },
      { value: 'chamberlin', label: 'Chamberlin trimetric' },
      { value: 'collignon', label: 'Collignon' },
      { value: 'conicConformal', label: 'Lambert conformal conic' },
      { value: 'conicEquidistant', label: 'conic equidistant' },
      { value: 'craig', label: 'Craig retroazimuthal' },
      { value: 'craster', label: 'Craster parabolic' },
      { value: 'cylindricalEqualArea', label: 'cylindrical equal-area, Gall–Peters' },
      { value: 'cylindricalStereographic', label: 'cylindrical stereographic, Gall’s stereographic' },
      { value: 'eckert1', label: 'Eckert I' },
      { value: 'eckert2', label: 'Eckert II' },
      { value: 'eckert3', label: 'Eckert III' },
      { value: 'eckert4', label: 'Eckert IV' },
      { value: 'eckert5', label: 'Eckert V' },
      { value: 'eckert6', label: 'Eckert VI' },
      { value: 'eisenlohr', label: 'Eisenlohr conformal' },
      { value: 'equirectangular', label: 'Equirectangular (Plate Carrée), Cassini' },
      { value: 'fahey', label: 'Fahey' },
      { value: 'foucaut', label: 'Foucaut' },
      { value: 'gilbert', label: 'Gilbert’s two-world perspective' },
      { value: 'ginzburg4', label: 'Ginzburg IV' },
      { value: 'ginzburg5', label: 'Ginzburg V' },
      { value: 'ginzburg6', label: 'Ginzburg VI' },
      { value: 'ginzburg8', label: 'Ginzburg VIII' },
      { value: 'ginzburg9', label: 'Ginzburg IX' },
      { value: 'gnomonic', label: 'gnomonic' },
      { value: 'gringorten', label: 'Gringorten' },
      { value: 'guyou', label: 'Guyou hemisphere-in-a-square' },
      { value: 'hammer', label: 'Hammer, Eckert–Greifendorff, quartic authalic, Briesemeister' },
      { value: 'hammerRetroazimuthal', label: 'Hammer retroazimuthal' },
      { value: 'healpix', label: 'HEALPix' },
      { value: 'hill', label: 'Hill eucyclic, Maurer No. 73' },
      { value: 'homolosine', label: 'Goode homolosine' },
      { value: 'kavrayskiy7', label: 'Kavrayskiy VII' },
      { value: 'lagrange', label: 'Lagrange conformal' },
      { value: 'larrivee', label: 'Larrivée' },
      { value: 'laskowski', label: 'Laskowski tri-optimal' },
      { value: 'littrow', label: 'Littrow' },
      { value: 'loximuthal', label: 'loximuthal' },
      { value: 'mercator', label: 'Mercator' },
      { value: 'miller', label: 'Miller' },
      { value: 'modifiedStereographic', label: 'modified stereographic' },
      { value: 'mollweide', label: 'Mollweide, Atlantis' },
      { value: 'mtFlatPolarParabolic', label: 'McBryde–Thomas flat-polar parabolic' },
      { value: 'mtFlatPolarQuartic', label: 'McBryde–Thomas flat-polar quartic' },
      { value: 'mtFlatPolarSinusoidal', label: 'McBryde–Thomas flat-polar sinusoidal' },
      { value: 'naturalEarth', label: 'Natural Earth' },
      { value: 'nellHammer', label: 'Nell–Hammer' },
      { value: 'orthographic', label: 'orthographic' },
      { value: 'peirceQuincuncial', label: 'Pierce quincuncial' },
      { value: 'polyconic', label: 'polyconic' },
      { value: 'rectangularPolyconic', label: 'rectangular polyconic' },
      { value: 'robinson', label: 'Robinson' },
      { value: 'satellite', label: 'satellite (tilted perpsective)' },
      { value: 'sinusoidal', label: 'sinusoidal' },
      { value: 'sinuMollweide', label: 'Sinu-Mollweide' },
      { value: 'stereographic', label: 'stereographic' },
      { value: 'times', label: 'Times' },
      { value: 'transverseMercator', label: 'transverse Mercator' },
      { value: 'twoPointAzimuthal', label: 'two-point azimuthal' },
      { value: 'twoPointEquidistant', label: 'two-point equidistant' },
      { value: 'vanDerGrinten', label: 'Van der Grinten' },
      { value: 'vanDerGrinten2', label: 'Van der Grinten II' },
      { value: 'vanDerGrinten3', label: 'Van der Grinten III' },
      { value: 'vanDerGrinten4', label: 'Van der Grinten IV' },
      { value: 'wagner4', label: 'Wagner IV, Putniṇš P2´' },
      { value: 'wagner6', label: 'Wagner VI' },
      { value: 'wagner7', label: 'Wagner VII' },
      { value: 'wiechel', label: 'Wiechel' },
      { value: 'winkel3', label: 'Winkel tripel' }
    ];
    
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