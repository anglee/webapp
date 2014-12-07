function solution(A) {
  if (A.length === 0) {
    return 1;
  }

  var sum = A.reduce(function(sum, it) {
    return sum + it;
  });
  return (A.length + 1) * (A.length + 2) / 2 - sum;
}

solution([1, 2, 34]);
