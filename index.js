var env = require('node-env-file');
var ejs = require('ejs'),
var express = require('express');
var Sequelize = require('sequelize');


env(__dirname + '/.env');
var app = express();
app.set('port', (process.env.PORT || 5000));

routes(app);
