function solution(S) {
  var N = S.length;
  var stack = [];
  for (var i = 0; i < N; ++i) {
    if (S[i] === '(') {
      stack.push(0);
    } else if (S[i] === '[') {
      stack.push(1);
    } else if (S[i] === '{') {
      stack.push(2);
    } else if (S[i] === ')') {
      if (stack.pop() !== 0) {
        return 0;
      }
    } else if (S[i] === ']') {
      if (stack.pop() !== 1) {
        return 0;
      }
    } else if (S[i] === '}') {
      if (stack.pop() !== 2) {
        return 0;
      }
    }

  }
  return 1;
}

console.assert(solution("{[()()]}") === 1);
console.assert(solution("([)()]") === 0);

