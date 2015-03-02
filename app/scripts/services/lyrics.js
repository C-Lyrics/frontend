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
            lyrics: 'The world is beautiful, THE I am high.',
            artist: 'Bob Marley',
        }, {
            title: 'We Are the Champions',
            lyrics: 'We are the champions the champions, the champions that is it.',
            artist: 'Queen',
        }, {
            title: 'Sympathy for the Devil',
            lyrics: 'Devil is cool, or am I the devil\'s advocate ? ThE',
            artist: 'Marley',
        }, {
            title: 'Yellow Submarine',
            lyrics: 'I do not live in a yellow submarine but who cares, rigth ?',
            artist: 'The Beatles',
        }, ];

        var extractWords = function(songs) {
            // Receives an array of songs, return an array of
            // words with the stopwords stripped and punctuation as well.
            // http://stackoverflow.com/questions/5631422/stop-word-removal-in-javascript
            return songs.map(function(val, idx) {
                    return val.lyrics.split(' ');
                })
                .reduce(function(prev, curr, idx) {
                    return prev.concat(curr);
                }, []);
        };

        var countFrequency = function(word, lyrics) {
            //change all lyrics to lowercase to allow "match"
            //function to add to count
            lyrics = lyrics.toLowerCase();
            return (lyrics.split(word)
                .length - 1);
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

            loadArtists: function(artists, callback) {
                var i, artist;
                this.selectedArtists = artists;
                for (i = 0; i < artists.length; i++) {
                    artist = artists[i];
                    this.getLyrics(artist, function() {
                        callback(songs);
                    });
                }
            },

            getSongsTitle: function(word) {
                var song, lyrics, i, occurences, titles = [];
                for (i = 0; i < songs.length; i++) {
                    song = songs[i];
                    lyrics = song.lyrics;
                    occurences = lyrics.toLowerCase()
                        .indexOf(word);
                    if (occurences !== -1) {
                        occurences = countFrequency(word, lyrics);
                        titles.push({
                            id: i,
                            title: song.title,
                            count: occurences,
                        });
                    }
                }
                return titles;
            },

            getLyrics: function(artist, callback) {
                // Don't forget to save the lyrics in the songs variable.
                callback(songs);
            },

            formatTop: function(songs, N) {
                var words = extractWords(songs),
                    lyrics = words.join(' ');
                words = words.map(function(val, idx, array) {
                    return {
                        text: val,
                        weight: countFrequency(val, lyrics),
                    };
                });
                words = selectMostFrequents(words, 200);
                return words;
            },

            chooseBests: function(merger, original, N) {
                // TODO: what if 2 words appear twice in the lyrics ?
                return selectMostFrequents(original.concat(merger), N);
            },
        };
    });
