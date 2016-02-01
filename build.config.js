module.exports = {
  build_dir: 'build',
  compile_dir: 'bin',
  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/main.tpl.html', 'src/index.html' ],
    less: 'src/less/main.less',

    i18n: [ '*.json' ],

    grunt: ['Gruntfile.js', 'grunt/*.js'],
    gif: ['src/images/*.gif' ]
  },
  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },
  vendor_files: {
    js: [
      'vendor/angular/angular.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-ui-utils/modules/route/route.js',
      'vendor/angular-translate/angular-translate.min.js',
      'vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'vendor/angular-sanitize/angular-sanitize.min.js'
    ],
    css: [
    ],
    assets: [
      'vendor/bootstrap/fonts/*',
      'vendor/font-awesome/fonts/*'
    ]
  },
};
