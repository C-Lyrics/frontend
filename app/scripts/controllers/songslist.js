'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SongslistCtrl
 * @description
 * # SongslistCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('SongslistCtrl', function($scope, $location, $routeParams,
        Lyrics) {
        var songs;
        var artists = $routeParams.artists,
            word = $routeParams.word;

        $scope.searchWord = word;
        songs = Lyrics.getSongsTitle($scope.searchWord);

        $scope.songsList = songs.map(function(val, idx) {
            val.link = window.location.origin + '#/' + artists +
                '/SongsList/' + word + '/' + val.id;
            // val.link = $location.path() + '/' + val.id;
            return val;
        });

        // TODO: get correct link
        $scope.cloudLink = 'Get link from $routeParams';
    });
