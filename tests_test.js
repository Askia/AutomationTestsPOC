Feature('login');

// To see this test live in browser you can run this command: npx codeceptjs run --steps --plugins allure
// To open the UI execute this command in the terminal: npx codecept-ui
// For reporting after tests you can run this command: allure serve output
Scenario('Login to DevPortal, Go to Administration, Go to Surveys, Search for a survey and click on it', ({ I }) => {
    // Login to DevPortal
    I.amOnPage('https://devportal.askia.com/AskiaPortal/SignIn');
    I.fillField({name: 'userName'},'Administrator');
    I.fillField({name: 'password'},'#^Cj!W99pQ!');
    I.click({css: 'button#account-submit'});
    // Go to Administration
    I.waitForElement('#module-frame', 3);
    within({frame: "#module-frame"}, () => {
        I.see('Administration');
        I.click('Administration');
    });
    // Go to Surveys
    I.waitForElement('#module-frame', 3);
    within({frame: "#module-frame"}, () => {
        I.waitForElement('#sidebar-surveys', 3);
        I.click({css: '#sidebar-surveys'});
    });    
    // Search for a survey and click on it
    I.waitForElement('#module-frame', 3);
    within({frame: "#module-frame"}, () => {
        I.waitForElement('#survey-grid-container', 3);
        I.waitForElement('input[type="search"]', 3);
        I.fillField('.search-items','EX');
        I.waitForElement('a.data-grid-cell-link', 3);
        I.click({css: 'a.data-grid-cell-link'});
    });     
});