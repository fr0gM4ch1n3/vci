module.exports = {
  build: {
    files: {
      '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css': '<%= app_files.less %>'
    }
  },
  compile: {
    files: {
      '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css': '<%= app_files.less %>'
    },
    options: {
      cleancss: true,
      compress: true
    }
  }
};
