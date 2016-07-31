'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('snDash', [
    'ngRoute',
    'snDash.home'
]);

// Fake user data
app.run(['$rootScope',
    function($rootScope) {
        $rootScope.user = { firstname: 'Dave' };
    }
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);
