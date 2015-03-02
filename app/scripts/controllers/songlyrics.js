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
            // TODO: Change the lyrics so that it highlights the search words.
            // Use Regexp to do that !
            return song;
        };


        $scope.selectedSong = highlightSong(song, word);
        // TODO: Keep the artists and selected word in the url.
        $scope.cloudLink = Server.URL + '#/?artists=';
        $scope.listLink =
            Server.URL + '#/?word=';
    });
