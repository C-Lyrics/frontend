'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SonglyricsCtrl
 * @description
 * # SonglyricsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('SonglyricsCtrl', function($scope, $routeParams, $location,
        Lyrics, Server) {
        var highlightSong,
            word = $routeParams.word,
            song = Lyrics.getSong(parseInt($routeParams.id)),
            artists = $routeParams.artists;

        highlightSong = function(song, word) {
            // Change the lyrics so that it highlights the search words.
            // Use Regexp to do that !
            var re = new RegExp('(' + word + ')', "ig");
            return song.lyrics.replace(re,
                '<span class="highlight" style="color:#FFFF00;">$1</span>'
            );
        };

        $scope.selectedSong = highlightSong(song, word);

        // TODO: Fetch artists and songs if given, else redirect to homepage
        $scope.cloudLink = '?artists=' + artists;
        $scope.listLink = Server.URL + artists + '/SongsList/' + word;
        $scope.title = song.title;

        $scope.cloudLinkRedirect = function() {
            $location.url($scope.cloudLink);
            $location.path(Server.URL);
        };
    });
