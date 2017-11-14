'use strict'

var api = require('./api');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('./api/config/cors');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('../webapp/public'));
app.use(logger('dev'));
app.use(cors);

app.post('/api/login', api.loginApi);

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);