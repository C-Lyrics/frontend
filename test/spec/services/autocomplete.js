'use strict';

describe('Service: Autocomplete', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  // var Autocomplete;
  // beforeEach(inject(function (_Autocomplete_) {
  //   Autocomplete = _Autocomplete_;
  // }));
  	 var autoNum= 5;

  var autocomplete;

  beforeEach(inject(function (_Autocomplete_) {
    autocomplete = _Autocomplete_;
  }));

	//it('should wait for a pause in typing', function () {
    //expect(!!Autocomplete).toBe(false);
   //});

	  it('should wait for a pause in typing then show autocomplete drop down', function () {
    });
   	it('should show autoNum artist names', function () {
   	});
   	it('should scroll to bottom of artist name list', function () {
   	});
   	it('should show picture to the right of each artist name', function () {
   	});

  describe('White Box testing', function() {
    it('should check autocomplete functionality', function () {
        var getartist = autocomplete.getartist();
      
    });
  });

});
