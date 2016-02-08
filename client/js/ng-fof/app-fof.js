// Generated by CoffeeScript 1.10.0
(function() {
  var fofApp;

  fofApp = angular.module("fofApp", ["ngRoute", "ngAnimate", "ngTouch"]);

  fofApp.config([
    "$routeProvider", "$compileProvider", function($routeProvider, $compileProvider) {
      var key, opts, ref, ref1, ref2, route, routeReq, yamlRoutes;
      ref = [{}, new XMLHttpRequest], yamlRoutes = ref[0], routeReq = ref[1];
      routeReq.open('GET', '/routes', false);
      routeReq.send(null);
      if (routeReq.status < 400) {
        ref1 = JSON.parse(routeReq.responseText).routes;
        for (key in ref1) {
          route = ref1[key];
          ref2 = [{}, route.templateUrl], opts = ref2[0], opts.templateUrl = ref2[1];
          if ((route.controller != null) && route.controller !== "None") {
            opts.controller = route.controller;
          }
          $routeProvider.when(route.path, opts);
        }
      } else {
        window.console.error("Failed to get YAML routes file from Server: " + routeReq.response);
      }
      $routeProvider.otherwise({
        redirectTo: '/home'
      });
      return $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|spotify):/);
    }
  ]);

  fofApp.filter('curYear', [
    '$filter', function($filter) {
      return function() {
        return $filter('date')(new Date(), 'yyyy');
      };
    }
  ]);

  fofApp.directive("fofNav", function() {
    return {
      restrict: "E",
      templateUrl: "partials/nav.html"
    };
  });

  fofApp.directive("fofFooter", function() {
    return {
      restrict: "E",
      templateUrl: "partials/footer.html"
    };
  });

}).call(this);
