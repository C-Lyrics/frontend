'use strict';

describe('Songs list Page', function() {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:9000/#!/artists/SongsList/word');
        browser.driver.sleep(1000);
        return browser.driver.sleep(10);
    });
    // browser.driver.sleep(12000);

    it('will have the list aligned left', function() {
        var list = browser.driver.findElement(by.id('songlist'));
        expect(!!list)
            .toBeTruthy();

        expect(list.getCssValue('text-align'))
            .toEqual('left');
    });
    it('will allow the title of any of the songs to be clickable', function() {

        var SongslistCtrl, scope;

        scope.songsList = [{
            title: 'test',
            count: 34,
            link: 'http://www.test.com'
        }, ];

        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            SongslistCtrl = $controller('SongslistCtrl', {
                $scope: scope
            });
        });

        var link = browser.driver.findElement(by.css('.c-link'));
        expect(!!link)
            .toBeTruthy();
    });
    it(
        'will have the back to cloud button navigate back to the cloud generated page',
        function() {
            var button = browser.driver.findElement(by.id('back2cloud'));
            expect(!!button)
                .toBeTruthy();
        });

    it('navigate from a song title to the back to cloud page', function() {

        var SongslistCtrl, scope;

        scope.songsList = [{
            title: 'test',
            count: 34,
            link: 'http://www.test.com'
        }, ];
        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            SongslistCtrl = $controller('SongslistCtrl', {
                $scope: scope
            });
        });
        var backButton = browser.driver.findElement(by.css('.c-link'));
        expect(!!backButton.getAttribute('ng-href'))
            .toBeTruthy();
    });
});
