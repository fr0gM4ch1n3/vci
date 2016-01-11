module.exports = function ( karma ) {
  karma.set({
    basePath: '../',
    files: [
      <% scripts.forEach( function ( file ) { %>'<%= file %>',
      <% }); %>
      'src/**/*.js'
    ],
    exclude: [
      'src/assets/**/*.js'
    ],
    frameworks: [ 'jasmine' ],
    plugins: [ 'karma-jasmine', 'karma-phantomjs-launcher', 'karma-junit-reporter' ],
    reporters: ['dots', 'junit'],
    junitReporter: {
        outputFile: 'karma/test-results.xml'
    },
    port: 9019,
    runnerPort: 9100,
    urlRoot: '/',
    autoWatch: false,
    browsers: [
      'PhantomJS'
    ]
  });
};
