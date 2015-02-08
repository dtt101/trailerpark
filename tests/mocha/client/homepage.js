if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Trailer listing", function(){
      it("should show ten trailers on first load", function(){
        chai.assert.equal(Posts.find().count() , 10);
      });
    });
  });
}
