Template.commentSubmit.created = function() {
  Session.set('commentSubmitErrors', {});
}

Template.commentSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('commentSubmitErrors')[field];
  },

  errorClass: function (field) {
    return !!Session.get('commentSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.commentSubmit.events({

  'submit form': function(e, template) {
    e.preventDefault();

    var $body = $(e.target).find('[name=body]');
    var comment = {
      body: $body.val().trim(),
      postId: template.data._id
    };

    var errors = {};

    if (!comment.body) {
      errors.body = "Yeah, no.";
      return Session.set('commentSubmitErrors', errors);
    } else if (comment.body.length > 200) {
      errors.body = "Short. 200 characters or less pls.";
      return Session.set('commentSubmitErrors', errors);
    }
    Meteor.call('commentInsert', comment, function(error, commentId) {
      Session.set('commentSubmitErrors', {});
      if (error) {
        throwError(error.reason);
      } else {
        $body.val('');
      }
    });
  }
});
