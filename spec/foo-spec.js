var aaa = require("../modules/foo.js").aaa;

describe("foo", function() {
  it("should have correct aaa", function() {
    expect(aaa).toEqual("1000");
  })
});
