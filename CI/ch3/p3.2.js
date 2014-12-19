var getMinStack = (function() {

  var stack = [];
  var minStack = [];

  return {
    push: function(s) {
      stack.push(s);
      minStack.push(Math.min(minStack[minStack.length - 1], s));
    },
    pop: function() {
      minStack.pop();
      return stack.pop();
    },
    min: function() {
      return minStack[minStack.length - 1];
    }
  }
})();