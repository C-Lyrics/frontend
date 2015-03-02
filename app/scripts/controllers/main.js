'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('MainCtrl', function($scope, $location, $routeParams,
        Autocomplete, Lyrics) {
        $scope.currentUrl = $location.path();
        $scope.topWords = [];
        $scope.suggestions = [];
        /*
         * TODO:
         * - Loading image
         * - Error message if there is one
         */

        // That's waht triggers all the ugly errors
        $scope.$watch('$scope.suggestions', function(newVal, oldVal) {
            if (newVal === oldVal) {
                return;
            }
            Autocomplete.getArtists(newVal, function(res) {
                $scope.suggestions = res;
            });
        });

        // The recurisivity problem all over again.
        $scope.$watch('Lyrics.selectedArtists', function(oldValue, newVal) {
            $routeParams.artists = Lyrics.selectedArtists.toString();
            // $location.search('artists', Lyrics.selectedArtists.toString())
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
