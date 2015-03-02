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
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/:artists', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/:artists/SongsList/:word', {
                templateUrl: 'views/songslist.html',
                controller: 'SongslistCtrl'
            })
            .when('/:artists/Lyrics/:word/:id', {
                templateUrl: 'views/songlyrics.html',
                controller: 'SonglyricsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        // $locationProvider.html5Mode(false)
        //     .hashPrefix('!');
    });
