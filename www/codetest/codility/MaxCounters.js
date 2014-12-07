function solution(N, A) {
  var max = 0;
  var def = 0;
  var counter = [];
  for (var i = 0; i < A.length; i++) {
    var x = A[i];

    if (x <= N) {
      if (counter[x] === undefined || counter[x] < def) {
        counter[x] = def;
      }
      counter[x]++;
      if (counter[x] > max) {
        max = counter[x];
      }
    } else {
      counter = [];
      def = max;
    }
  }

  var ret = [];
  for (var it = 1; it <= N; ++it) {
    ret[it-1] = (counter[it] === undefined || counter[it] < def) ? def : counter[it];
  }
  return ret;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));

