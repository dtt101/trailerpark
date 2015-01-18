Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInsert: function(postAttributes) {

    // validate objects
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      url: String
    });

    var errors = validatePost(postAttributes);
    if (errors.title || errors.url)
      throw new Meteor.Error('invalid-post', "You must set a title and URL for your post");

    // check for duplicate links
    var postWithSameLink = Posts.findOne({
      url: postAttributes.url
    });

    if (postWithSameLink) {
      return {
        postExists: true,
        _id: postWithSameLink._id
      }
    }

    // random colour and opacity
    var bgo = Math.random() * (1 - 0.6) + 0.6;
    var colours = [
      '52,73,94','217, 8, 121', '122,228,229', '233,144,31',
      '122,66,237', '26,188,156', '46,204,113', '52,152,219', '155,89,182', '52,73,94',
      '22,160,133', '39,174,96', '41,128,185', '142,68,173', '44,62,80', '241,196,15',
      '230,126,34', '231,76,60', '243,156,18', '192,57,43', '211,84,0'
    ];
    var n = Math.floor(Math.random() * colours.length);
    
    // insert post
    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      submitted: new Date(),
      commentsCount: 0,
      upvoters: [],
      votes: 0,
      published: true,
      bgcolour: colours[n],
      bgopacity: bgo
    });

    // call embedly to get video info
    if (Meteor.isServer) {
      var embedInfo = Embedly.embed(postAttributes.url);
      if (embedInfo) {
        post.html = embedInfo.data.html;
        post.type = embedInfo.data.type;
        post.thumbnail_url = embedInfo.data.thumbnail_url;
      }
    }

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  },

  upvote: function(postId) {
    check(this.userId, String);
    check(postId, String);

    var affected = Posts.update({
      _id: postId,
      upvoters: {$ne: this.userId}
    }, {
      $addToSet: {upvoters: this.userId},
      $inc: {votes: 1}
    });

    if (! affected)
      throw new Meteor.Error('invalid', "You weren't able to upvote that post")
  }
});

validatePost = function (post) {
  var errors = {};

  if (!post.title)
    errors.title = "Please fill in a film name";

  if (!post.url)
    errors.url = "Please fill in a trailer URL";

  return errors;
}
