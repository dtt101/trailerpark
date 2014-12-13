Posts = new Meteor.Collection('posts');

Meteor.methods({
  postInsert: function(postAttributes) {

    // validate objects
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      url: String
    });

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
      submitted: new Date()
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  }
});
