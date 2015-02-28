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
        /*
         * The way we store songs is as a list of JS objects:
         * [{
         *   title: '',
         *   lyrics: '',
         *   artist: ''
         * }, ...]
         */
        var songs = [{
            title: 'No Woman No Cry',
            lyrics: 'The world is beautiful, I am high.',
            artist: 'Bob Marley',
        }, {
            title: 'We Are the Champions',
            lyrics: 'We are the champions, that is it.',
            artist: 'Queen',
        }, {
            title: 'Sympathy for the Devil',
            lyrics: 'Devil is cool, or am I the devil\'s advocate ?',
            artist: 'Marley',
        }, {
            title: 'Yellow Submarine',
            lyrics: 'I do not live in a yellow submarine but who cares, rigth ?',
            artist: 'The Beatles',
        }, ];

        var lyrics =
            'We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.We are the chmpaions, the best of the world. Yes we are.';
        var countFrequency = function(word, lyrics) {
            // Actually implement the count function
            return parseInt(Math.random() * 10);
        };

        var selectMostFrequents = function(words, N) {
            // TODO: Return the top N words, from the words array, which contains
            // counts and word: [{text: '', weight: int}, ...]
            return words;
        };
        // Public API here
        return {
            selectedLyrics: [],
            selectedArtists: [],

            getSong: function(id) {
                return songs[id];
            },

            getSongsTitle: function(word) {
                var song, lyrics, i, occurences, titles = [];
                for (i = 0; i < songs.length; i++) {
                    song = songs[i];
                    lyrics = song.lyrics;
                    occurences = lyrics.toLowerCase()
                        .indexOf(word);
                    if (occurences != -1) {
                        occurences = countFrequency(word, lyrics);
                        titles.push({
                            id: i,
                            title: song.title,
                            count: occurences,
                        });
                    }
                }
                debugger
                return titles;
            },

            getLyrics: function(word, callback) {
                callback(lyrics);
            },

            formatTop: function(words, N) {
                // TODO: count the words, strip stopwords and punctuation, only select best 200
                words = words.split(' ');
                words = words.map(function(val, idx, array) {
                    return {
                        text: val,
                        weight: countFrequency(),
                    };
                });
                words = selectMostFrequents(words, 200);
                return words;
            },

            chooseBests: function(merger, original, N) {
                // TODO: Actually implement the best N of both arrays
                return original.concat(merger);
            },
        };
    });
