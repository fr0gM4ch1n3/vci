module.exports = {
  server:{
    options: {
      port: 4000,
      hostname: '0.0.0.0',
      base: 'build',
      protocol: 'http',
      livereload: true,
      open: {
        target: '<%= connect.server.options.protocol %>://<%= connect.server.options.hostname %>:<%= connect.server.options.port %>'
      },
      debug: true,
      middleware: function (connect, options) {
        if (!Array.isArray(options.base)) {
          options.base = [options.base];
        }

        var middlewares = [];

        // Setup the proxy
        middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);

        // Setup the HTML5 rewrite
        // middlewares.push(require('connect-modrewrite')(['!(\\..+)$ / [L]']));


        // Serve static files.
        // options.base.forEach(function (base) {
        middlewares.push(require('serve-static')('build'));
        // });

        // Make directory browse-able.
        // var directory = options.directory || options.base[options.base.length - 1];
        // middlewares.push(connect.directory(directory));

        return middlewares;
      }
    },
    proxies: [
      {
        context: '/api/',
        host: '127.0.0.1',
        port: 3001,
        https: false,
        xforward: true,
        debug: true,
        headers: {
          'X-Backend': 'api'
        },
        hideHeaders: [] // ,
        // rewrite: {
        //   '^/api/': '/'
        // }
      }
    ]
  }
};
