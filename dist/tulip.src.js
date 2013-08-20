/*! tulip - v0.1.1 - 2013-08-20
 * https://github.com/MinnPost/tulip
 * Copyright (c) 2013 Alan Palazzolo; Licensed MIT
 */

this["Tulip"] = this["Tulip"] || {};
this["Tulip"]["templates"] = this["Tulip"]["templates"] || {};

this["Tulip"]["templates"]["app/templates/application.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="tulip-app-container">\n  <div class="tulip-map-container">\n    <div class="tulip-map"></div>\n  </div>\n  \n  <div class="tulip-config-container">\n  \n  </div>\n</div>';

}
return __p
};

this["Tulip"]["templates"]["app/templates/attribute-picker.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="tulip-attribute-picker-picker">\n  ';
 _.each(attributes, function(type, a) { ;
__p += '\n    <div class="tulip-attribute cf">\n      <label data-attribute="' +
((__t = ( a )) == null ? '' : __t) +
'">' +
((__t = ( a )) == null ? '' : __t) +
'</label>\n      \n      <input type="text" data-type="' +
((__t = ( type )) == null ? '' : __t) +
'" value="' +
((__t = ( (values[a]) ? values[a] : '' )) == null ? '' : __t) +
'" />\n    </div>\n  ';
 }) ;
__p += '\n  \n  <div class="tulip-attribute-picker-done-container">\n    <a href="#" class="tulip-attribute-picker-done">Done</a>\n  </div>\n</div>';

}
return __p
};

