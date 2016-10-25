var db = require("./models");

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

var talksList = [
  {
    title: "CILLUM NON",
    abstract: "Aliqua consequat mollit Lorem dolor nulla qui sunt tempor veniam eiusmod ullamco quis commodo.",
    room: 873,
    speaker: {
      name: "Hendrix Carroll",
      company: "Songlines",
      email: "hendrixcarroll@songlines.com",
      bio: "Magna velit adipisicing ullamco sint duis nisi."
    },
    attendees: [
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
    ]
  },
  {
    title: "AD IPSUM",
    abstract: "Fugiat nisi et mollit consequat sint.",
    room: 343,
    speaker: {
      name: "Melody Juarez",
      company: "Zillatide",
      email: "melodyjuarez@zillatide.com",
      bio: "Veniam do eu quis officia enim."
    },
    attendees: []
  }
]



db.Attendee.remove({}, function(err, attendees){
  db.Talk.remove({}, function(err, talks){
    db.Attendee.create(attendeesList, function(err, attendees){
      if (err) { return console.log('ERROR', err); }
      console.log("all attendees:", attendees);
      console.log("created", attendees.length, "attendees");
      db.Talk.create(talksList, function(err, talks){
        if (err) { return console.log('ERROR', err); }
        console.log("all talks:", talks);
        console.log("created", talks.length, "talks");
        process.exit();
      });
    });
  });
});
