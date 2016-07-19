var express    = require('express');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var jwt        = require('jsonwebtoken');
var mongoose   = require('mongoose');
var app        = express();

var port = process.env.PORT || 3001;
var User     = require('./models/User');
var baseURL = '/api';

mongoose.connect(process.env.MONGO_URL || '127.0.0.1');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});



app.post(baseURL + '/authenticate', function(req, res) {
    User.findOne({username: req.body.username, password: req.body.password}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: 'Error occured: ' + err
            });
        } else {
            if (user) {
                delete user.password;
                res.json({
                    type: true,
                    data: user,
                    token: user.token
                }); 
            } else {
                res.json({
                    type: false,
                    data: 'Incorrect email/password'
                });    
            }
        }
    });
});


app.post(baseURL + '/signup', function(req, res) {
    User.findOne({username: req.body.username, password: req.body.password}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: 'Error occured: ' + err
            });
        } else {
            if (user) {
                res.json({
                    type: false,
                    data: 'User already exists!'
                });
            } else {
                var userModel = new User();
                userModel.username = req.body.username;
                userModel.email = req.body.email;
                userModel.password = req.body.password;
                userModel.save(function(err, user) {
                    user.token = jwt.sign(user, process.env.JWT_SECRET || 'secret');
                    user.save(function(err, user1) {
                        console.log(err, user1);
                        res.json({
                            type: true,
                            data: user1,
                            token: user1.token
                        });
                    });
                });
            }
        }
    });
});

app.get(baseURL + '/me', ensureAuthorized, function(req, res) {
    User.findOne({token: req.token}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: 'Error occured: ' + err
            });
        } else {
            delete user.password;
            res.json({
                type: true,
                data: user
            });
        }
    });
});

function ensureAuthorized(req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(' ');
        bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.send(403);
    }
}

process.on('uncaughtException', function(err) {
    console.log(err);
    throw err;
});

// Start Server
app.listen(port, function () {
    console.log( 'Express server listening on port ' + port);
});
