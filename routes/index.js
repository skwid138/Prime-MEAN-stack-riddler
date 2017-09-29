var router = require('express').Router();
var path = require('path');
var Riddle = require('../models/schema.js');

router.get('/', function (req, res) {
    console.log('root url received');
    var indexPath = path.join(__dirname, '../public/views/index.html');
    res.sendFile(indexPath);
});

module.exports = router;