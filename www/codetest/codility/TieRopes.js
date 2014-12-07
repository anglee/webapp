function solution(K, A) {
  var buffer = 0;
  var count = 0;
  for (var i = 0; i < A.length; ++i) {
    buffer += A[i];
    if (buffer >= K) {
      count++;
      buffer = 0;
    }
  }
  return count;
}

var ans = solution(2, [1, 2, 3, 4, 1, 1, 3]);
console.log(ans);
