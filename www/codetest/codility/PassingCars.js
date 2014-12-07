function solution(A) {
  var countOf0s = 0;
  var passed = 0;

  A.forEach(function(it) {
    if (passed === -1) {
      return;
    }
    if (it === 0) {
      ++countOf0s;
    } else {
      passed += countOf0s;
      if (passed > 1000000000) {
        passed = -1;
      }
    }
  });
  return passed;
}
