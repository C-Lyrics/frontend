'use strict';

describe('Controller: MainCtrl', function() {

    // load the controller's module
    beforeEach(module('frontendApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should check if the MainCtrl works', function() {
        expect(!!MainCtrl)
            .toBe(true);
    });

    it('should display the application name', function() {
        browser.get('http://localhost:9000');

        var appName = element(by.css('h3.text-muted')); //using the CSS selector

        expect(appName.getText())
            .toEqual('App1');
    });

    it('should load main.html', function() {

        expect(angular.element('#cWordCloud')
            .css('backgroundColor'))
            .toBe('rgb(211, 211, 211)');
    });
    it(
        'should have a grey background', function() {});
    it(
        'should have a purple submit button', function() {});
    it(
        'should have a purple outlined text field', function() {});

    describe('Search functionality: Error', function() {
        it('should error message "Artist not found"', function() {});
        it('should error message "empty query"', function() {});
    });

    describe('Search functionality: Success', function() {
        it('should display a word cloud', function() {});
        it('should have a white background for word cloud', function() {});
        it('should make facebook and add2cloud visible', function() {});
    });

});
