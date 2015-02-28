'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SongslistCtrl
 * @description
 * # SongslistCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('SongslistCtrl', function($scope, $location, Lyrics) {
        $scope.searchWord = $location.search()['word'];
        $scope.songsList = Lyrics.getSongsTitle($scope.searchWord);
    });
