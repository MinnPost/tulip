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
      '#tulip-configuration-aspectRatio': {
        observe: 'aspectRatio',
        selectOptions: {
          collection: function() {
            return this.model.aspectRatioOptions;
          }
        }
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
      var title = this.options.map.model.get('fileName') || 'tulip-map';
      var imageFormat = this.$el.find('#tulip-export-format').val() || 'png';
      var scale = parseFloat(this.$el.find('#tulip-export-scale').val()) || 1;
      var image, title, $temp;
      
      // For scaling, we create a temporary scg element.  This
      // is pretty hacky
      if (!_.isNaN(scale) && scale > 0 && scale !== 1) {
        $temp = $('.tulip-temp-container')
        $temp.html('').append(map.$mapEl.clone());
        $temp.find('svg')
          .attr('transform', 'scale(' + scale + ')')
          .width(map.$mapEl.width() * scale)
          .height(map.$mapEl.height() * scale)
          .attr('id', id);
      }
      else {
        map.$mapEl.find('svg').attr('id', id);
      }
      
      title = title.split('.')[0];
      image = Pancake(id, imageFormat);
      image.download(title + '.' + imageFormat);
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
      
      // Make map
      this.smd = this.renderMap(config, this.mapEl);
      
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
    },
    
    // Abstracted map making function
    renderMap: function(config, el) {
      config = config || {};
      el = el || this.mapEl;
      var $el = $(el);
      var r, w, h;
      
      // Make config
      config = _.extend(this.model.toJSON(), config);
      config.container = el;
      config.startManually = true;
      
      // Set width and height on original container
      $el.css('width', config.width);
      if (['100%', 'auto'].indexOf(config.height) >= 0) {
        $el.css('height', ($(window).height() - 5) + 'px');
      }
      else {
        $el.css('height', config.height);
      }
      
      // Handle aspect ratio
      if (config.aspectRatio) {
        r = parseFloat(config.aspectRatio.split(':')[0]) / parseFloat(config.aspectRatio.split(':')[1]);
        $el.height($el.width() / r);
      }
      
      // Make map
      $el.html('');
      return SimpleMapD3(config);
    }
  });
})(Tulip, jQuery, undefined);