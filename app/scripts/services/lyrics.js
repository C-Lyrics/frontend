'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Lyrics
 * @description
 * # Lyrics
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
    .factory('Lyrics', function($http) {
        var lyrics = [{
            text: 'We',
            weight: 15,
        }, {
            text: 'are',
            weight: 23,
        }, {
            text: 'the',
            weight: 8,
        }, {
            text: 'champions',
            weight: 7,
        }, {
            text: 'world',
            weight: 32,
        }, ];
        // Public API here
        return {
            someMethod: function() {
                return meaningOfLife;
            }
        };
    });
