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
        $('form')
            .submit(false);
        var nbTopWords = 200,
            updateShareUrl, initAutocomplete,
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

        initAutocomplete = function() {
            jQuery('#autocomplete')
                .autocomplete({
                    delay: 0,
                    min: 2,
                    source: $scope.suggestions,
                    select: function(event, ui) {
                        $scope.currentSearch = ui.item.value;
                    },
                    change: function(event, ui) {
                        $scope.currentSearch = ui.item.value;
                    },
                });
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
        $scope.$watch('currentSearch', function(newVal, oldVal) {
            if (newVal === oldVal) {
                return;
            }
            Autocomplete.getArtists(newVal, function(res) {
                $scope.suggestions = res;
                initAutocomplete();
            });
        });
        Autocomplete.getArtists('', function(res) {
            $scope.suggestions = res;
            initAutocomplete();
        });

        $scope.updateSearchContent = function() {
            $scope.searchWord = jQuery('#autocomplete')
                .val();
        };

        $scope.generateWC = function() {
            var artist = $scope.currentSearch;
            if (!artist) {
                alert('Please enter an artist\'s name.');
                return;
            }
            $scope.waitingMessage =
                'Please wait, as loading the lyrics takes about 1 second per song.';
            Lyrics.getLyrics(artist, function(songs) {
                debugger
                $scope.waitingMessage = '';
                Lyrics.selectedArtists = [artist, ];
                $scope.topWords = Lyrics.formatTop(songs, nbTopWords);
                Lyrics.selectedLyrics = $scope.topWords;
                updateShareUrl();
            });
        };

        $scope.addToCloud = function() {
            var artist = jQuery('#autocomplete')
                .val();
            if (!artist) {
                alert('Please enter an artist\'s name.');
                return;
            }
            $scope.waitingMessage =
                'Please wait, as loading the lyrics takes about 1 second per song.';
            Lyrics.getLyrics(artist, function(lyrics) {
                $scope.waitingMessage = '';
                Lyrics.selectedArtists.push(artist);
                lyrics = Lyrics.formatTop(lyrics, nbTopWords);
                lyrics = Lyrics.chooseBests(lyrics, Lyrics.selectedLyrics);
                Lyrics.selectedLyrics = lyrics;
                $scope.topWords = lyrics;
                updateShareUrl();
            });
        };
    });
