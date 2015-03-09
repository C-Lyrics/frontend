'use strict';

describe('Service: Lyrics', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var Lyrics;
  beforeEach(inject(function (_Lyrics_) {
    Lyrics = _Lyrics_;
  }));
  
  var word = "the",
      lyrics = "the cat and the dog were both sitting",
      number = 2;

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

  var words = [{
      text: 'The',
      weight: 6,
  }, {
      text: 'world',
      weight: 1,
  }, {
      text: 'beautiful',
      weight: 1,
  }, {
      text:'am',
      weight: 2,
  }, ];

  var N = 4;


  var countFrequency = function(word, lyrics) {
      
      lyrics = lyrics.toLowerCase();
      return (lyrics.split(word).length - 1);
  };
  var selectMostFrequents = function(words, N) {
    var sortWordByWeight = words.slice(0);
      sortWordByWeight.sort(function(a, b) {
        return a.weight - b.weight;
      });

    words = sortWordByWeight.slice(-N);
      return words;
  };


  var extractWords = function(songs) {
    return songs.map(function(val, idx) {
          return val.lyrics.split(' ');
    })
    .reduce(function(prev, curr, idx) {
      return prev.concat(curr);
    }, []);
  };

  it('should return count number', function () {
    expect(countFrequency(word, lyrics)).toBe(number);
  });
  
  
  it('should show lyrics left-aligned', function () {
  });
  it('should show selected word highlighted in yellow', function () {
  });
  it('should navigate back to songs page', function () {
  });
  it('should navigate back to home page', function () {
  });

});
