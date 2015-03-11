'use strict';

/**
 * @ngdoc service
 * @name frontendApp.Lyrics
 * @description
 * # Lyrics
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
    .factory('Lyrics', function($http, Server) {
        /*
         * The way we store songs is as a list of JS objects:
         * [{
         *   title: '',
         *   lyrics: '',
         *   artist: ''
         * }, ...]
         */
        var serverUrl = Server.SERVER + 'getSongs/';
        var songsSaved = [];
        var extractWords = function(songs) {
            var i, song, lyrics = [];
            for (i = 0; i < songs.length; i++) {
                song = songs[i].lyrics;
                song = song.replace(
                    /\s(the|am|I|are|not|t|they|me|you|he|she|he|are|it|if|is|or|o|a|don|about|above|after|again|against|all|and|any|aren|as|act|herself|have|from|during|each|few|for|how|was|were|very|too|to|two|one|your|re|let|s|only|myself|other|ours|same|that|these|those|this|them|then|their|under|until|ve|why|us|an|in|on|do)\s/gi,
                    '');
                lyrics = lyrics.concat(song.split(' '));
            }
            lyrics = lyrics.filter(function(item, pos) {
                return lyrics.indexOf(item) == pos;
            })
            return lyrics;
        };

        var countFrequency = function(word, lyrics) {
            //change all lyrics to lowercase to allow "match"
            //function to add to count
            word = word.toLowerCase();
            lyrics = lyrics.toLowerCase();
            return (lyrics.split(word)
                .length - 1);
        };

        var selectMostFrequents = function(words, N) {
            // TODO: Return the top N words, from the words array, which contains
            // counts and word: [{text: '', weight: int}, ...]
            // sort according to the weight

            var sortWordByWeight = words.slice(0);
            sortWordByWeight.sort(function(a, b) {
                return a.weight - b.weight;
            });

            words = sortWordByWeight.slice(-N);
            return words;
        };
        // Public API here
        return {
            selectedLyrics: [],
            selectedArtists: [],
            songsSaved: songsSaved,

            countFrequency: countFrequency,
            selectMostFrequents: selectMostFrequents,

            getSong: function(id) {
                return songsSaved[id];
            },
            
            loadArtists: function(artists, callback) {
                var i, artist;
                this.selectedArtists = artists;
                for (i = 0; i < artists.length; i++) {
                    artist = artists[i];
                    this.getLyrics(artist, function() {
                        callback(songsSaved);
                    });
                }
            },

            getSongsTitle: function(word) {
                var song, lyrics, i, occurences, titles = [];
                for (i = 0; i < songsSaved.length; i++) {
                    song = songsSaved[i];
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
                var url = serverUrl + artist;
                $http.get(url, {
                    cache: true
                })
                    .then(function(data) {
                        if (!!data.data.error) {
                            alert('No results found');
                            return;
                        }
                        var songs = data.data.map(function(val, idx) {
                            return {
                                title: val[1],
                                artist: val[0],
                                lyrics: val[2],
                            };
                        });
                        songsSaved = songsSaved.concat(songs);
                        callback(songs);
                    }, Server.errorHandler);
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
                words = selectMostFrequents(words, N);
                return words;
            },

            chooseBests: function(merger, original, N) {
                // TODO: what if 2 words appear twice in the lyrics ?
                return selectMostFrequents(original.concat(merger), N);
            },
        };
    });
