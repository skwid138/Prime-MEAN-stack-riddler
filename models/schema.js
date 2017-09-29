var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var riddleSchema = new Schema({
    creator: String,
    setup: String,
    punchline: String
});


var Riddle = mongoose.model('riddles', riddleSchema);
//'riddles' is collection; riddle Schema is schema...obv.
module.exports = Riddle;