var module = angular.module('snDash.home');

module.directive('dashChart', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/dashchart/dashchart.html',
        scope: true
    };
});
