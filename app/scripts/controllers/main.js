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
        $scope.topWords = [{
            text: 'We',
            weight: 15,
        }, {
            text: 'are',
            weight: 23,
        }, {
            text: 'the',
            weight: 3,
        }, {
            text: 'champions',
            weight: 2,
        }, {
            text: 'world',
            weight: 32,
        }, ];

        $scope.generateWC = function() {
            alert($scope.search);
        };

        $scope.addtoCloud = function() {

        };
        $scope.sharetoFB = function() {

        };

    });
