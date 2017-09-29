var router = require('express').Router();
var path = require('path');
var Riddle = require('../models/schema.js');

// takes input from FrontEnd and adds it to the DB
router.post('/', function(req, res) {
    var newRiddle = new Riddle ({
        creator:    req.body.creator,
        setup:  req.body.setup,
        punchline:  req.body.punchline
    });
    console.log('in post route', newRiddle);

    newRiddle.save(function (err) {
        if (err) {
            console.log('save:', err);
            res.sendStatus(500);
        } else {
            console.log('newRiddle is here.');
            res.sendStatus(200);
        };
    });
});

// GETs all riddles from DB for viewing on the DOM

module.exports = router;