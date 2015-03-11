'use strict';

describe('Service: Lyrics', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var Lyrics;

  beforeEach(inject(function (_Lyrics_) {
    Lyrics = _Lyrics_;
  }));
  
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


    it('should test countFrequency function', function () {
      var word1 = 'jaYz';
     	var lyrics1 = 'I hopped off the plane at L.A.X. With a dream and my cardigan Welcome to the land of fame excess (whoa), Am I gonna fit in? Jumped in the cab, Here I am for the first time Look to my right and I see the Hollywood sign This is all so crazy Everybody seems so famous My tummys turnin and Im feelin kinda home sick Too much pressure and Im nervous, Thats when the taxi man turned on the radio And a JayZ song was on And a JayZ song was on And a JayZ song was on';
    	var wordcount = Lyrics.countFrequency(word1, lyrics1);
        	expect(wordcount).toEqual(3);
        
     	var word2 = 'ALl';
    	var lyrics2 = 'ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU ALL I WANT IS YOU';
    	var wordcount2 = Lyrics.countFrequency(word2, lyrics2);
        	expect(wordcount2).toEqual(11);
    });
    
    it('should test the selectMostFrequents function', function(){
      //in the function, will take the the top 4 words that are sorted based on frequency
      var words = [{text: 'Kelsey', weight: 100}, 
      {text: 'is', weight: 700},
      {text: 'the', weight: 90},
      {text: 'best', weight: 800},
      {text: 'ever', weight: 120}];
      var frequentwords = Lyrics.selectMostFrequents(words, 4);
      //expect 'the' not to be in the list
      expect(frequentwords).toEqual([
      {
        text: 'Kelsey',
        weight: 100,},
      {
        text: 'ever',
        weight: 120,},
      {
        text: 'is',
        weight: 700,},
      {
        text: 'best',
        weight: 800,},
      ]);
    });
	
		it('should test getSongsTitle function and return array of song titles', function () {
			
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
                	count: 3,}
            ]);
                	
		});
		
		
		it('should test formatTop function and return the N most common words', function () {
		
			var songs= [];
			
			var song0 = {
            	title: 'Up Up and Away',
            	lyrics: 'Ill be up up and away Up up and away Cause they gon judge me anyway so whatever sun',
            	artist: 'Kid Cudi'
      };
      var song1 = {
            	title: 'Up Up and Away Modified',
            	lyrics: 'Now when the sun come up Ill be there to say what up the morning sun sun',
            	artist: 'Kid Cudi'
      };
      var song2 = {
            	title: 'Some Nights Modified Even More',
            	lyrics: 'Now when the sun come up Ill be there to say what up In the morning brush my teeth sun',
            	artist: 'Kid Cudi'
      };

			//push songs into an empty songs array

			songs.push(song0);
			songs.push(song1);
      songs.push(song2);

			var results= [];
			

      var word0= {	
          text: 'sun',
          weight: 6
      };
      var word1= {  
          text: 'In',
          weight: 3
      }; 
            
      results.push(word1);
      results.push(word0);
			
			expect(Lyrics.formatTop(songs, 2)).toEqual(results);
		
		});
		
		
		it('should test extractWords function', function () {
			
			var songs= [];
			
			var song0 = {
            	title: 'Some Nights',
            	lyrics: 'Some nights I stay up cashing in my bad luck',
            	artist: 'Fun'
         	};
         	var song1 = {
            	title: 'Some Nights Part Two',
            	lyrics: 'Some nights I call it a draw',
            	artist: 'Fun'
         	};
			
			songs.push(song0);
			songs.push(song1);
			
			expect(Lyrics.extractWords(songs)).toEqual(['Some', 'nights', 'stay', 'cashing', 'my', 'bad', 'luck', 'Some', 'nights', 'call', 'a', 'draw']);
			
		}); 

    it('should test removeDuplicates function', function () {
      
      var results= [];
      
        var word0= {  
             text: 'sun',
             weight: 6
          };
          var word1= {  
             text: 'moon',
               weight: 3
          }; 
          var word1= {  
             text: 'moon',
               weight: 3
          };
            
          results.push(word1);
          results.push(word0);
      
      expect(Lyrics.removeDuplicates(results)).toEqual([{text: 'moon', weight: 3}, {text: 'sun', weight: 6}]);
      
    });
			
	});

});
