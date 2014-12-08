
var getDist = function(g1, g2) {
  var m1 = Math.max.apply(null, g1);
  var m2 = Math.min.apply(null, g1);
  var m3 = Math.max.apply(null, g2);
  var m4 = Math.min.apply(null, g2);
  return Math.max(
      Math.abs(m1 - m3),
      Math.abs(m1 - m4),
      Math.abs(m2 - m3),
      Math.abs(m2 - m4)
  )
};

console.log(getDist([0], [1,4]));

function solution(A) {
  var keymap = {};
  var allkeys = [];
  A.forEach(function(value, key) {
    if (keymap[value]) {
      keymap[value].push(key);
    } else {
      allkeys.push(value);
      keymap[value] = [key];
    }
  });

  allkeys.sort(function(a, b) {
    return a - b;
  });

  var g1, g2, dist;
  var maxD = 0;
  if (allkeys.length === 0 || allkeys.length === 1) { return -1; }
  for (var i = 1; i < allkeys.length; ++i) {

    g1 = keymap[allkeys[i-1]];
    g2 = keymap[allkeys[i]];
    dist = getDist(g1, g2);
    //console.log(allkeys[i], g1, g2, dist);
    if (dist > maxD) {
      maxD = dist;
    }
  }
  return maxD;
}

//var input = [1, 4, 7, 3, 3, 5];
var input = [1,2,3,4,2];
//console.log(solution(input));

