define(function (require) {
  "use strict";

  var _ = require("lodash");
  var Q = require("q");

  var foo = require('./foo');
  console.log(foo);

  Q.fcall(function() {
    console.log(_.range(1,10,2));
  });

  console.log("Hello, World!");
});