var s1 = "waterbottle";
var s2 = "bottlewater";

var isSubstring = function(a, b) { // test if a is a substring of b
  return b.indexOf(a) !== -1;
};
var isRotate = function(s1, s2) {
  return isSubstring(s2, s1 + s1);
};
console.log(isRotate(s1, s2));