this["Tulip"]["templates"]["app/templates/configuration.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="tulip-configuration">\n  <h1>T<span class="tulip-u">u</span>lip <span class="tulip-beta">beta</span></h1>\n  \n  <form class="tulip-configuration-form">\n    <h2>Data</h2>\n    \n    <div class="tulip-configuration-property">\n      <div class="tulip-input-file">Drag a new GeoJSON or TopoJSON file here.</div>\n      <div class="tulip-current-file">\n        <span class="tulip-configuration-fileName"></span>, \n        <span class="tulip-configuration-fileSize"></span>\n        (<span class="tulip-configuration-fileType"></span>)\n      </div>\n    </div>\n\n    <h2>Container</h2>\n    \n    <div class="tulip-configuration-group cf">\n      <div class="tulip-configuration-property tulip-configuration-group-50">\n        <label for="tulip-configuration-width">Width:</label>\n        <input type="text" id="tulip-configuration-width" name="tulip-configuration-width" />\n      </div>\n      \n      <div class="tulip-configuration-property tulip-configuration-group-50">\n        <label for="tulip-configuration-height">Height:</label>\n        <input type="text" id="tulip-configuration-height" name="tulip-configuration-height" />\n      </div>\n    </div>\n    \n    <div class="tulip-configuration-property">\n      <p class="tulip-help">Use valid CSS styles, like 90%, 300px, or 10em.  You can use 100% or auto for the height and the map will fill the window.</p>\n    </div>\n      \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-stylesBackground">Background styles:</label>\n      <input type="text" id="tulip-configuration-stylesBackground" class="tulip-attribute-picker" name="tulip-configuration-stylesBackground" />\n      <p class="tulip-help">SVG styles for background container.</p>\n    </div>\n    \n    <div class="tulip-configuration-group cf">\n      <label for="tulip-configuration-mapOffset">Map offset:</label>\n      <p class="tulip-help">Offset of the map from the top left of the canvas.  The Map Drag interaction will automatically set this.</p>\n      \n      <div class="tulip-configuration-property">\n        <label for="tulip-configuration-mapOffset0">X:</label>\n        <input type="text" id="tulip-configuration-mapOffset0" name="tulip-configuration-mapOffset0" />\n      </div>\n      \n      <div class="tulip-configuration-property">\n        <label for="tulip-configuration-mapOffset1">Y:</label>\n        <input type="text" id="tulip-configuration-mapOffset1" name="tulip-configuration-mapOffset1" />\n      </div>\n    </div>\n\n    <h2>Projection</h2>\n    \n    <div class="tulip-configuration-property">\n      <select id="tulip-configuration-projection">\n      </select>\n      <p class="tulip-help">Map projections define how the surface of the earth is displayed.  The purpose of your map should drive the more appropriate projections.</p>\n    </div>\n    \n    <div class="tulip-configuration-group cf">\n      <label for="tulip-configuration-rotation">Rotation:</label>\n      <p class="tulip-help">Defines how the map is rotated or offset around the center.  <em>R</em> is the amount of rotation around the center in a counter-clockwise direction.</p>\n      \n      <div class="tulip-configuration-property">\n        <label for="tulip-configuration-rotation0">X:</label>\n        <input type="text" id="tulip-configuration-rotation0" name="tulip-configuration-rotation0" />\n      </div>\n      \n      <div class="tulip-configuration-property">\n        <label for="tulip-configuration-rotation1">Y:</label>\n        <input type="text" id="tulip-configuration-rotation1" name="tulip-configuration-rotation1" />\n      </div>\n      \n      <div class="tulip-configuration-property">\n        <label for="tulip-configuration-rotation2">R:</label>\n        <input type="text" id="tulip-configuration-rotation2" name="tulip-configuration-rotation2" />\n      </div>\n    </div>\n    \n    <h2>Features</h2>\n    \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-styles">Feature styles:</label>\n      <input type="text" id="tulip-configuration-styles" class="tulip-attribute-picker" name="tulip-configuration-styles" />\n      <p class="tulip-help">SVG styles for each map feature.</p>\n    </div>\n    \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-stylesHover">Feature styles hover:</label>\n      <input type="text" id="tulip-configuration-stylesHover" class="tulip-attribute-picker" name="tulip-configuration-stylesHover" />\n      <p class="tulip-help">SVG styles for each map feature on hover.</p>\n    </div>\n\n    <h2>Colors</h2>\n    \n    <div class="tulip-configuration-property">\n      <input type="checkbox" id="tulip-configuration-colorOn" name="tulip-configuration-colorOn" />\n      <label for="tulip-configuration-colorOn">Color on</label>\n      <p class="tulip-help">When enabled, map features will be colored by a value in the data.  The following options are dependent on this one.</p>\n    </div>\n    \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-colorScale">Color scale</label>\n      <select id="tulip-configuration-colorScale">\n      </select>\n      <p class="tulip-help">The scale method for determining how values are grouped into colors.</p>\n    </div>\n    \n    <div class="tulip-configuration-property">\n      <label for"tulip-configuration-colorProperty">Color property: </label>\n      <select id="tulip-configuration-colorProperty" name="tulip-configuration-colorProperty">\n      </select>\n      <p class="tulip-help">The property in the data source that will determine how the map is colored.</p>\n    </div>\n    \n    <div class="tulip-configuration-property">\n      <label for"tulip-configuration-colorSet">Color set: </label>\n      <select id="tulip-configuration-colorSet" name="tulip-configuration-colorSet">\n      </select>\n      <p class="tulip-help">The set of colors to use.</p>\n    </div>\n    \n    <div class="tulip-configuration-property">\n      <input type="checkbox" id="tulip-configuration-colorReverse" name="tulip-configuration-colorReverse" />\n      <label for="tulip-configuration-colorReverse">Color reverse</label>\n      <p class="tulip-help">Whether to reverse the color set.</p>\n    </div>\n    \n    <h2>Tooltip</h2>\n    \n    <div class="tulip-configuration-property">\n      <input type="checkbox" id="tulip-configuration-tooltipOn" name="tulip-configuration-tooltipOn" />\n      <label for="tulip-configuration-tooltipOn">Tooltip on</label>\n      <p class="tulip-help">When enabled, tooltips will appear on the map when a feature is hovered over.</p>\n    </div>\n    \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-tooltipContent">Tooltip content:</label>\n      <textarea type="checkbox" id="tulip-configuration-tooltipContent" name="tulip-configuration-tooltipContent" />\n      <p class="tulip-help">The template content.  You can use <a href="http://underscorejs.org/#template">Underscore templates</a> and all properties of the feature will be in the <code>p</code> variable.</p>\n    </div>\n    \n    <h2>Legend</h2>\n    \n    <div class="tulip-configuration-property">\n      <input type="checkbox" id="tulip-configuration-legendOn" name="tulip-configuration-legendOn" />\n      <label for="tulip-configuration-legendOn">Legend on</label>\n      <p class="tulip-help">When enabled, a legend will be rendered and the following options are dependent on this.</p>\n    </div>\n    \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-legendTitle">Legend title:</label>\n      <input type="text" id="tulip-configuration-legendTitle" name="tulip-configuration-legendTitle" />\n      <p class="tulip-help">The title of the legend container.</p>\n    </div>\n    \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-legendScale">Legend scale:</label>\n      <input type="text" id="tulip-configuration-legendScale" name="tulip-configuration-legendScale" />\n      <p class="tulip-help">The size scale of the legend.</p>\n    </div>\n    \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-legendFormatter">Legend formatter:</label>\n      <input type="text" id="tulip-configuration-legendFormatter" name="tulip-configuration-legendFormatter" />\n      <p class="tulip-help">The formatter for the legend values, refer to the <a target="_blank" href="https://github.com/mbostock/d3/wiki/Formatting">D3.format</a> function.</p>\n    </div>\n      \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-stylesLegendContainer">Legend container styles:</label>\n      <input type="text" id="tulip-configuration-stylesLegendContainer" class="tulip-attribute-picker" name="tulip-configuration-stylesLegendContainer" />\n      <p class="tulip-help">SVG styles for legend container.</p>\n    </div>\n      \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-stylesLegendTitleText">Legend title styles:</label>\n      <input type="text" id="tulip-configuration-stylesLegendTitleText" class="tulip-attribute-picker" name="tulip-configuration-stylesLegendTitleText" />\n      <p class="tulip-help">SVG styles for legend title.</p>\n    </div>\n      \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-stylesLegendText">Legend text styles:</label>\n      <input type="text" id="tulip-configuration-stylesLegendText" class="tulip-attribute-picker" name="tulip-configuration-stylesLegendText" />\n      <p class="tulip-help">SVG styles for legend text.</p>\n    </div>\n      \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-stylesLegendSwatch">Legend swatch styles:</label>\n      <input type="text" id="tulip-configuration-stylesLegendSwatch" class="tulip-attribute-picker" name="tulip-configuration-stylesLegendSwatch" />\n      <p class="tulip-help">SVG styles for legend swatches.</p>\n    </div>\n    \n    <div class="tulip-configuration-group cf">\n      <label for="tulip-configuration-legendOffset">Legend offset:</label>\n      <p class="tulip-help">Offset of the legend from the top left of the canvas.  The Legend Drag interaction will automatically set this.</p>\n      \n      <div class="tulip-configuration-property">\n        <label for="tulip-configuration-legendOffset0">X:</label>\n        <input type="text" id="tulip-configuration-legendOffset0" name="tulip-configuration-legendOffset0" />\n      </div>\n      \n      <div class="tulip-configuration-property">\n        <label for="tulip-configuration-legendOffset1">Y:</label>\n        <input type="text" id="tulip-configuration-legendOffset1" name="tulip-configuration-legendOffset1" />\n      </div>\n    </div>\n    \n    <h2>Interactions</h2>\n    \n    <div class="tulip-configuration-property">\n      <input type="checkbox" id="tulip-configuration-legendDragOn" name="tulip-configuration-legendDragOn" />\n      <label for="tulip-configuration-legendDragOn">Legend drag on</label>\n      <p class="tulip-help">When enabled, it allows the user to drag the legend around.  Useful for placing the legend in a custom spot for exporting.</p>\n    </div>\n    \n    <div class="tulip-configuration-property">\n      <input type="checkbox" id="tulip-configuration-mapDragOn" name="tulip-configuration-mapDragOn" />\n      <label for="tulip-configuration-mapDragOn">Map drag on</label>\n      <p class="tulip-help">When enabled, it allows the user to drag the map around (just the actual map features).  Useful for placing the legend in a custom spot for exporting.</p>\n    </div>\n    \n    <div class="tulip-configuration-property">\n      <input type="checkbox" id="tulip-configuration-canvasDragOn" name="tulip-configuration-canvasDragOn" />\n      <label for="tulip-configuration-canvasDragOn">Canvas drag on</label>\n      <p class="tulip-help">When enabled, it allows the user to drag the map around.  This is helpful for an interactive map.  This option will override the other dragging options.</p>\n    </div>\n    \n    <h2>Reference</h2>\n    \n    <div class="tulip-configuration-property">\n      <input type="checkbox" id="tulip-configuration-graticuleOn" name="tulip-configuration-graticuleOn" />\n      <label for="tulip-configuration-graticuleOn">Graticule on</label>\n      <p class="tulip-help">When enabled, draws a graticule grid.</p>\n    </div>\n      \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-stylesGraticule">Graticule styles:</label>\n      <input type="text" id="tulip-configuration-stylesGraticule" class="tulip-attribute-picker" name="tulip-configuration-stylesGraticule" />\n      <p class="tulip-help">SVG styles for graticule.</p>\n    </div>\n    \n    <div class="tulip-configuration-property">\n      <input type="checkbox" id="tulip-configuration-globeOn" name="tulip-configuration-globeOn" />\n      <label for="tulip-configuration-globeOn">Globe on</label>\n      <p class="tulip-help">When enabled, draws a globe outline.</p>\n    </div>\n      \n    <div class="tulip-configuration-property">\n      <label for="tulip-configuration-stylesGlobe">Globe styles:</label>\n      <input type="text" id="tulip-configuration-stylesGlobe" class="tulip-attribute-picker" name="tulip-configuration-stylesGlobe" />\n      <p class="tulip-help">SVG styles for globe.</p>\n    </div>\n    \n    <h2>Export</h2>\n    \n    <div class="tulip-configuration-property">\n      <input type="submit" class="tulip-export-image" value="Export to Image" />\n    </div>\n    \n  </form>\n  \n  <footer>\n    Tulip is brought to you by <a href="http://www.minnpost.com/" target="_blank">MinnPost</a>.  Code is on <a href="https://github.com/MinnPost/tulip" target="_blank">Github</a>.\n  </footer>\n</section>';

}
return __p
};

