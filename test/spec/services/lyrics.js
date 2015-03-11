'use strict';

describe('Service: Lyrics', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var Lyrics;

  beforeEach(inject(function (_Lyrics_) {
    Lyrics = _Lyrics_;
  }));


  it('should return count number', function () {
      var word = 'Kelsey';
      var lyrics = 'A Kelsey is the best person ever';
      var wordcount = Lyrics.countFrequency(word, lyrics);
      expect(wordcount).toEqual(1);
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
