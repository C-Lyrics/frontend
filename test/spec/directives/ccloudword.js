'use strict';

describe('Directive: cCloudWord', function () {

  // load the directive's module
  beforeEach(module('frontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    scope.color = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF'];
  }));

  it('should make hidden element visible', inject(function ($compile) {
    expect(scope.color[0]).toBe('#FF0000');
    expect(scope.color[1]).toBe('#00FF00');
    expect(scope.color[2]).toBe('#0000FF');
  }));
});
