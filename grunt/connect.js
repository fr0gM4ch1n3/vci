module.exports = {
  server:{
    options: {
      port: 4000,
      hostname: '0.0.0.0',
      base: 'build',
      protocol: 'http',
      livereload: true,
      debug: true,
      middleware: function (connect, options) {
        if (!Array.isArray(options.base)) {
          options.base = [options.base];
        }

        var middlewares = [];

        middlewares.push(require('connect-modrewrite')(['^[^\\.]*$ /index.html [L]']));
        middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);
        
        return middlewares;
      }
    },
    proxies: [
      {
        context: '/api/',
        host: '127.0.0.1',
        port: 8080,
        https: false,
        xforward: true,
        debug: true,
        headers: {
          'X-Backend': 'api'
        },
        hideHeaders: [],
        rewrite: {
          '^/api/': '/'
        }
      }
    ]
  }
};
