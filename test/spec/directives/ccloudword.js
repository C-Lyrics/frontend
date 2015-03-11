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

  it ('should check size of words dependent upon frequency', function(){
    scope.words
  });
  it('should check there are multiple colors in the word cloud', inject(function ($compile) {
    expect(scope.color[0]).toBe('#FF0000');
    expect(scope.color[1]).toBe('#00FF00');
    expect(scope.color[2]).toBe('#0000FF');
  }));
  it ('should check the stop words', function(){

  });
  it ('should check generation time to be from 10 sec to 1 min', function(){
    //expect(element.all(by.repeater('task in tasks')).count()).toEqual(10);
  });
});
