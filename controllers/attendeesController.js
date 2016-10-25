var db = require('../models');

function index(req, res) {
  db.Attendee.find({}, function(err, allAttendees) {
    res.json(allAttendees);
  });
}

module.exports = {
  index: index,
};
