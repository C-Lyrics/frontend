'use strict';

describe('Service: Lyrics', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var Lyrics;
  beforeEach(inject(function (_Lyrics_) {
    Lyrics = _Lyrics_;
  }));
  	
  //it('should return count number', function () {
  //  expect(countFrequency(word, lyrics)).toBe(number);
  //});
  
	describe('Black box testing of Lyrics service', function () {
  		it('should show lyrics left-aligned', function () {
  		});
  		it('should show selected word highlighted in yellow', function () {
 		});
  		it('should navigate back to songs page', function () {
  		});
  		it('should navigate back to home page', function () {
  		});
	});
	
	describe('White box testing of Lyrics service', function () {
	
		it('should return array of song titles', function () {
			
			var song0 = {
            	title: 'Some Nights',
            	lyrics: 'Some nights I stay up cashing in my bad luck, some nights I call it a draw, some nights I wish that my lips could build a castle, some nights I wish theyd just fall off',
            	artist: 'Fun'
         	};
         	var song1 = {
            	title: 'Some Nights Part Two',
            	lyrics: 'Well, some nights I wish that this all would end cause I could use some friends for a change. And some nights Im scared youll forget me again some nights I always win, I always win',
            	artist: 'Fun'
         	};
         	var song2 = {
            	title: 'Some Nights No Nights',
            	lyrics: 'Well, some times I wish that this all would end cause I could use some friends for a change. And some times Im scared youll forget me again some times I always win, I always win',
            	artist: 'Fun'
         	};
         
         	Lyrics.songsSaved.push(song0);
         	Lyrics.songsSaved.push(song1);
         	Lyrics.songsSaved.push(song2);
         
			expect(Lyrics.getSongsTitle('nights')).toEqual([
				{	
					id: 0,
                	title: 'Some Nights',
                	count: 4,}, 
            	{	
                	id: 1,
                	title: 'Some Nights Part Two',
                	count: 3,}]);
				}
			);
		});
});
