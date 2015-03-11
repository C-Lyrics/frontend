describe('Application Homepage', function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        return browser.driver.sleep(0);
    });
    browser.get('http://localhost:9000');
    browser.driver.sleep(3000);

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

            input.sendKeys('');
            submit.click();
            browser.driver.sleep(500);
            waiting.getText()
                .then(function(error) {
                    expect(!error)
                        .toBeTruthy();
                });

        });

        it('should error message  "no artist"', function() {
            var input = browser.driver.findElement(by.css('input')),
                submit = browser.driver.findElement(by.css('a.btn')),
                waiting = browser.driver.findElement(by.id(
                    'waitingMessage'));

            input.sendKeys('ThisArtistdoesnotexists');
            submit.click();
            browser.driver.sleep(500);
            var text = waiting.getText()
                .then(function(error) {
                    expect(!!error)
                        .toBeTruthy();
                });
        });
    });

    describe('Search functionality: Success', function() {

        it('should display a word cloud', function() {});

        it('should have a white background for word cloud', function() {});

        it('should make facebook and add2cloud visible', function() {});

    });


});
