var expensiveFunc = function() {

};
var cachedF = wrapCache(expensiveFunc);

var hash = function(foo) {
  //return JSON.stringify(foo);
};

var wrapCache = function(func) {

  var lastArgs;
  var lastResult;

  return function() {
    if (deepEqual(lastArgs, arguments)) {
      return lastResult;
    } else {
      var result = func.apply(arguments);
      lastArgs = arguments;
      lastResult = result;
      return result;
    }
  }

};/**
 * Created by alee on 12/11/14.
 */
(function() {
  "use strict";

  console.log("Hello");

})();
