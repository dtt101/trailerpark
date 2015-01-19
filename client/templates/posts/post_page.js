Template.postPage.rendered = function() {
  $('body').css('background', 'rgba(' + this.data.bgcolour + ',0.3)');
  $(this.find('h3')).slabText();
  $('.animate').velocity({ opacity: 1.0 }, { visibility: "visible" });
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
  }
});
