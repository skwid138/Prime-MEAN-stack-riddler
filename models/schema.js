var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var riddleSchema = new Schema({
    creator: String,
    setup: String,
    punchline: String
});

var Riddle = mongoose.model('riddles', riddleSchema);
//Riddle - to use in other files. 'riddles' is collection in DB; riddle Schema is schema...obv.
module.exports = Riddle;