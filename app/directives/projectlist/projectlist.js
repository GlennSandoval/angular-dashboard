var module = angular.module('snDash.home');

module.directive('projectList', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/projectlist/projectlist.html',
        scope: true
    };
});