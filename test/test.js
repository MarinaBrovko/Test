const assert = require('assert');

describe ('Page opening', function () {

    it('get title', function(){
        browser.url('/');
        let title = browser.getTitle();
        assert.equal(title, 'Bug Tracker', 'Title is incorrect'); //compare that "title" variable equals to "Bug Tracker" and error-message if not
    })
//test coment

    it('get header title', function(){
        let title = browser.getText('.custom-header span');
        assert.equal(title, 'BugTracker', 'Title is incorrect'); //compare that "title" variable equals to "Bug Tracker" and error-message if not
    })
});