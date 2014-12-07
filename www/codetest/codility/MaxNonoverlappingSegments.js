
function solution(A, B) {
  var N = B.length;
  if (N === 0) { return 0; }
  var currentEnd = B[0];
  var picked = 1;
  for (var i = 1; i < N; ++i) {
    var start = A[i];
    if (start > currentEnd) {
      // no overlap, pick
      currentEnd = B[i];
      picked++;
    }
  }
  return picked;
}

var ans = solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]);
console.log(ans);

//https://codility.com/demo/results/demoKKMB3M-T7K/

