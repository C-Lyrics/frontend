'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
    .module('frontendApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'autocomplete',
        'angular-jqcloud',
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/SongsList', {
                templateUrl: 'views/songslist.html',
                controller: 'SongslistCtrl'
            })
            .when('/SongLyrics', {
                templateUrl: 'views/songlyrics.html',
                controller: 'SonglyricsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
