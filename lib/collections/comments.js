Comments = new Mongo.Collection('comments');

Meteor.methods({
  commentInsert: function(commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      postId: String,
      body: String
    });

    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);

    if (!post)
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');

    comment = _.extend(commentAttributes, {
      userId: user._id,
      twitterId: 'fixme',
      submitted: new Date()
    });

    // update the post by incrementing the number of comments
    Posts.update(comment.postId, {$inc: {commentsCount: 1}});

    // create notifications for the comment
    comment._id = Comments.insert(comment);
    createCommentNotification(comment)

    return comment._id
  }
});
