var rotate = function(sq) {
  var l, r;
  var w = sq.length;
  var buf;
  l = 0;
  for (l = 0; l < w / 2; ++l) {
    i = 0;
    for (i = l; i < w - l - 1; ++i) {
      // upper left l + i, l
      // bottom left l, w - 1 - l - i
      // bottom right w - 1 - l - i, w - 1 - l
      // upper right w - l - 1, l + i
      buf = sq[l + i][l];
      sq[l + i][l] = sq[l][w - 1 - l - i];
      sq[l][w - 1 - l - i] = sq[w - 1 - l - i][w - 1 - l];
      sq[w - 1 - l - i][w - 1 - l] = sq[w - 1 - l][l + i];
      sq[w - 1 - l][l + i] = buf;
    }
  }
  return sq;
};

var sqq = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];

rotate(sqq).forEach(function(l) {
  console.log(l);
});
