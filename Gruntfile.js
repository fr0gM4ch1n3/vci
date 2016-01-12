module.exports = function (grunt) {
  grunt.option('stack', true);
  grunt.option('verbose', true);
  grunt.option('debug', true);

  // require('jit-grunt')(grunt, {
  //   delta: 'grunt/delta.js'
  // });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var userConfig = require('./build.config.js');

  var taskConfig = require('load-grunt-configs')(grunt, {
    config: {
      src: 'grunt/*.js'
    }
  });

  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json')
  };

  grunt.initConfig(grunt.util._.extend(gruntConfig, taskConfig, userConfig));

  // grunt.registerTask('watch');
  grunt.renameTask('watch', 'delta');
  grunt.registerTask('watch', ['build', 'karma:unit', 'delta']);

  // grunt.registerTask('default', ['build', 'test', 'compile']);
  grunt.registerTask('default', ['build', 'compile']);

  grunt.registerTask('build', [
    'clean', 'html2js', 'jshint', /*'jscs',*/ 'less:build',
    'copy:build_i18n', 'concat:build_css', 'copy:build_app_assets',
    'copy:build_vendor_assets', 'copy:build_appjs', 'copy:build_vendorjs', 'index:build'/*,
    'karmaconfig', 'karma:continuous'*/
  ]);

  grunt.registerTask('compile', [
    'less:compile', 'copy:build_i18n',
    'copy:compile_assets', 'ngAnnotate', 'concat:compile_js', 'uglify', 'index:compile'
  ]);

  grunt.registerTask('test', [
    'karmaconfig', 'karma:continuous'
  ]);
   
  grunt.registerTask('dev', [
    'build', 'serve', 'delta'
  ]);

  grunt.registerTask('serve', [
    'configureProxies:server', 'connect:server'
  ]);

  function filterForJS (files) {
    return files.filter(function (file) {
      return file.match(/\.js$/);
    });
  }

  function filterForCSS (files) {
    return files.filter(function (file) {
      return file.match(/\.css$/);
    });
  }

  grunt.registerMultiTask('index', 'Process index.html template', function () {
    var dirRE = new RegExp('^(' + grunt.config('build_dir') + '|' + grunt.config('compile_dir') + ')\/', 'g');
    var jsFiles = filterForJS(this.filesSrc).map(function (file) {
      return file.replace(dirRE, '');
    });
    var cssFiles = filterForCSS(this.filesSrc).map(function (file) {
      return file.replace(dirRE, '');
    });

    grunt.file.copy('src/index.html', this.data.dir + '/index.html', {
      process: function (contents, path) {
        var data = grunt.config(grunt.task.current.name)[grunt.task.current.target];

        return grunt.template.process(contents, {
          data: {
            base: data.base,
            scripts: jsFiles,
            styles: cssFiles,
            version: grunt.config('pkg.version')
          }
        });
      }
    });
  });

  grunt.registerMultiTask('karmaconfig', 'Process karma config templates', function () {
    var jsFiles = filterForJS(this.filesSrc);    
    grunt.file.copy('karma/karma-unit.tpl.js', grunt.config('build_dir') + '/karma-unit.js', { 
      process: function (contents, path) {
        return grunt.template.process(contents, {
          data: {
            scripts: jsFiles
          }
        });
      }
    });
  });
};
