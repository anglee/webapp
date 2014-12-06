"use strict";
var _ = require("lodash");
var _s = require("underscore.string");
_.mixin(_s.exports());
var Q = require("q");

Q.fcall(function() {
  console.log(_.range(1,10,2));
});

console.log(_.trim("    Hello, World!"));

