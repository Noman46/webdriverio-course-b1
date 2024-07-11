import DummyPage from '../../pageobjects/dummy.page.js'

describe('Cash-Cookies-Debug', () => {

    
    it('Get cookies', async () => {
        await browser.url('https://test.dn.no/auth/user/login?target=%2F');
        await browser.pause(20000)
        const username = await $('input[name="username"]')
        const password = await $('input[name="password"]')
        const loginBtn = await $('button[type="submit"]')
        await username.setValue("e6@dn.no")
        await browser.pause(500)
        await password.setValue("123456")
        await browser.pause(500)
        await loginBtn.click()
        await browser.pause(10000)
    
        // const allCookies = await browser.getCookies()
        const cookiesByName = await browser.getCookies('authRefreshed')
        // console.log("Cookies ================",allCookies);
        // console.log("One cookie            ================",allCookies[0]);
        console.log("Cookie by name            ================", cookiesByName);
    })
    it('Set cookies', async () => {
        await browser.url('https://test.dn.no/');
        await browser.pause(3000)
        await browser.setCookies([
            {
                name: 'myCookie',
                value: 'cookieValue'
            }
        ]);
        const cookiesByName = await browser.getCookies('myCookie')
        console.log("Cookie set and get ========= ", cookiesByName)
    })
    it('Delete cookies', async () => {
        await browser.url('https://test.dn.no/');
        await browser.pause(3000)
        await browser.setCookies([
            {
                name: 'myCookie',
                value: 'cookieValue'
            }
        ]);
        await browser.deleteCookies(['myCookie']);
        const cookiesByName = await browser.getCookies('myCookie')
        console.log("Cookie set and get ========= ", cookiesByName)
    })




    it('Execute Js in browser', async () => {
        await browser.url('https://test.dn.no/auth/user/login?target=%2F');
        await browser.pause(10000)

        const localStorageData = await browser.execute(() => {
            console.log("I am in browser")
        });
        await browser.pause(25000)
    })
    it('should change the background color of an element', async () => {
        // Open the desired URL
        await browser.url('https://playwright-practice.netlify.app/');

        // Execute JavaScript in the browser context to change the background color of an element
        await browser.execute(() => {
            // This code runs in the browser context
            const element = document.querySelector('h1');
            element.style.backgroundColor = 'yellow';
        });
        await browser.pause(10000)
        //document.querySelector('h1').style.backgroundColor = "Green"
    });
    it('should get the text content of an element', async () => {
        // Open the desired URL
        await browser.url('https://playwright-practice.netlify.app/');

        // Execute JavaScript in the browser context to get the text of an element
        const elementText = await browser.execute(() => {
            // This code runs in the browser context
            const element = document.querySelector('h1');
            return element.textContent;
        });

        // Log the result to the console
        console.log('Element text is: ' + elementText);
        // document.querySelector('h1').textContent
    });
    it('should execute JavaScript in the browser context', async () => {
        // Open the desired URL
        await browser.url('https://playwright-practice.netlify.app/');

        // Execute JavaScript in the browser context
        const result = await browser.execute(() => {
            // This code runs in the browser context
            const title = document.title;
            return title;
        });

        // Log the result to the console
        console.log('Page title is: ' + result);
        // document.title
    });

    it('Local storage data', async () => {
    await browser.url('https://test.dn.no/auth/user/login?target=%2F');
    await browser.pause(20000)
    const username = await $('input[name="username"]')
    const password = await $('input[name="password"]')
    const loginBtn = await $('button[type="submit"]')
    await username.setValue("e6@dn.no")
    await browser.pause(500)
    await password.setValue("123456")
    await browser.pause(500)
    await loginBtn.click()
    await browser.pause(10000)
    const localStorageData = await browser.execute(() => {
        const valuee = localStorage.getItem('user_consent');
        return valuee

    });
    console.log("Local storage value ============== ", localStorageData);

    console.log(JSON.parse(atob('eyJkaXNhYmxlUGVyc29uYWxDdXN0b21lclNlcnZpY2UiOiB0cnVlLCAiZGlzYWJsZVJlbGV2YW50TmV3cyI6IHRydWUsICJkaXNhYmxlUmVsZXZhbnRPZmZlcnMiOiB0cnVlLCAiZGlzYWJsZVRyYWNraW5nIjogdHJ1ZSwgImRpc2FibGVUYXJnZXRlZEFkcyI6IHRydWV9')))
    })

    it('get console data', async () => {
    await browser.url('https://test.dn.no/auth/user/login?target=%2F');
    await browser.pause(20000)
    const username = await $('input[name="username"]')
    const password = await $('input[name="password"]')
    const loginBtn = await $('button[type="submit"]')
    await username.setValue("e6@dn.no")
    await browser.pause(500)
    await password.setValue("123456")
    await browser.pause(500)
    await loginBtn.click()
    await browser.pause(10000)
    const consoleData = await browser.execute(() => {
        const valuee = _satellite.getVar('pdSettings')
        return valuee

    });
    console.log("Local storage value ============== ", consoleData);

    console.log(JSON.parse(atob('eyJkaXNhYmxlUGVyc29uYWxDdXN0b21lclNlcnZpY2UiOiB0cnVlLCAiZGlzYWJsZVJlbGV2YW50TmV3cyI6IHRydWUsICJkaXNhYmxlUmVsZXZhbnRPZmZlcnMiOiB0cnVlLCAiZGlzYWJsZVRyYWNraW5nIjogdHJ1ZSwgImRpc2FibGVUYXJnZXRlZEFkcyI6IHRydWV9')))
    })

    it('Lets Understand Debugger First', async () => {
        // lets understand first how for loop works
      for (let i = 1; i <= 10; i++) {
        console.log("I value right now is = ", i)
      }
    })
    it('Lets see debugger in UI test', async () => {

        await browser.url('https://test.dn.no/auth/user/login?target=%2F');
        await browser.pause(5000)
        const username = await $('input[name="username"]')
        const password = await $('input[name="password"]')
        const loginBtn = await $('button[type="submit"]')
        await username.setValue("e6@dn.no")
        await browser.pause(500)
        await password.setValue("123456")
        await browser.pause(500)
        await loginBtn.click()
        await browser.pause(10000)
    })























    it.only('wait for element to be displayed', async () => {
        // await browser.url('http://127.0.0.1:5500/demo.html');
        await DummyPage.goToDummyPAge()
        await browser.pause(1000)
        const delayedMesgButton = await $('#delayed-message-btn')
        await delayedMesgButton.click()
        const delayedMessageElm = await $('#delayedMessage')
        await delayedMessageElm.waitForDisplayed({timeout: 18000})
        const messagetext = await delayedMessageElm.getText()
        console.log("Teh delayed message text is === ",messagetext)
    })


    it('custom command', async () => {
        await browser.url('http://127.0.0.1:5500/demo.html');
        await browser.pause(1000)
        await browser.clickAndSetValue('#inputField',"Graduation is a waste of time and energy")
        await browser.pause(2000)
        const message = await browser.clickWaitAndGetMessage('#delayed-message-btn','#delayedMessage')
        await browser.pause(2000)
        console.log("================================",message)
    })

});