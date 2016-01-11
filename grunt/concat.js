module.exports = {
  build_css: {
    src: ['<%= vendor_files.css %>',
      '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css'
    ],
    dest: '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css'
  },
  compile_js: {
    options: {
      banner: '<%= meta.banner %>'
    },
    src: ['<%= vendor_files.js %>',
      'module.prefix',
      '<%= build_dir %>/src/**/*.js',
      '<%= html2js.app.dest %>',
      '<%= html2js.common.dest %>',
      'module.suffix'
    ],
    dest: '<%= compile_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.js'
  }
};
