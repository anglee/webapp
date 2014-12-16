function solution(A) {
  var max = Number.NEGATIVE_INFINITY;
  var left = A.map(function(a, i) {
    if (i === 0) { return 0; }
    max = Math.max(max + a, a);
    return max;
  });
  max = Number.NEGATIVE_INFINITY;
  var right = A.reverse().map(function(a, i) {
    if (i === 0) { return 0; }
    max = Math.max(max + a, a);
    return max;
  }).reverse();
  var sum, maxSum = Number.NEGATIVE_INFINITY;
  for (var i = 1; i < A.length - 1; ++i) {
    sum = left[i - 1] + right[i + 1];
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}

console.log(solution([3, 2, 6, -1, 4, 5, -1, 2]) === 17);
