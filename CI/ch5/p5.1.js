var insertBits = function(N, M, i, j) {
  var mask = 0;
  for (var a = i; a <= j; a++) {
    mask |= (1 << a);
  }

  N = parseInt(N, 2);
  M = parseInt(M, 2);
  var ret = (N - (N & mask)) + (M << i);
  return ret.toString(2);
};

console.log(insertBits("10000000000", "10011", 2, 6));5
