module.exports = {
  options: {
    livereload: true
  },
  gruntfile: {
    files: 'Gruntfile.js',
    tasks: ['jshint:gruntfile'],
    options: {
      livereload: false
    }
  },
  jssrc: {
    files: ['<%= app_files.js %>'],
    tasks: ['jshint:src'/*, 'karma:unit:run'*/, 'copy:build_appjs']
  },
  assets: {
    files: ['src/assets/**/*'],
    tasks: ['copy:build_app_assets', 'copy:build_vendor_assets']
  },
  html: {
    files: ['<%= app_files.html %>'],
    tasks: ['index:build']
  },
  tpls: {
    files: ['<%= app_files.atpl %>', '<%= app_files.ctpl %>'],
    tasks: ['html2js']
  },
  less: {
    files: ['src/**/*.less'],
    tasks: ['less:build']
  },
  i18n: {
    files: ['src/i18n/<%= app_files.i18n %>'],
    tasks: ['copy:build_i18n']
  },
  jsunit: {
    files: ['<%= app_files.jsunit %>'],
    tasks: ['jshint:test'/*, 'karma:unit:run'*/],
    options: {
      livereload: false
    }
  }
};
