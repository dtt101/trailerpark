if (Posts.find().count() === 0) {  var now = new Date().getTime();  var davidId = Meteor.users.insert({    profile: { name: 'David Thompson'}  });  var david = Meteor.users.findOne(davidId);  var katieId = Meteor.users.insert({    profile: { name: 'Katie Brennan'}  });  var katie = Meteor.users.findOne(katieId);  var starWarsId = Posts.insert({    title: 'Star Wars: The Force Awakens',    url: 'http://youtu.be/OMOVFvcNfvE',    userId: david._id,    submitted: new Date(now - 7 * 3600 * 1000),    commentsCount: 2  });  Comments.insert({    postId: starWarsId,    userId: david._id,    twitterId: 'versusg',    submitted: new Date(now - 5 * 3600 * 1000),    body: 'OMG Low flying X-Wings'  });  Comments.insert({    postId: starWarsId,    twitterId: 'example',    userId: katie._id,    submitted: new Date(now - 3 * 3600 * 1000),    body: 'That lightsaber looks dangerous'  });  var accidentsId = Posts.insert({    title: 'Little Accidents',    url: 'http://trailers.apple.com/trailers/independent/littleaccidents/',    userId: katie._id,    submitted: new Date(now - 7 * 3600 * 1000),    commentsCount: 2  });  Comments.insert({    postId: accidentsId,    userId: katie._id,    twitterId: 'kbrenno',    submitted: new Date(now - 5 * 3600 * 1000),    body: 'Erm...'  });  Comments.insert({    postId: accidentsId,    userId: david._id,    twitterId: 'versusg',    submitted: new Date(now - 3 * 3600 * 1000),    body: 'Love the pacing'  });  var godfatherId = Posts.insert({    title: 'The Godfather',    url: 'http://youtu.be/sY1S34973zA',    userId: david._id,    submitted: new Date(now - 7 * 3600 * 1000),    commentsCount: 0  });}