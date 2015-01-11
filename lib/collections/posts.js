Posts = new Mongo.Collection('posts');

Posts.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Posts.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});

Posts.deny({
  update: function(userId, post, fieldNames) {
    var errors = validatePost(modifier.$set);
    return errors.title || errors.url;
  }
});


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

    // insert post
    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      submitted: new Date(),
      commentsCount: 0,
      upvoters: [],
      votes: 0,
      published: false
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
