'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SonglyricsCtrl
 * @description
 * # SonglyricsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('SonglyricsCtrl', function ($scope) {
    $scope.songLyrics = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
      //display all the lyrics of the song
    ];
  });
