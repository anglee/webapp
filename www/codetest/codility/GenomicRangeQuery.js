// the idea is for each char in S, produce a map like:
// the first 'A' to the right is 'lenA' cells way
// the first 'B' to the right is 'lenB' cells way

// so when given a P[i], and the len (Q[i] - P[i]), one can determin the impact in O(1)


function solution(S, P, Q) {

  // scan from right to left
  var RS = S.split().reverse();
  var last = {
    A: S.length,
    C: S.length,
    G: S.length,
    T: S.length
  };
  var map = [];

  for (var i = S.length - 1; i >= 0; i--) {
    last[S[i]] = i;

    map[i] = {};
    map[i].A = last['A'] - i + 1;
    map[i].C = last['C'] - i + 1;
    map[i].G = last['G'] - i + 1;
  }

  var ret = [];
  for (var j = 0; j < P.length; ++j) {
    var start = P[j];
    var len = Q[j] - P[j] + 1;
    var m = map[start];
    if (len >= m.A) {
      ret[j] = 1;
    } else if (len >= m.C) {
      ret[j] = 2;
    } else if (len >= m.G) {
      ret[j] = 3;
    } else {
      ret[j] = 4;
    }
  }

  return ret;
}

console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]));
