module.exports = {
    target: {
        before: function (grunt, options) {
            var npm = require('npm');
            npm.load(grunt.pkg, function (error) {
                if (error) {
                    grunt.log.error([error]);
                } else {
                    npm.registry.log.on('log', function (message) {
                        grunt.log.writeln([message]);
                    });
                    npm.commands.set(['prefix', './server/node_modules'], function (err, result) {
                        grunt.log.writeln([err || result]);
                        npm.commands.install(['--production'], function (error, data) {
                            if (error) {
                                grunt.log.error([error]);
                            } else {
                                grunt.log.writeln([data]);
                            }
                        });
                    });
                }
            });
        },
        after: function (grunt, options) {
            console.log('Bye!');
        },
        options: {
            cwd: 'server',
            args: [],
            nodeargs: ['--harmony']
        },
        src: ['app.js']
    }
};
