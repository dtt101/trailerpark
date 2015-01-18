Template.postPage.rendered = function() {
  $('body').css('background', 'rgb(' + this.data.bgcolour + ')');
  $(this.find('h2')).slabText();
};

Template.postPage.helpers({
  comments: function() {
    return Comments.find({postId: this._id});
  },

  isVideo: function() {
    return this.type === 'video';
  }
});
