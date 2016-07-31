'use strict';

var module = angular.module('snDash.home', ['ngRoute', 'snDash', 'nvd3', 'ngMaterial']);

module.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
    });
}]);

module.constant('DATA_URL', 'data/home.json');

module.factory('DataService', function($interpolate, $http, DATA_URL) {

    function interpolateTitles(data, scope) {
        return data.map(function(obj) {
            obj.title = $interpolate(obj.title)(scope);
            obj.subtitle = $interpolate(obj.subtitle)(scope);
            return obj;
        });
    }

    function getData(scope, callback) {
        $http.get('data/home.json').then(function(response) {
            var data = angular.fromJson(response.data);
            data = interpolateTitles(data, scope);
            callback(data);
        }, function(err) { /* panic */ console.log(err) });
    }

    return {
        getData: getData
    };
});

module.controller('HomeCtrl', ['$scope', 'DataService', function($scope, DataService) {
    DataService.getData($scope, function(result) { $scope.rows = result; });
}]);
