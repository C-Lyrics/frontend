'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SonglyricsCtrl
 * @description
 * # SonglyricsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('SonglyricsCtrl', function($scope, $routeParams, Lyrics, Server) {
        var highlightSong,
            word = $routeParams.word,
            song = Lyrics.getSong(parseInt($routeParams.id));
    
        highlightSong = function(song, word) {
            // Change the lyrics so that it highlights the search words.
            // Use Regexp to do that !
            var re = new RegExp('('+word+')', "ig");
            return song.lyrics.replace(re, '<mark style="">$1</mark>');
        };

        $scope.selectedSong = highlightSong(song, word);
        $scope.title = song.title;
        // TODO: Keep the artists and selected word in the url.
        $scope.cloudLink = Server.URL + '#/?artists=';
        $scope.listLink =
            Server.URL + '#/?word=';
    });
