'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Autocomplete
 * @description
 * # Autocomplete
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
    .factory('Autocomplete', function($http, Server) {
        var artists = ['Marley', 'Stones', 'Marley', 'Stones', 'Marley',
            'Stones', 'Marley', 'Stones', 'Marley', 'Stones', 'Marley',
            'Stones', 'Marley', 'Stones', 'Beatles'
        ];

        // Public API here
        return {
            getArtists: function(name, callback) {
                callback(artists);
            }
        };
    });
