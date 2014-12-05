(function() {
  "use strict";

  Q.fcall(function() {
    console.log(_.range(1, 10, 2));
  });

  var app = angular.module("myApp", [
    //'ngRoute'
  ]);
  app.controller("myCtrl", function($scope) {
    $scope.foo = "bar";
  });

  //app.config(function($routeProvider) {
  //  $routeProvider.
  //      when('/phones', {
  //        templateUrl: 'partials/phone-list.html',
  //        controller: 'PhoneListCtrl'
  //      }).
  //      when('/phones/:phoneId', {
  //        templateUrl: 'partials/phone-detail.html',
  //        controller: 'PhoneDetailCtrl'
  //      }).
  //      otherwise({
  //        redirectTo: '/phones'
  //      });
  //});

})();