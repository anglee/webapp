var safeGet = function(A, i) {
  if (i < 0 || i >= A.length) {
    return 0;
  } else {
    return A[i];
  }
}

function solution(A) {
  var N = A.length;
  var M = [];
  for (var i = 0; i < N; i++) {
    var ms = [1,2,3,4,5,6].map(function(it) {
      return safeGet(M, i - it);
    });
    M[i] = A[i] + Math.max.apply(null, ms);
  }
  return M[N - 1];
}


console.log(solution([1,2,-3]));
console.log(solution([-1, -1, -1, -1, -1, -1, -1, -1]));
console.log(solution([1, -2, 0, 9, -1, -2]));
//https://codility.com/demo/results/demo99QSGF-SFR/
