Template.postPage.rendered = function() {
  $('body').css('background', 'rgba(' + this.data.bgcolour + ',0.3)');
  $(this.findAll('h3')).slabText();
  $('.animate').velocity({ opacity: 1.0 }, { visibility: "visible" });
  $('iframe').height('100%');
  $('iframe').width('100%');
};

Template.postPage.helpers({
  comments: function() {
    return Comments.find({postId: this._id});
  },

  isVideo: function() {
    return this.type === 'video';
  },

  postColour: function() {
    return 'rgba(' + this.bgcolour + ', ' + this.bgopacity + ')';
  },

  randomColour: function() {
    var post = Posts.findOne(this.postId);
    var bgo = Math.random() * (0.4 - 0.1) + 0.1;
    return 'rgba(' + post.bgcolour + ', ' + bgo + ')';
  }
});
