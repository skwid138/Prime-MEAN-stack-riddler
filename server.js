var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhose:27017/riddleDB');
//creates Database
var indexRouter = require('./routes/index');

app.use(bodyParser.json());
app.use(express.static('public'));

// this MUST be the last route
// only for removing the #! and allowing the refresh to function
app.use('/', indexRouter);

app.listen(port, function () {
    console.log('on 3003');
});