/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") + "\\n" %>' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= _.isObject(pkg.author) ?  pkg.author.name : pkg.author %>;' +
        ' Licensed <%= _.isArray(pkg.licenses) ? _.pluck(pkg.licenses, "type").join(", ") : pkg.license %>' + 
        '<%= "\\n" %>' + 
        ' */' +
        '<%= "\\n\\n" %>'
    },
    jshint: {
      options: {
        curly: true,
        //es3: true,
        forin: true,
        latedef: true,
        //maxlen: 80,
        indent: 2,
        multistr: true
      },
      files: ['Gruntfile.js', 'app/js/*.js']
    },
    clean: {
      folder: 'dist/'
    },
    jst: {
      compile: {
        options: {
          namespace: 'Tulip.templates'
        },
        files: {
          'dist/templates.js': ['app/templates/*.html']
        }
      }
    },
    concat: {
      options: {
        separator: '\r\n\r\n',
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: [
          'dist/templates.js',
          'app/js/app.js',
          'app/js/models.js',
          'app/js/views.js'
        ],
        dest: 'dist/<%= pkg.name %>.src.js'
      },
      dist_css: {
        src: [
          'app/css/styles.css'
        ], 
        dest: 'dist/<%= pkg.name %>.css'
      },
      libs: {
        options: {
          separator: ';\r\n\r\n'
        },
        src: [
          'bower_components/underscore/underscore-min.js',
          'bower_components/jquery/jquery.min.js',
          'bower_components/backbone/backbone-min.js',
          'bower_components/backbone.stickit/backbone.stickit.js',
          'bower_components/d3/d3.min.js',
          'bower_components/d3-geo-projection/index.js',
          'bower_components/topojson/topojson.js',
          'bower_components/pancakejs/pancake.stack.min.js',
          'bower_components/spectrum/spectrum.js',
          'bower_components/simple-map-d3/lib/js/simple-map-d3.js'
        ],
        dest: 'dist/<%= pkg.name %>.libs.js'
      },
      libs_css: {
        src: [
          'app/css/reset.css',
          'bower_components/spectrum/spectrum.css',
          'bower_components/simple-map-d3/lib/css/simple-map-d3.css'
        ], 
        dest: 'dist/<%= pkg.name %>.libs.css'
      }
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: ['<%= concat.dist.dest %>'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    copy: {
      images: {
        files: [
          {
            cwd: './app/css/images/',
            expand: true,
            filter: 'isFile',
            src: ['*'],
            dest: 'dist/images/'
          }
        ]
      }
    },
    connect: {
      server: {
        options: {
          port: 8765
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: 'jshint'
    }
  });
  
  // Load plugin tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-connect');
  

  // Default build task
  grunt.registerTask('default', ['jshint', 'clean', 'jst', 'concat', 'uglify', 'copy']);
  grunt.registerTask('server', ['connect', 'watch']);
};
