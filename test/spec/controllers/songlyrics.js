'use strict';

describe('Controller: SonglyricsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var SonglyricsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SonglyricsCtrl = $controller('SonglyricsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
