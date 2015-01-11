Template.postPage.helpers({
  comments: function() {
    return Comments.find({postId: this._id});
  },

  isVideo: function() {
    return this.type === 'video';
  }
});
