var findMinCap = function(Z) {
  var cap = 0;
  var minZ = Number.POSITIVE_INFINITY;
  Z.forEach(function(z) {
    cap = Math.max(cap, z - minZ);
    minZ = Math.min(minZ, z);
  });
  return cap;
};

var test1 = [1, 2, -3, 4, 5];
var sol = findMinCap(test1);
console.log(sol);
