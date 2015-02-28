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
        var lyrics =
            'We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.';
        var lyricsFormated = [{
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
            getLyrics: function(name, callback) {
                callback(lyrics);
            },

            formatTop: function(words, N) {
                // TODO: count the words, strip stopwords and punctuation
                words = words.split(' ');
                words = words.map(function(val, idx, array) {
                    return {
                        text: val,
                        weight: Math.random() * 10,
                    };
                });
                return words;
            },
        };
    });
