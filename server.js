var express = require('express');
var app = express();
var controllers = require('./controllers');

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// app.get('/api/talks', controllers.talks.index);
// app.get('/api/attendees', controllers.attendees.index);

var attendeesList = [
      {
        name: "Sanders Riley",
        company: "Comtext",
        email: "sandersriley@comtext.com",
        registered: "2015-05-24T02:15:04 +07:00"
      },
      {
        name: "Bean Cline",
        company: "Utarian",
        email: "beancline@utarian.com",
        registered: "2015-06-21T02:54:39 +07:00"
      },
      {
        name: "Alfreda Mitchell",
        company: "Dreamia",
        email: "alfredamitchell@dreamia.com",
        registered: "2015-09-22T06:35:29 +07:00"
      }
];

app.get('/api/attendees', function(request, response){
  response.json(attendeesList);
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
