describe('Application Homepage', function() {
    beforeEach(function() {
        return browser.ignoreSynchronization = true;
    });

    it('should have a gray background', function() {

        browser.ignoreSynchronization = true;
        browser.get('http://localhost:9000');
        expect(true)
            .toBeTruthy();

        expect(browser.driver.findElement(by.css('body'))
            .getCssValue('background-color'))
            .toBe('rgba(211, 211, 211, 1)');
    });

});



describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('todoText'))
            .sendKeys('write a protractor test');
        element(by.css('[value="add"]'))
            .click();

        var todoList = element.all(by.repeater('todo in todos'));
        expect(todoList.count())
            .toEqual(3);
        expect(todoList.get(2)
            .getText())
            .toEqual('write a protractor test');
    });
});
