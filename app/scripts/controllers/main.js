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
        var nbTopWords = 200,
            updateShareUrl,
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

        updateShareUrl = function() {
            var artists = Lyrics.selectedArtists.toString();
            $scope.shareUrl = $location.path() + '?artist=' + artists;
        };

        if (artists) {
            artists = artists.split(',');
            Lyrics.loadArtists(artists, function(songs) {
                $scope.topWords = Lyrics.formatTop(songs, nbTopWords);
                Lyrics.selectedLyrics = $scope.topWords;
                updateShareUrl();
            });
        }

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
            Lyrics.getLyrics(artist, function(songs) {
                $scope.topWords = Lyrics.formatTop(lyrics, nbTopWords);
                Lyrics.selectedArtists = [artist, ];
                Lyrics.selectedLyrics = $scope.topWords;
                updateShareUrl();
            });
        };

        $scope.addToCloud = function() {
            var artist = $scope.currentSearch;
            if (!artist) {
                alert('Please enter an artist\'s name.');
                return;
            }
            Lyrics.getLyrics(artist, function(lyrics) {
                lyrics = Lyrics.formatTop(lyrics, nbTopWords);
                lyrics = Lyrics.chooseBests(lyrics, Lyrics.selectedLyrics);
                Lyrics.selectedLyrics = lyrics;
                Lyrics.selectedArtists.push(artist);
                $scope.topWords = lyrics;
                updateShareUrl();
            });
        };
    });
