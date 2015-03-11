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
      // var word = 'Kelsey';
      // var lyrics = 'A Kelsey is the best person ever';
      var word = 'JayZ';
      var lyrics = 'I hopped off the plane at L.A.X. With a dream and my cardigan Welcome to the land of fame excess (whoa), Am I gonna fit in? Jumped in the cab, Here I am for the first time Look to my right and I see the Hollywood sign This is all so crazy Everybody seems so famous My tummys turnin and Im feelin kinda home sick Too much pressure and Im nervous, Thats when the taxi man turned on the radio And a JayZ song was on And a JayZ song was on And a JayZ song was on';
      var wordcount = Lyrics.countFrequency(word, lyrics);
      expect(wordcount).toEqual(3);
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
