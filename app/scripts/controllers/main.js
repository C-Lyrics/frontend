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
            Lyrics.selectedArtists = [$scope.currentSearch, ];
            Lyrics.selectedLyrics = $scope.topWords;
        };

    $scope.addToCloud = function() {
            var artist = $scope.currentSearch;
            Lyrics.getLyrics(artist, function(lyrics) {
                lyrics = Lyrics.formatTop(lyrics, 200);
                lyrics = Lyrics.chooseBests(lyrics, Lyrics.selectedLyrics);
                Lyrics.selectedLyrics = lyrics;
                Lyrics.selectedArtists.push(artist);
                $scope.topWords = lyrics;
            });
        };
    });
