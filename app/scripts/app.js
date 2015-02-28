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
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
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
