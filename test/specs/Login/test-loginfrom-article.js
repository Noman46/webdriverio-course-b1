describe('Login Suite for article ', () => {
    beforeEach(() => {
        console.log('Running before each test');
        // Set up preconditions here (e.g., navigate to a specific page)
     
    });

    afterEach(() => {
        console.log('Running after each test');
        // Clean up after each test (e.g., clear cookies, reset state)
    
    })
    it("Login page Test 2", async () => {
        await browser.url('https://www.selenium.dev/selenium/web/alerts.html#')
        await browser.pause(5000);
    })
    it("Login page Test 3", async () => {
        await browser.url('https://www.selenium.dev/selenium/web/alerts.html#')
        await browser.pause(5000);
    })
})


