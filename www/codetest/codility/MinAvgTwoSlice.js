// Brute-Force
//var getAvg = function(A, i, j) {
//  var sum = 0;
//  for (var k = i; k <=j; ++k) {
//    sum += A[k];
//  }
//  return sum / (j - i + 1);
//};
//
//function solution(A) {
//  var i, j;
//  var min = Number.POSITIVE_INFINITY;
//  var minIndex = -1;
//  for (i = 0; i < A.length - 1; ++i) {
//    for (j = i + 1; j < A.length; ++j) {
//      var s = getAvg(A, i, j);
//      if (s < min) {
//        min = s;
//        minIndex = i;
//      }
//    }
//  }
//  return minIndex;
//}

function solution(A) {

  var i,len;
  var sums = A.map(function(it) {
    return it;
  });
  var min = Number.POSITIVE_INFINITY;
  var minI = 0;
  var avg;
  //for (len = 2; len <= A.length; ++len) {
  for (len = 2; len <= 3; ++len) {
    for (i = 0; i + len <= A.length; ++i) {
      sums[i] += A[i + len - 1];
      avg = sums[i] / len;
      if (avg < min) {
        min = avg;
        minI = i;
      }
    }
  }
  return minI;
}

console.log(solution([4, 2, 2, 5, 1, 5, 8]));


// Postscript
// turn out this is not the best
// the key is we only need to check len = 2 and 3, but not beyond, because
// if a len = 4 is producing the min avg, a sub-slice of it must have avg <= the len-4 avg
// see details
// http://codesays.com/2014/solution-to-min-avg-two-slice-by-codility/