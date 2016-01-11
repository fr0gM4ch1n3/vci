module.exports = {
  build_app_assets: {
    files: [{
      src: ['**', '!**README.md'],
      dest: '<%= build_dir %>/assets/',
      cwd: 'src/assets',
      expand: true
    }]
  },
  build_vendor_assets: {
    files: [{
      src: ['<%= vendor_files.assets %>', '!**README.md'],
      dest: '<%= build_dir %>/assets/',
      cwd: '.',
      expand: true,
      flatten: true
    }]
  },
  build_appjs: {
    files: [{
      src: ['<%= app_files.js %>', '!**README.md'],
      dest: '<%= build_dir %>/',
      cwd: '.',
      expand: true
    }]
  },
  build_vendorjs: {
    files: [{
      src: ['<%= vendor_files.js %>', '!**README.md'],
      dest: '<%= build_dir %>/',
      cwd: '.',
      expand: true
    }]
  },
  build_i18n: {
    files: [{
      src: ['<%= app_files.i18n %>', '!**README.md'],
      dest: '<%= build_dir %>/i18n/',
      cwd: 'src/i18n',
      expand: true
    }]
  },
  compile_i18n: {
    files: [{
      src: ['<%= app_files.i18n %>', '!**README.md'],
      dest: '<%= compile_dir %>/i18n/',
      cwd: 'src/i18n',
      expand: true
    }]
  },
  compile_assets: {
    files: [{
      src: ['**', '!**README.md'],
      dest: '<%= compile_dir %>/assets',
      cwd: '<%= build_dir %>/assets',
      expand: true
    }]
  }
};
