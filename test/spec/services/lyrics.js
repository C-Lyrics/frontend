'use strict';

describe('Service: Lyrics', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var Lyrics;
  beforeEach(inject(function (_Lyrics_) {
    Lyrics = _Lyrics_;
  }));

  it('should do something', function () {
    expect(!!Lyrics).toBe(true);
  });

});
