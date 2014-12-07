function solution(H) {
  if (H.length <= 0) {
    return 0;
  }
  H.push(0);
  var s = [];
  var count = 0;
  for (var i = 0; i < H.length; ++i) {
    while (s.length > 0 && s[s.length - 1] > H[i]) {
      s.pop();
      count++;
    }
    if (H[i] !== s[s.length - 1]) {
      s.push(H[i]);
    }
  }
  return count;
}

var ans = solution([8, 8, 5, 7, 9, 8, 7, 4, 8]);
console.log(ans);