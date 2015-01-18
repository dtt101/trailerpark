if (Posts.find().count() === 0) {  var now = new Date().getTime();  var davidId = Meteor.users.insert({    profile: { name: 'David Thompson'}  });  var david = Meteor.users.findOne(davidId);  var katieId = Meteor.users.insert({    profile: { name: 'Katie Brennan'}  });  var katie = Meteor.users.findOne(katieId);  var starWarsId = Posts.insert({    title: 'Star Wars: The Force Awakens',    url: 'http://youtu.be/OMOVFvcNfvE',    userId: david._id,    submitted: new Date(now - 7 * 3600 * 1000),    commentsCount: 2,    upvoters: [],    votes: 0,    published: true,    bgcolour: '52,73,94',    bgopacity: 0.9,    thumbnail_url: 'http://i.ytimg.com/vi/OMOVFvcNfvE/hqdefault.jpg',    type: 'video',    html: '<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FOMOVFvcNfvE%3Ffeature%3Doembed&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOMOVFvcNfvE&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FOMOVFvcNfvE%2Fhqdefault.jpg&key=internal&type=text%2Fhtml&schema=youtube" width="500" height="281" scrolling="no" frameborder="0" allowfullscreen></iframe>'  });  Comments.insert({    postId: starWarsId,    userId: david._id,    twitterId: 'versusg',    submitted: new Date(now - 5 * 3600 * 1000),    body: 'OMG Low flying X-Wings'  });  Comments.insert({    postId: starWarsId,    twitterId: 'example',    userId: katie._id,    submitted: new Date(now - 3 * 3600 * 1000),    body: 'That lightsaber looks dangerous'  });  var accidentsId = Posts.insert({    title: 'Little Accidents',    url: 'http://trailers.apple.com/trailers/independent/littleaccidents/',    userId: katie._id,    submitted: new Date(now - 7 * 3600 * 1000),    commentsCount: 2,    upvoters: [],    votes: 0,    published: true,    bgcolour: '217, 8, 121',    bgopacity: 0.9,    thumbnail_url: 'https://trailers.apple.com/trailers/independent/littleaccidents/images/poster-large.jpg?lastmod=1',    type: 'link'  });  Comments.insert({    postId: accidentsId,    userId: katie._id,    twitterId: 'kbrenno',    submitted: new Date(now - 5 * 3600 * 1000),    body: 'Erm...'  });  Comments.insert({    postId: accidentsId,    userId: david._id,    twitterId: 'versusg',    submitted: new Date(now - 3 * 3600 * 1000),    body: 'Love the pacing'  });  var godfatherId = Posts.insert({    title: 'The Godfather',    url: 'http://youtu.be/sY1S34973zA',    userId: david._id,    submitted: new Date(now - 7 * 3600 * 1000),    commentsCount: 0,    upvoters: [],    votes: 0,    published: true,    bgcolour: '217, 8, 121',    bgopacity: 0.6,    thumbnail_url: 'http://i.ytimg.com/vi/sY1S34973zA/hqdefault.jpg',    type: 'video',    html: '<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FsY1S34973zA%3Ffeature%3Doembed&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsY1S34973zA&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FsY1S34973zA%2Fhqdefault.jpg&key=internal&type=text%2Fhtml&schema=youtube" width="500" height="281" scrolling="no" frameborder="0" allowfullscreen></iframe>'  });  for (var i = 0; i < 50; i++) {    var bgo = Math.random() * (1 - 0.6) + 0.6;    var colours = [      '52,73,94','217, 8, 121', '122,228,229', '233,144,31',      '122,66,237', '26,188,156', '46,204,113', '52,152,219', '155,89,182', '52,73,94',      '22,160,133', '39,174,96', '41,128,185', '142,68,173', '44,62,80', '241,196,15',      '230,126,34', '231,76,60', '243,156,18', '192,57,43', '211,84,0'    ];    var n = Math.floor(Math.random() * colours.length);    Posts.insert({      title: 'Alfred Hitchcock Presents',      url: 'http://www.google.com?q=' + i,      userId: david._id,      submitted: new Date(now - i * 3600 * 1000),      commentsCount: 0,      upvoters: [],      votes: 0,      bgcolour: colours[n],      bgopacity: bgo,      published: true,      thumbnail_url: 'http://i.ytimg.com/vi/xbqNb2PFKKA/hqdefault.jpg',      type: 'video',      html: '<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FxbqNb2PFKKA%3Ffeature%3Doembed&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxbqNb2PFKKA&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FxbqNb2PFKKA%2Fhqdefault.jpg&key=internal&type=text%2Fhtml&schema=youtube" width="500" height="281" scrolling="no" frameborder="0" allowfullscreen></iframe>'    })  }}