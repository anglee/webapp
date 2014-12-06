// LCS = Longest Common Subsequence
// https://en.wikipedia.org/wiki/Longest_common_subsequence_problem

var _ = require("lodash");
var Q = require("q");

var LCS = function(a, b) {
  if (_.isEmpty(a) || _.isEmpty(b)) {
    return "";
  }

  if (a[0] === b[0]) {
    return a[0] + LCS(a.substring(1), b.substring(1));
  } else {
    var s1 = LCS(a.substring(1), b);
    var s2 = LCS(a, b.substring(1));
    return s1.length > s2.length ? s1 : s2;
  }
};
console.assert(LCS("A", "B") === "");
console.assert(LCS("ABXC", "AWBC") === "ABC");
console.assert(LCS("ABCDGH", "AEDFHR") === "ADH");
console.assert(LCS("AGGTAB", "GXTXAYB") === "GTAB");
