describe("Listing trailers", function () {
  beforeEach(function (done) {
    Router.go('/');
    Tracker.afterFlush(done);
  });

  beforeEach(waitForRouter);

  it("should show ten trailers on first load", function () {
    expect($("div.postitem").length).toEqual(10);
  });

  it("should show the number of comments added to a trailer", function() {
    var post = Posts.findOne({title: 'Little Accidents'});
    var count = $('#post-' + post._id + ' div.comment a').text().trim();
    expect(count).toEqual('2');
  });

  it("should show the number of likes added to a trailer", function() {
    var post = Posts.findOne({title: 'Little Accidents'});
    var count = $('#post-' + post._id + ' div.heart a').text().trim();
    expect(count).toEqual('1');
  });

});
