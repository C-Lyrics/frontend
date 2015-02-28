'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('MainCtrl', function($scope, $location, Autocomplete, Lyrics) {
        $scope.currentUrl = $location.path();
        $scope.topWords = [];
        $scope.suggestions = [];

        $scope.$watch('$scope.suggestions', function(newVal, oldVal) {
            Autocomplete.getArtists(newVal, function(res) {
                $scope.suggestions = res;
            });
        });

        $scope.generateWC = function() {
            Lyrics.getLyrics($scope.currentSearch, function(lyrics) {
                $scope.topWords = Lyrics.formatTop(lyrics, 200);
            });
        };

        $scope.addtoCloud = function() {

        };
        $scope.sharetoFB = function() {

        };

    });
