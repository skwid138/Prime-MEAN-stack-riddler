var router = require('express').Router();
var path = require('path');
var Riddle = require('../models/schema.js');

// takes input from FrontEnd and adds it to the DB
router.post('/', function(req, res) {
    var newRiddle = new Riddle ({
        creator:    req.body.creator,
        setup:  req.body.setup,
        punchline:  req.body.punchline
    }); // end constructor
    console.log('in post route', newRiddle);

    newRiddle.save(function (err) {
        if (err) {
            console.log('save:', err);
            res.sendStatus(500);
        } else {
            console.log('newRiddle is here.');
            res.sendStatus(200);
        }; // end else
    }); // end Save
}); // end POST

// GETs all riddles from DB for viewing on the DOM
router.get('/', function(req, res) {
    Riddle.find({}, function (err, riddleObject) {
        if(err) {
            console.log('Find error ->', err);
            res.sendStatus(500);
        } else {
            console.log('find results ->', riddleObject);
            res.send(riddleObject);
        }; // end else
    }); // end Find
}); // end GET

module.exports = router;