module.exports = {
  src: ['<%= app_files.js %>'],
  test: ['<%= app_files.jsunit %>'],
  gruntfile: ['<%= app_files.grunt %>'],
  options: {
    reporter: require('jshint-stylish')
  },
  globals: {}
};
