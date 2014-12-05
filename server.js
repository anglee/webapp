(function() {
  "use strict";

  var http = require('http');
  var express = require("express");

  var httpPort = 3000;

  var app = express();
  var httpServer = http.createServer(app).listen(httpPort, function() {
    console.log("connect to: http://localhost:" + httpPort);
  });

  app.use('/', express.static('web'));

})();
