'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SonglyricsCtrl
 * @description
 * # SonglyricsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('SonglyricsCtrl', function($scope, $location, Lyrics, Server) {
        var highlightSong,
            word = '',
            song = Lyrics.getSong(parseInt($location.search()['id']));


        highlightSong = function(song, word) {
            return song;
        };


        $scope.selectedSong = highlightSong(song, word);
        // TODO: Keep the artists and selected word in the url.
        $scope.cloudLink = Server.URL + '#/?artists=';
        $scope.listLink = Server.URL + '#/?word=';
    });
