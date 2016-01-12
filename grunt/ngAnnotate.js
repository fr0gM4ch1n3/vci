module.exports = {
  compile: {
    files: [{
      src: ['<%= app_files.js %>'],
      cwd: '<%= build_dir %>',
      dest: '<%= build_dir %>',
      expand: true
    }]
  }
};
