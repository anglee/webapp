var _ = require("lodash");

var maxSlice = function(A) { // O(n^2)
  var i, j, tempSum;
  var maxSum = Number.NEGATIVE_INFINITY;
  for (i = 0; i < A.length; ++i) {
    tempSum = 0;
    for (j = i; j < A.length; ++j) {
      tempSum += A[j];
      maxSum = Math.max(maxSum, tempSum);
    }
  }
  return maxSum;
};

var maxSlice2 = function(A) {  // O(n)
  var i, maxEndAtI = Number.NEGATIVE_INFINITY;
  var theMax = Number.NEGATIVE_INFINITY;
  for (i = 0; i < A.length; ++i) {
    maxEndAtI = Math.max(A[i], maxEndAtI + A[i]);
    theMax = Math.max(theMax, maxEndAtI);
  }
  return theMax;
};


console.assert(maxSlice([5, -7, 3, 5, -2, 4, -1]) === 10);
console.assert(maxSlice2([5, -7, 3, 5, -2, 4, -1]) === 10);
