'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('MainCtrl', function($scope, $location) {
        $scope.currentUrl = $location.path();

        $scope.generateWC = function() {
            alert($scope.search);
        };

        $scope.addtoCloud = function() {

        };
        $scope.sharetoFB = function() {

        };

    });
