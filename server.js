(function() {
  "use strict";

  var http = require('http');
  var express = require("express");
  //var foo = require("./deps/foo");
  //console.log(foo);

  var args = process.argv.slice(2);
  var httpPort = args[0] ? args[0] : 3000;

  var app = express();
  var httpServer = http.createServer(app).listen(httpPort, function() {
    console.log("connect to: http://localhost:" + httpPort);
  });

  app.use('/', express.static('web'));

})();
