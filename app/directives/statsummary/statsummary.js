var module = angular.module('snDash.home');

module.directive('statSummary', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/statsummary/statsummary.html',
        scope: true
    };
});