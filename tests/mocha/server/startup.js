// server-side tests
if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function() {

    describe("Server initialization", function(){
      it("should have a Meteor version defined", function(){
        chai.assert(Meteor.release);
      });

      it("should insert posts into the database after server start", function(){
        chai.assert(Posts.find().count() > 0);
      });
    });

  });
}
