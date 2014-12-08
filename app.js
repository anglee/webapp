var _ = require("lodash");

var toBinary = function(i) {
  return parseInt(i.toString(2));
};

var solution = function() {
  var i = 1;
  while (toBinary(i) % 900) {
    i ++;
  }
  return toBinary(i);
};

console.log(solution());
