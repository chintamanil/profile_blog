(function() {
  angular.module('app').directive('generalNavigation', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/partials/directives/general_navigation.html'
    //  controller: 'HeaderController'
    };
  });

}).call(this);
