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
            //lyrics = lyrics.toLowerCase();
            // var highlightedword = new RegExp('(\\b' + word + '\\b)', 'gim');
            // var newsong = song.replace(/(<span>|<\/span>)/igm, '');
            // document.getElementById('highlightedwordID').innerHTML = newsong;
            // var replacedsong = newsong.replace(highlightedword, '<span>$1</span>');
            // document.getElementById('highlightedwordID').innerHTML = replacedsong;
    
            return song.replace(word, '<highlight>' + word + '</highlight>');
        };

        $scope.selectedSong = highlightSong(song, word);
        $scope.title = song;
        // TODO: Keep the artists and selected word in the url.
        $scope.cloudLink = Server.URL + '#/?artists=';
        $scope.listLink =
            Server.URL + '#/?word=';
    });
