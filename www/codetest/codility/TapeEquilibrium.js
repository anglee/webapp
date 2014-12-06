
function solution(A) {
  // write your code in JavaScript (ECMA-262, 5th edition)
  var left = 0;
  var right = A.reduce(function(sum, it) {
    return sum + it;
  });
  return _.min(_.initial(A).map(function(it, i) {
    left += it;
    right -= it;
    return Math.abs(left - right);
  }));
}
console.log(solution([3, 1, 2, 4, 3]));
