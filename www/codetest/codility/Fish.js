function solution(A, B) {
  var s = [];
  var N = A.length;
  var survive = 0;
  for (var i = 0; i < N; ++i) {
    if (B[i] === 0) { // upstream
      if (s.length === 0) {
        survive++;
      } else {
        while (A[s[s.length - 1]] < A[i]) {
          s.pop();
        }
        if (s.length > 0 && A[s[s.length - 1]] > A[i]) {
          // eaten
        } else {
          survive++;
        }
      }
    } else { // downstream
      s.push(i);
    }
  }
  survive += s.length;
  return survive;
}

var ans = solution([4, 3, 2, 6, 5], [1, 0, 0, 0, 0]);
console.log(ans);
