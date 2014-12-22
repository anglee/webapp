//how to generate permutation of a string with duplicate characters without caching previous generated string in memory.
//
//    eg.
//    abc -> {abc, acb, bac, bca, cab, cba}
//    all -> {all, lal, lla}

(function() {
  "use strict";

  var _ = require("lodash");

  var without = function(chars, charToRemove) {
    // first clone
    var ret = chars.slice(0);
    // then remove
    ret.splice(ret.indexOf(charToRemove), 1);
    // then return
    return ret;
  };

  var permute = function(s) {
    if (s.length === 1) {
      return [s];
    }
    var chars = s.split("");
    var charsDedup = _.uniq(chars);
    return _.reduce(charsDedup, function(result, char) {
      var permOfRest = permute(without(chars, char).join(''));
      var perm = permOfRest.map(function(p) {
        return char.concat(p);
      });
      return result.concat(perm);
    }, []);
  };

  console.log(permute("abc"));
  console.log(permute("all"));
  console.log(permute("aabb"));

})();
