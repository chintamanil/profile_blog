(function() {
  angular.module('app').directive('generalFooter', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/partials/directives/general_footer.html'
    };
  });

}).call(this);
