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
        var updateShareUrl,
            artists = $location.search()['artists'];
        $scope.shareUrl = $location.path();
        $scope.topWords = [];
        $scope.suggestions = [];
        /*
         * TODO:
         * - Loading image
         * - Error message if there is one
         * - Submit "enter" will do launch submit button
         */

        if (artists) {
            artists = artists.split(',');
            Lyrics.loadArtists(artists);
        }

        updateShareUrl = function() {
            var artists = Lyrics.selectedArtists.toString();
            $scope.shareUrl = $location.path() + '?artist=' + artists;
        };

        // That's waht triggers all the ugly errors
        $scope.$watch('$scope.suggestions', function(newVal, oldVal) {
            if (newVal === oldVal) {
                return;
            }
            Autocomplete.getArtists(newVal, function(res) {
                $scope.suggestions = res;
            });
        });

        $scope.generateWC = function() {
            var artist = $scope.currentSearch;
            if (!artist) {
                alert('Please enter an artist\'s name.');
                return;
            }
            Lyrics.getLyrics(artist, function(lyrics) {
                $scope.topWords = Lyrics.formatTop(lyrics, 200);
            });
            Lyrics.selectedArtists = [artist, ];
            Lyrics.selectedLyrics = $scope.topWords;
            updateShareUrl();
        };

        $scope.addToCloud = function() {
            var artist = $scope.currentSearch;
            if (!artist) {
                alert('Please enter an artist\'s name.');
                return;
            }
            Lyrics.getLyrics(artist, function(lyrics) {
                lyrics = Lyrics.formatTop(lyrics, 200);
                lyrics = Lyrics.chooseBests(lyrics, Lyrics.selectedLyrics);
                Lyrics.selectedLyrics = lyrics;
                Lyrics.selectedArtists.push(artist);
                $scope.topWords = lyrics;
                updateShareUrl();
            });
        };
    });
