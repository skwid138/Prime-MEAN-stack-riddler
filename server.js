var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/riddleDB');
//creates Database

//routes
var indexRouter = require('./routes/index');
var riddleRouter = require('./routes/riddleroutes');

// uses
app.use(bodyParser.json());
app.use(express.static('public'));

// routes
app.use('/', indexRouter);
app.use('/riddles', riddleRouter);

//listening
app.listen(port, function () {
    console.log('listening on', port);
});