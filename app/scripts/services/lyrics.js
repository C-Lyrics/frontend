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
            // get rid of stop words
            /*var stop_words = new Array('a', 'the', 'I', 'am');
            		var filtered  = noPunctArray.split( /\b/ ).filter( function( v ){
        				return stop_words.indexOf( v ) == -1;
  					});
            		stop_words.forEach(function(noPunctArray) {
      					var reg = new RegExp(noPunctArray +'\\s','gi')
      					noPunctArray = noPunctArray.replace(reg, "");
  					});

            		//get rid of repeated words

            		//return final array
                    return val.lyrics.split(' ');
             })
                .reduce(function(prev, curr, idx) {
                    return prev.concat(curr);
            	}, []);
        };*/
            return songs.map(function(val, idx) {
                //get rid of punctuation
                var newStr = val.lyrics.replace(/[^A-Za-z]/g,
                    " ");

                //create initial array
                var initArray = newStr.split(' ');

                //get rid of duplicate words and some common stop words
                var foundWords = new Array(initArray[0]);
                for (var i = 0; i < initArray.length; i++) {
                    if (initArray[i].toLowerCase() === 'the') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() === 'I') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() ===
                        'am') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() ===
                        'is') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() ===
                        'it') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() ===
                        'are') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() ===
                        'he') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() ===
                        'she') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() ===
                        'we') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() ===
                        'you') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() ===
                        'me') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() ===
                        'they') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() === 'a') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() === 't') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() === 's') {
                        initArray.splice(i, 1);
                    }
                    else if (initArray[i].toLowerCase() ===
                        'not') {
                        initArray.splice(i, 1);
                    }
                    for (var j = 0; j < foundWords.length; j++) {
                        if (initArray[i] == foundWords[j]) {
                            initArray.splice(i, 1);
                        }
                    }
                    foundWords.push(initArray[i]);
                }

                //return final array of words to show up in cloud
                return initArray;
            })

            .reduce(function(prev, curr, idx) {
                return prev.concat(curr);
            }, []);
        };

        var countFrequency = function(word, lyrics) {
            //change all lyrics to lowercase to allow "match"
            //function to add to count
            lyrics = lyrics.toLowerCase();
            return (lyrics.split(word).length - 1);
        };

        // var words = [{
        //     text: 'The',
        //     weight: 6,
        // }, {
        //     text: 'world',
        //     weight: 1,
        // }, {
        //     text: 'beautiful',
        //     weight: 1,
        // }, {
        //     text:'am',
        //     weight: 2,
        // }, ];

        // use slice to copy the array instead of just making a reference
        // will return the Objects sorted by weight

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
                words = selectMostFrequents(words, N);
                return words;
            },

            chooseBests: function(merger, original, N) {
                // TODO: what if 2 words appear twice in the lyrics ?
                return selectMostFrequents(original.concat(merger), N);
            },
        };
    });