this["Tulip"]["templates"]["app/templates/loading.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="tulip-loading-container">\n  <div class="tulip-loading">\n    L<span class="tulip-u">o</span>ading...\n  </div>\n</div>';

}
return __p
};

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
    
    // Example config
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
        _.extend(this.defaultMapConfig(), this.exampleMapConfig()), 
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

/**
 * Models for Tulip app
 */

(function(Tulip, $, undefined) {
  /**
   * Basic model for configuration management
   */
  Tulip.prototype.TulipMapConfigurationModel = Backbone.Model.extend({
  
    initialize: function(data, options) {
      this.options = options;
      
      var projectionOptions = [
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
      ];
      
      if (!_.isArray(options.app.options.projectionOptions) || 
        options.app.options.projectionOptions.length === 0) {
        projectionOptions = _.union(projectionOptions, this.projectionOptionsExtended);
      }
      else {
        projectionOptions = options.app.options.projectionOptions;
      }
      
      this.projectionOptions = projectionOptions;
    },
    
    // Cole scarel options
    colorScaleOptions: [
      { value: 'quantile', label: 'Quantiles' },
      { value: 'linear', label: 'Linear' },
      { value: 'identity', label: 'Identity' },
      { value: 'sqrt', label: 'Square Root' },
      { value: 'pow', label: 'Power' },
      { value: 'log', label: 'Logarithmic' },
      { value: 'quantize', label: 'Quantize' }
    ],
    
    // Extended projection options
    projectionOptionsExtended: [
      { value: 'aitoff', label: 'Aitoff' },
      { value: 'airy', label: 'Airy’s minimum-error azimuthal' },
      { value: 'albers', label: 'Albers equal-area conic' },
      { value: 'armadillo', label: 'Armadillo' },
      { value: 'august', label: 'August conformal' },
      //{ value: 'azimuthalEqualArea', label: 'Lambert azimuthal equal-area' },
      //{ value: 'azimuthalEquidistant', label: 'azimuthal equidistant' },
      { value: 'baker', label: 'Baker Dinomic' },
      { value: 'berghaus', label: 'Berghaus Star' },
      { value: 'boggs', label: 'Boggs eumorphic' },
      { value: 'bonne', label: 'Bonne' },
      { value: 'bromley', label: 'Bromley' },
      { value: 'chamberlin', label: 'Chamberlin trimetric' },
      { value: 'collignon', label: 'Collignon' },
      //{ value: 'conicConformal', label: 'Lambert conformal conic' },
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
      //{ value: 'equirectangular', label: 'Equirectangular (Plate Carrée), Cassini' },
      { value: 'fahey', label: 'Fahey' },
      { value: 'foucaut', label: 'Foucaut' },
      { value: 'gilbert', label: 'Gilbert’s two-world perspective' },
      { value: 'ginzburg4', label: 'Ginzburg IV' },
      { value: 'ginzburg5', label: 'Ginzburg V' },
      { value: 'ginzburg6', label: 'Ginzburg VI' },
      { value: 'ginzburg8', label: 'Ginzburg VIII' },
      { value: 'ginzburg9', label: 'Ginzburg IX' },
      //{ value: 'gnomonic', label: 'gnomonic' },
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
      //{ value: 'mercator', label: 'Mercator' },
      { value: 'miller', label: 'Miller' },
      { value: 'modifiedStereographic', label: 'modified stereographic' },
      { value: 'mollweide', label: 'Mollweide, Atlantis' },
      { value: 'mtFlatPolarParabolic', label: 'McBryde–Thomas flat-polar parabolic' },
      { value: 'mtFlatPolarQuartic', label: 'McBryde–Thomas flat-polar quartic' },
      { value: 'mtFlatPolarSinusoidal', label: 'McBryde–Thomas flat-polar sinusoidal' },
      { value: 'naturalEarth', label: 'Natural Earth' },
      { value: 'nellHammer', label: 'Nell–Hammer' },
      //{ value: 'orthographic', label: 'orthographic' },
      { value: 'peirceQuincuncial', label: 'Pierce quincuncial' },
      { value: 'polyconic', label: 'polyconic' },
      { value: 'rectangularPolyconic', label: 'rectangular polyconic' },
      { value: 'robinson', label: 'Robinson' },
      { value: 'satellite', label: 'satellite (tilted perpsective)' },
      { value: 'sinusoidal', label: 'sinusoidal' },
      { value: 'sinuMollweide', label: 'Sinu-Mollweide' },
      //{ value: 'stereographic', label: 'stereographic' },
      { value: 'times', label: 'Times' },
      //{ value: 'transverseMercator', label: 'transverse Mercator' },
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
    ]
  });
})(Tulip, jQuery);

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
      
      this.options.map.on('mapRendered', function() {
        thisView.handleRender();
      });
    },
    
    events: {
      'click .tulip-export-image': 'handleExportImage'
    },
    
    bindings: {
      '.tulip-configuration-fileName': {
        observe: 'fileName'
      },
      '.tulip-configuration-fileSize': {
        observe: 'fileSize'
      },
      '.tulip-configuration-fileType': {
        observe: 'fileType'
      },
      '#tulip-configuration-width': {
        observe: 'width',
        events: ['blur', 'change', 'cut', 'paste']
      },
      '#tulip-configuration-height': {
        observe: 'height',
        events: ['blur', 'change', 'cut', 'paste']
      },
      '#tulip-configuration-stylesBackground': {
        observe: 'stylesBackground',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return JSON.stringify(value);
        },
        onSet: function(value, options) {
          return JSON.parse(value);
        }
      },
      '#tulip-configuration-mapOffset0': {
        observe: 'mapOffset',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return this.model.get('mapOffset')[0];
        },
        onSet: function(value, options) {
          var mapOffset = _.clone(this.model.get('mapOffset'));
          mapOffset[0] = parseFloat(value);
          return mapOffset;
        }
      },
      '#tulip-configuration-mapOffset1': {
        observe: 'mapOffset',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return this.model.get('mapOffset')[1];
        },
        onSet: function(value, options) {
          var mapOffset = _.clone(this.model.get('mapOffset'));
          mapOffset[1] = parseFloat(value);
          return mapOffset;
        }
      },
      '#tulip-configuration-projection': {
        observe: 'projection',
        selectOptions: {
          collection: function() {
            return this.model.projectionOptions;
          }
        }
      },
      '#tulip-configuration-rotation0': {
        observe: 'rotation',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return this.model.get('rotation')[0];
        },
        onSet: function(value, options) {
          var rotation = _.clone(this.model.get('rotation'));
          rotation[0] = parseFloat(value);
          return rotation;
        }
      },
      '#tulip-configuration-rotation1': {
        observe: 'rotation',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return this.model.get('rotation')[1];
        },
        onSet: function(value, options) {
          var rotation = _.clone(this.model.get('rotation'));
          rotation[1] = parseFloat(value);
          return rotation;
        }
      },
      '#tulip-configuration-rotation2': {
        observe: 'rotation',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return this.model.get('rotation')[2];
        },
        onSet: function(value, options) {
          var rotation = _.clone(this.model.get('rotation'));
          rotation[2] = parseFloat(value);
          return rotation;
        }
      },
      '#tulip-configuration-styles': {
        observe: 'styles',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return JSON.stringify(value);
        },
        onSet: function(value, options) {
          return JSON.parse(value);
        }
      },
      '#tulip-configuration-stylesHover': {
        observe: 'stylesHover',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return JSON.stringify(value);
        },
        onSet: function(value, options) {
          return JSON.parse(value);
        }
      },
      '#tulip-configuration-colorOn': {
        observe: 'colorOn'
      },
      '#tulip-configuration-colorProperty': {
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
      '#tulip-configuration-colorSet': {
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
      '#tulip-configuration-colorScale': {
        observe: 'colorScale',
        selectOptions: {
          collection: function() {
            return this.model.colorScaleOptions;
          }
        }
      },
      '#tulip-configuration-colorReverse': {
        observe: 'colorReverse'
      },
      '#tulip-configuration-tooltipOn': {
        observe: 'tooltipOn'
      },
      '#tulip-configuration-tooltipContent': {
        observe: 'tooltipContent',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return this.model.get('tooltipContentTemplate');
        },
        onSet: function(value, options) {
          this.model.set('tooltipContentTemplate', value, { silent: true });
          return function(d) {
            return _.template(value)({ p: d.properties });
          };
        }
      },
      '#tulip-configuration-legendOn': {
        observe: 'legendOn'
      },
      '#tulip-configuration-legendTitle': {
        observe: 'legendTitle'
      },
      '#tulip-configuration-legendScale': {
        observe: 'legendScale'
      },
      '#tulip-configuration-legendFormatter': {
        observe: 'legendFormatter',
        onGet: function(value, options) {
          return this.model.get('legendFormatterString');
        },
        onSet: function(value, options) {
          this.model.set('legendFormatterString', value, { silent: true });
          return d3.format(value);
        }
      },
      '#tulip-configuration-stylesLegendContainer': {
        observe: 'stylesLegendContainer',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return JSON.stringify(value);
        },
        onSet: function(value, options) {
          return JSON.parse(value);
        }
      },
      '#tulip-configuration-stylesLegendTitleText': {
        observe: 'stylesLegendTitleText',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return JSON.stringify(value);
        },
        onSet: function(value, options) {
          return JSON.parse(value);
        }
      },
      '#tulip-configuration-stylesLegendText': {
        observe: 'stylesLegendText',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return JSON.stringify(value);
        },
        onSet: function(value, options) {
          return JSON.parse(value);
        }
      },
      '#tulip-configuration-stylesLegendSwatch': {
        observe: 'stylesLegendSwatch',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return JSON.stringify(value);
        },
        onSet: function(value, options) {
          return JSON.parse(value);
        }
      },
      '#tulip-configuration-legendOffset0': {
        observe: 'legendOffset',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return this.model.get('legendOffset')[0];
        },
        onSet: function(value, options) {
          var legendOffset = _.clone(this.model.get('legendOffset'));
          legendOffset[0] = parseFloat(value);
          return legendOffset;
        }
      },
      '#tulip-configuration-legendOffset1': {
        observe: 'legendOffset',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return this.model.get('legendOffset')[1];
        },
        onSet: function(value, options) {
          var legendOffset = _.clone(this.model.get('legendOffset'));
          legendOffset[1] = parseFloat(value);
          return legendOffset;
        }
      },
      '#tulip-configuration-legendDragOn': {
        observe: 'legendDragOn'
      },
      '#tulip-configuration-mapDragOn': {
        observe: 'mapDragOn'
      },
      '#tulip-configuration-canvasDragOn': {
        observe: 'canvasDragOn'
      },
      '#tulip-configuration-graticuleOn': {
        observe: 'graticuleOn'
      },
      '#tulip-configuration-globeOn': {
        observe: 'globeOn'
      },
      '#tulip-configuration-stylesGraticule': {
        observe: 'stylesGraticule',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return JSON.stringify(value);
        },
        onSet: function(value, options) {
          return JSON.parse(value);
        }
      },
      '#tulip-configuration-stylesGlobe': {
        observe: 'stylesGlobe',
        events: ['blur', 'change', 'cut', 'paste'],
        onGet: function(value, options) {
          return JSON.stringify(value);
        },
        onSet: function(value, options) {
          return JSON.parse(value);
        }
      }
    },
    
    // Main template render
    render: function() {
      this.$el.html(_.template(this.templates['configuration.html'])({ }));
      this.stickit();
      this.handleUpload().makeAttributePicker();
      return this;
    },
    
    // Handle render.  When simple map is renderd
    handleRender: function() {
      var thisView = this;
      
      // Handle dragging to update config
      thisView.options.map.smd.dragSimple.on('dragend', function(d) {
        var thisEl = d3.select(this);
        var offset = [ d.x, d.y ];
        
        if (thisEl.classed('smd-draggable-map-group')) {
          thisView.model.set('mapOffset', offset);
        }
        else {
          thisView.model.set('legendOffset', offset);
        }
      });
    },
    
    // Handle uploding of file
    handleUpload: function() {
      var thisView = this;
      this.$upload = this.$el.find('.tulip-input-file');
      
      this.$upload.on('dragover dragenter', function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).addClass('hovered');
        e.originalEvent.dataTransfer.dropEffect = 'copy';
      });
      this.$upload.on('dragexit', function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).removeClass('hovered');
      });
      this.$upload.on('drop', function(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.originalEvent.dataTransfer.files;
        
        if (files.length > 0) {
          thisView.readFile(files[0]);
        }
      });
      
      return this;
    },
    
    // Read uploaded file
    readFile: function(file) {
      var thisView = this;
      var reader = new FileReader();
      
      reader.onload = function(e) {
        var data, type;
        
        try {
          data = JSON.parse(e.target.result);
          
          if (_.size(data) === 0 || _.isUndefined(data.type)) {
            return false;
          }
          else {
            if (['Point', 'MultiPoint', 'LineString', 'MultiLineString', 'Polygon', 'MultiPolygon', 'GeometryCollection', 'Feature', 'FeatureCollection'].indexOf(data.type) >= 0) {
              type = 'geojson';
            }
            else if (data.type === 'Topology') {
              type = 'topology';
            }
            else {
              return false;
            }
          }
        }
        catch(err) {
          return false;            
        }
        
        // Set new data
        thisView.model.set({
          datasource: undefined,
          fileName: file.name,
          fileSize: file.size,
          fileType: type
        }, { silent: true });
        thisView.model.set('data', data);
        
        // Set color property.  Just use the first one
        thisView.model.set('colorProperty', _.keys(thisView.options.map.smd.data.features[0].properties)[0]);
      };
      
      reader.readAsText(file);
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
    },
    
    // Make attribute picker
    makeAttributePicker: function() {
      var thisView = this;
      var template = _.template(this.templates['attribute-picker.html']);
      var attributes = {
        stroke: 'color',
        'stroke-width': 'measurement',
        'stroke-opacity': 'percent',
        fill: 'color',
        'fill-opacity': 'percent',
        'font-family': 'font-family',
        'font-size': 'measurement'
      };
      
      this.$el.find('.tulip-attribute-picker').each(function() {
        var $this = $(this);
        var $picker;
        var $label = $this.parent().find('label[for=' + $this.attr('id') + ']');
        
        // Make output
        $this.wrap('<div class="tulip-attribute-picker-container"></div>');
        $this.parent().append(template({
          attributes: attributes,
          values: JSON.parse($this.val())
        }));
        $picker = $this.parent().find('.tulip-attribute-picker-picker');
        
        // Mark label and hide
        $label.addClass('tulip-attribute-picker-label');
        $this.addClass('tulip-invisible');
        
        // Color picker
        $picker.find('input[data-type=color]').spectrum({
          showInput: true,
          showPalette: _.isArray(thisView.options.app.options.palette) ? true : false,
          palette: thisView.options.app.options.palette,
          clickoutFiresChange: true,
          showInitial: true,
          showButtons: false,
          preferredFormat: 'hex'
        });
        
        // Handle clicka
        $this.on('click focus', function(e) {
          $picker.slideDown();
        });
        $label.on('click focus', function(e) {
          $picker.slideDown();
        });
        
        // When all done
        $picker.find('.tulip-attribute-picker-done').on('click', function(e) {
          e.preventDefault();
          var values = {};
          
          $picker.find('.tulip-attribute').each(function() {
            var $attr = $(this);
            var $input = $(this).find('input');
            var $label = $(this).find('label');
            
            if ($input.val() !== '') {
              values[$label.data('attribute')] = $input.val();
            }
          });
          $this.val(JSON.stringify(values));
        
          $picker.slideUp(function() {
            $this.trigger('change');
          });
        });
      });
      
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
    
    // Loading
    loading: function() {
      this.$mapEl.html(_.template(this.templates['loading.html'])({ }));
    },
    
    // Main template render
    render: function(config) {
      var thisView = this;
      
      // Make config
      config = _.extend(this.model.toJSON(), config);
      config.container = this.mapEl;
      config.startManually = true;
      
      // Make width height
      this.$mapEl.css('width', config.width);
      if (['100%', 'auto'].indexOf(config.height) >= 0) {
        this.$mapEl.css('height', ($(window).height() - 5) + 'px');
      }
      else {
        this.$mapEl.css('height', config.height);
      }
      
      // Make map
      this.$mapEl.html('');
      this.smd = SimpleMapD3(config);
      
      // Trigger when data is loaded
      this.smd.events.on('dataLoaded', function(smd) {
        thisView.trigger('mapDataLoaded');
      });
      
      // When rendered
      this.smd.events.on('rendered', function(smd) {
        thisView.trigger('mapRendered');
      });
      
      this.smd.start();
      
      return this;
    }
  });
})(Tulip, jQuery, undefined);