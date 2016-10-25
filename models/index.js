var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/challenge");

var Talk = require('./talk');
var Attendee = require('./attendee');

module.exports.Talk = Talk;
module.exports.Attendee = Attendee;

