'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SongslistCtrl
 * @description
 * # SongslistCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('SongslistCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
