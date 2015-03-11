'use strict';

describe('Controller: SongslistCtrl', function () {

  // load the controller's module
  // beforeEach(module('frontendApp'));

  // var SongslistCtrl,
  //   scope;
    

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    
    SongslistCtrl = $controller('SongslistCtrl', {
      $scope: scope
    });
  }));
  // var word;
  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.cloudLink).toBe(Server.URL + '?artists=' + artists);
  // });


//kelsey added
  // var $rootScope;
  // beforeEach(inject(function (_$rootScope_) {
  //   $rootScope = _$rootScope_;
  // }));

  // describe('sorting the songs list', function(){

  //   it ('should sort the songs from highest frequency to lowest', function(){

  //     //var songslistControl = controller("SongslistCtrl", { $scope: scope });

  //     var songs = [{val:'See You Again', index: 30},
  //                 {val:'The Climb', index: 12},
  //                 {val: 'Party in the U.S.A', index: 33},
  //                 {val: 'Cant Be Tamed', index: 140},
  //                 {val: 'Wrecking Ball', index: 78},
  //                 {val: 'We Cant Stop', index: 98}];
  //     var sorting = SongslistCtrl.songsList;
  //     expect(sorting).toEqual(['The Climb','See You Again','Party in the U.S.A', 'Wrecking Ball'
  //      'We Cant Stop','Cant Be Tamed']);
  //   });
  // });

  // it ('will have the list aligned left', function(){

  // });
  // it ('will allow the title of any of the songs to be clickable', function(){

  // });
  // it ('will have the back to cloud button navigate back to the cloud generated page', function(){

  // });
  // describe('main page navigation', function(){

  //   beforeEach(function(){
  //     browser.get('views/main.html');
  //   });

  //   it ('navigate from a song title to the back to cloud page', function(){
  //     // Find the back to cloud button on the page and click it
  //     element(by.css(':button')).click();
  //     //checks if it navigates back to cloud page
  //     expect(element.all(by.css('[ng-view] p')).first().getText()).toMatch(/MainCtrl/);
  //   });
  // });

});
