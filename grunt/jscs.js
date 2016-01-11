module.exports = {
  all: {
    src: [
      '<%= app_files.js %>',
      '<%= app_files.jsunit %>',
      '<%= app_files.grunt %>'
    ]
  },
  options: {
    config: '.jscsrc',
    reporter: require('jscs-stylish').path
  }
};
