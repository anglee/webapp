var _ = require("lodash");
var Q = require("q");

Q.fcall(function() {
  console.log(_.range(1,10,2));
});

console.log("Hello");

