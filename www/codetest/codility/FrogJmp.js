/**
 * Created by alee on 12/6/14.
 */
(function() {
  "use strict";

  function solution(X, Y, D) {
    if (Y <= X) {
      return 0;
    }
    return Math.ceil((Y - X) / D);
  }

  console.log(solution(10, 85, 30));
  console.log(solution(10, 100, 30));
  console.log(solution(10, 101, 30));
  console.log(solution(10, 0, 30));

})();
