var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TalkSchema = new Schema({
  title: String,
  abstract: String,
  room: Number,
  speaker: {
    name: String,
    company: String,
    email: String,
    bio: String
  }
});

var Talk = mongoose.model('Talk', TalkSchema);

module.exports = Talk;
