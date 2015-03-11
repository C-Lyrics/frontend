'use strict';

describe('Controller: SongslistCtrl', function() {

    // load the controller's module
    beforeEach(module('frontendApp'));


    // Initialize the controller and a mock scope
    var SongslistCtrl, scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        SongslistCtrl = $controller('SongslistCtrl', {
            $scope: scope
        });
    }));
    // var word;
    // it('should attach a list of awesomeThings to the scope', function () {
    //   expect(scope.cloudLink).toBe(Server.URL + '?artists=' + artists);
    // });


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
});
