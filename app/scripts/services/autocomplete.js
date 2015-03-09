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
        var serverUrl = Server.SERVER + 'getArtists/';

        // Public API here
        return {
            getArtists: function(name, callback) {
                var url = serverUrl + name;
                $http.get(url, {
                    cache: true
                })
                    .then(function(data) {
                        var res = data.data.map(function(val, idx) {
                            return val.name;
                        });
                        callback(res);
                    }, function() {});
            }
        };
    });
