'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('MainCtrl', function($scope) {
        $scope.shareText = 'Share';
        $scope.submitText = 'shareText';
        $scope.addText = 'shareText';

        $scope.generateWC = function() {
            alert($scope.search);
        };

        $scope.addtoCloud = function() {

        };
        $scope.sharetoFB = function() {

        };

    });
