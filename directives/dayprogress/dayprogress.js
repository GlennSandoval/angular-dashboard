var module = angular.module('snDash.home');

module.directive('dayProgress', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/dayprogress/dayprogress.html',
        scope: true
    };
});