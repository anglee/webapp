(function() {
  "use strict";

  var _ = require("lodash");

  var map = {
    "2": ["A", "B", "C"],
    "3": ["D", "E", "F"],
    "4": ["G", "H", "I"],
    "5": ["J", "k", "L"],
    "6": ["M", "N", "O"],
    "7": ["P", "Q", "R", "S"],
    "8": ["T", "U", "V"],
    "9": ["W", "X", "Y", "Z"],
    "0": ["+"]

  };

  var isWord = function(s) {
    return s === "DOG" || s === "BEI" || s === "ADG";
  };

  var getWords = function(s, prefix) {

    if (!prefix) {
      prefix = "";
    }
    if (!s) {
      if (isWord(prefix)) {
        return [prefix];
      } else {
        return [];
      }
    }
    var result = [];
    s.split('').forEach(function(num) {
      var chars = map[num];
      chars.forEach(function(c) {
        result = result.concat(getWords(s.substring(1), prefix + c));
      });
    });
    return result;
  };

  console.log(getWords("234"));

})();
