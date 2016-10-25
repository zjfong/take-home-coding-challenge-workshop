var db = require('../models');

function index(req, res) {
  db.Talk.find({}, function(err, allTalks) {
    res.json(allTalks);
  });
}

module.exports = {
  index: index,
};
