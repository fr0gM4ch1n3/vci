'use strict';

var http = require('http'),
    express = require('express'),
    socketio = require('socket.io');

var start = function() {
    var app = express(),
        server = http.Server(app),
        io = socketio(server);

    server.listen(4001);

    console.log("Listening to port 4001.")

    io.on('connection', function (socket) {
        console.log("Connected!")
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
            console.log(data);
        });
    });
};

module.exports = {
    start: start
};
