module.exports = {
  options: {
    configFile: '<%= build_dir %>/karma-unit.js'
  },
  unit: {
    port: 9019,
    background: true,
    singleRun: false
  },
  continuous: {
    singleRun: true
  }
};
