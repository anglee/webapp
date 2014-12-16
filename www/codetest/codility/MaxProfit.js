function solution(A) {
  var minPrice = Number.POSITIVE_INFINITY;
  var maxProf = 0;
  var i;
  for (i = 0; i < A.length; ++i) {
    minPrice = Math.min(minPrice, A[i]);
    maxProf = Math.max(maxProf,  A[i] - minPrice);
  };
  return maxProf;
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]));
console.log(solution([]));
console.log(solution([1,2,3,4,5,4,3,2,1]));

