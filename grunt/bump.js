module.exports = {
  options: {
    files: ['package.json', 'bower.json'],
    commit: false,
    commitMessage: 'DevNet.tk Webinterface: v%VERSION%',
    commitFiles: ['package.json', 'client/bower.json'],
    createTag: false,
    tagName: 'v%VERSION%',
    tagMessage: 'Version %VERSION%',
    push: false,
    pushTo: 'origin'
  }
};
