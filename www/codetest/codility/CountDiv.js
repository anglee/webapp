function solution(A, B, K) {
  var i = Math.ceil(A / K);
  var j = Math.floor(B / K);

  return j - i + 1;
}
