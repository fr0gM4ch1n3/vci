module.exports = {
  options: {
    space: '  ',
    wrap: '"use strict";\n\n {%= __ngModule %}',
    name: 'config'
  },
  development: {
    options: {
      dest: '<%= build_dir %>/src/app/config.js'
    },
    constants: {
      ENV: {
        name: 'development',
        apiEndpoint: 'http://127.0.0.1:8080'
      }
    }
  },
  production: {
    options: {
      dest: '<%= compile_dir %>/src/app/config.js'
    },
    constants: {
      ENV: {
        name: 'production',
        apiEndpoint: 'http://127.0.0.1:8080'
      }
    }
  }


};
