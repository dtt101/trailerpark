if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function() {

    describe("Trailer listing", function() {
      before(function(done) {
        Meteor.autorun(function(c){
          var posts = Posts.find();
          if (posts.count() >= 10) {
            c.stop();
            done();
          }
        })
      });

      it("should show ten trailers on first load", function(done) {
        chai.assert.equal(Posts.find().count(), 10);
        done();
      });

      it("shoud show the number of comments added to a trailer", function(done) {
        var post = Posts.findOne({title: 'Star Wars: The Force Awakens'});
        var count = $('#post-' + post._id + ' div.comment a').text().trim();
        chai.assert.equal(count, "2");
        done();
      });

    });

    describe("Logging in", function() {
      it("should allow a user to login via twitter");
    });

    describe("Popular trailers", function() {
      it("shoud allow trailers to be sorted by the most liked");
      it("shoud allow a logged in user to like a trailer");
    });

    describe("New trailers", function() {
      it("shoud allow trailers to be sorted with the latest posted first");
    });

  });
}
