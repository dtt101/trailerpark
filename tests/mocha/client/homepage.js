if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Trailer listing", function(){
      it("should show ten trailers on first load", function(){
        chai.assert.equal(Posts.find().count(), 10);
      });
    });

    describe("Paging", function() {
      it("should load ten more posts when pressing next page", function() {
        setTimeout((function() {
          $('a.load-more').click();
          chai.assert.equal(Posts.find().count(), 20);
          return done();
        }), 100);
      });
    });

  });
}
