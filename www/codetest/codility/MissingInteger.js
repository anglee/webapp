function solution(A) {
  // write your code in JavaScript (ECMA-262, 5th edition)
  var i = 0;
  var count = [];
  for (i = 0; i < A.length; ++i) {
    if (A[i] > 0) {
      if (count[A[i]] === undefined) {
        count[A[i]] = 1;
      } else {
        count[A[i]] += 1;
      }
    }
  }

  i = 1;
  while (true) {
    if (count[i] === undefined) {
      return i;
    }
    i++;
  }
}
