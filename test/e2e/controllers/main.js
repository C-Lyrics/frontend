'use strict';

describe('Application Homepage', function() {
    beforeEach(function() {
        browser.get('http://localhost:9000');
        browser.driver.sleep(3000);
        browser.ignoreSynchronization = true;
        return browser.driver.sleep(0);
    });

    it('should have a gray background', function() {
        expect(browser.driver.findElement(by.css('body'))
            .getCssValue('background-color'))
            .toBe('rgba(211, 211, 211, 1)');
    });


    it('should load main.html', function() {
        var main = browser.driver.findElement(by.id('main.html'));
        expect(!!main)
            .toBeTruthy();
    });

    it('should have a purple submit button', function() {
        var button = browser.driver.findElement(by.css('.btn'));
        expect(button.getText())
            .toEqual('Submit');
    });

    it('should have a purple outlined text field', function() {
        var input = browser.driver.findElement(by.css('input'));
        expect(input.getCssValue('border'))
            .toEqual('2px solid rgb(128, 0, 128)');
    });

    describe('Search functionality: Error', function() {

        it('should error message "empty query"', function() {
            var input = browser.driver.findElement(by.css('input')),
                submit = browser.driver.findElement(by.css('a.btn')),
                waiting = browser.driver.findElement(by.id(
                    'waitingMessage'));

            input.clear()
                .then(function() {
                    input.sendKeys('');
                    submit.click()
                        .then(function() {
                            browser.driver.sleep(500);
                            waiting.getText()
                                .then(function(error) {
                                    expect(!error)
                                        .toBeTruthy();
                                });
                        });
                });
        });

        it('should error message  "no artist"', function() {
            var input = browser.driver.findElement(by.css('input')),
                submit = browser.driver.findElement(by.css('a.btn')),
                waiting = browser.driver.findElement(by.id(
                    'waitingMessage'));
            input.clear()
                .then(function() {
                    input.sendKeys('ThisArtistdoesnotexists');
                    submit.click();
                    input.clear()
                        .then(function() {
                            browser.driver.sleep(500);
                            var text = waiting.getText()
                                .then(function(error) {
                                    expect(!!error)
                                        .toBeTruthy();
                                });

                        });
                });
        });
    });

    describe('Search functionality: Success', function() {

        it('should display a word cloud', function() {
            var input = browser.driver.findElement(by.css('input')),
                submit = browser.driver.findElement(by.css('a.btn'));

            input.sendKeys('Capital Cities');
            browser.driver.sleep('1000');
            submit.click();
            input.clear()
                .then(function() {
                    var wordCloud = browser.driver.findElement(
                        by.id(
                            'c-cloud-word'));
                    expect(!!wordCloud)
                        .toBeTruthy();
                });
        });

        it('should have a white background for word cloud', function() {
            var input = browser.driver.findElement(by.css('input')),
                submit = browser.driver.findElement(by.css('a.btn'));

            input.sendKeys('Capital Cities');
            browser.driver.sleep('1000');
            submit.click();
            input.clear()
                .then(function() {
                    var wordCloud = browser.driver.findElement(
                        by.id(
                            'c-cloud-word'));
                    expect(wordCloud.getCssValue(
                        'background-color'))
                        .toBe('rgba(0, 0, 0, 0)');
                });
        });

        it('should make facebook and add2cloud visible', function() {
            var input = browser.driver.findElement(by.css('input')),
                submit = browser.driver.findElement(by.css('a.btn'));

            input.sendKeys('Capital Cities');
            browser.driver.sleep('1000');
            submit.click();
            input.clear()
                .then(function() {
                    var wordCloud = browser.driver.findElement(
                            by.id('c-cloud-word')),
                        facebook = browser.driver.findElement(
                            by.id('facebook')),
                        add2cloud = browser.driver.findElement(
                            by.id('add2cloud'));
                    expect(!!facebook)
                        .toBeTruthy(!!add2cloud);
                    expect(!!add2cloud)
                        .toBeTruthy();
                });

        });

    });


});
