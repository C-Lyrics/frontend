'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SonglyricsCtrl
 * @description
 * # SonglyricsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('SonglyricsCtrl', function($scope, $location, Lyrics) {
        $scope.selectedSong = Lyrics.getSong(parseInt($location.search()[
            'id']));
    });
