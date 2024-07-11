import DummyPage from '../../pageobjects/dummy.page.js'
import { Key } from 'webdriverio'
import { promises as fs } from 'fs';
import * as faker from '@ngneat/falso';
import { endianness } from 'os';
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

    it('Flash message', async () => {
        await browser.url('http://127.0.0.1:5500/demo.html');
        await browser.pause(3000)
        await Signipup.sign
        await browser.waitThenClick("#delayed-message-btn")
        const delayedMessageText = await $('#delayedMessage')
        await delayedMessageText.waitForDisplayed({ timeout: 20000 })
        await expect(delayedMessageText).toBeDisplayed()
    })

    it('wait for element to be displayed', async () => {
        // await browser.url('http://127.0.0.1:5500/demo.html');
        await DummyPage.goToDummyPAge()
        await browser.pause(1000)
        const delayedMesgButton = await $('#delayed-message-btn')
        await delayedMesgButton.click()
        const delayedMessageElm = await $('#delayedMessage')
        await delayedMessageElm.waitForDisplayed({ timeout: 18000 })
        const messagetext = await delayedMessageElm.getText()
        console.log("Teh delayed message text is === ", messagetext)
    })


    it('custom command', async () => {
        await browser.url('http://127.0.0.1:5500/demo.html');
        await browser.pause(1000)
        await browser.clickAndSetValue('#inputField', "Graduation is a waste of time and energy")
        await browser.pause(2000)
        const message = await browser.clickWaitAndGetMessage('#delayed-message-btn', '#delayedMessage')
        await browser.pause(2000)
        console.log("================================", message)
    })










    // document.getElementById('inputField').value = "ksndlskndlks"
    //span[@data-date="2024-6-4"]


    // it.only('Calendar ', async () => {
    //     await browser.url('http://127.0.0.1:5500/claendar.html');
    //     await browser.pause(3000)
    //     const calendarInput = await $("#date-input")
    //     await calendarInput.setValue("1/7/2024")
    //     await browser.pause(3000)
    // })

    // it('Calendar ', async () => {
    //     await browser.url('http://127.0.0.1:5500/claendar.html');
    //     await browser.pause(3000)
    //     const calendarInput = await $("#date-input")
    //     await browser.execute((input) => {input.value = '12/07/2023';}, calendarInput);
    //     await browser.pause(3000)

    // })


    // it.only('Calendar ', async () => {
    //     await browser.url('https://primeng.org/calendar');
    //     await browser.pause(1000)
    //     const calendarInput = await $$("//span/input[@type='text']")
    //     await calendarInput[0].scrollIntoView()
    //     // await calendarInput[0].click()
    //     const isClickable = await calendarInput[0].isClickable()
    //     console.log("================= ",isClickable)
    //     await calendarInput[0].click()
    //     await browser.pause(1000)
    //     await browser.execute((input) => {
    //         input.value = '01/2024';
    //     }, calendarInput[0]);
    //     await browser.pause(2000)
    //     await browser.keys([Key.Enter])
    //     await browser.pause(2000)

    // })

    // it.only('Calendar ', async () => {
    //     await browser.url('https://primeng.org/calendar');
    //     await browser.pause(1000)
    //     const calendarInput = await $$("//span/input[@type='text']")
    //     await calendarInput[13].scrollIntoView()
    //     // await calendarInput[0].click()
    //     const isClickable = await calendarInput[13].isClickable()
    //     console.log("================= ",isClickable)
    //     await calendarInput[13].click()
    //     await browser.pause(1000)
    //     await browser.execute((input) => {
    //         input.value = '01/2024';
    //     }, calendarInput[13]);
    //     await browser.pause(2000)
    //     await browser.keys([Key.Enter])
    //     await browser.pause(2000)

    // })
    // it.only('Calendar ', async () => {
    //     await browser.url('https://primeng.org/calendar');
    //     await browser.pause(1000)
    //     const calendarInput = await $$("//span/input[@type='text']")
    //     await calendarInput[17].scrollIntoView()
    //     // await calendarInput[0].click()
    //     const isClickable = await calendarInput[17].isClickable()
    //     console.log("================= ",isClickable)
    //     // await calendarInput[17].click()
    //     await browser.pause(1000)
    //     await browser.execute((input) => {
    //         input.value = '07/10/2024';
    //     }, calendarInput[17]);
    //     await browser.pause(2000)
    //     await browser.keys([Key.Enter])
    //     await browser.pause(2000)

    // })

    // it.only('Calendar ', async () => {
    //     await browser.url('https://www.globalsqa.com/demo-site/datepicker/');
    //     await browser.pause(1000)
    //     const iframe = await $("//iframe[contains(@data-src,'datepicker/default')]")
    //     await browser.switchToFrame(iframe)
    //     await browser.pause(1000)
    //     const dateFiled = await $("#datepicker")
    //     await browser.execute((input) => {
    //         input.value = '07/10/2024';
    //     }, dateFiled);
    //     await browser.pause(2000)
    //     // await browser.keys([Key.Enter])
    //     await browser.pause(2000)

    // })

    // it.only('Calendar', async () => {
    //     await browser.url('https://www.globalsqa.com/demo-site/datepicker/#DropDown%20DatePicker');
    //     await browser.pause(5000)
    //     const iframe = await $("//iframe[contains(@data-src,'datepicker/dropdown')]")
    //     await browser.switchToFrame(iframe)
    //     await browser.pause(1000)
    //     const dateFiled = await $("#datepicker")
    //     await browser.execute((input) => {
    //         input.value = '07/10/2024';
    //     }, dateFiled);
    //     await browser.pause(2000)
    //     // await browser.keys([Key.Enter])
    //     await browser.pause(2000)
    // })

    // it.only('Table', async function ()  {
    //     await browser.url('http://127.0.0.1:5500/table.html');
    //     await browser.pause(2000)
    //     const firstRow = await browser.$('#employeeTable tbody tr:nth-child(1)');
    //     const id = await firstRow.$('td:nth-child(1)').getText();
    //     console.log("=================== ",id)
    // })



























    // it.only('JSON ', async function ()  {
    //     const jsonString = '{"name":"John", "age":30, "city":"New York"}'
      
    //     const parseObject = JSON.parse(jsonString)
    //     console.log(typeof(parseObject))
      
    //     const stringiFy = JSON.stringify(parseObject)
    //     console.log("The Stringify string  is = ", stringiFy)
    //     console.log(typeof(stringiFy))
    // })

    // it.only('JSON read from file', async function ()  {

    //     const employeeData =  await fs.readFile('employee.json','utf-8')
    //     const employeeDataAfterParse = JSON.parse(employeeData)
    //     console.log(employeeDataAfterParse.salary)

    // })


    // it.only('JSON write to file', async function ()  {

    //     const employeeData =  await fs.readFile('employee.json','utf-8')
    //     const employeeDataAfterParse = JSON.parse(employeeData)
    //     // kono operation code, I goit the access key 
    //     employeeDataAfterParse.acces_key = "exclsdfjlklkfjlasmdkjasbkdjasdbkajbsdkasjhdvjahsvdjasd"
    //     const updateEmployeeData = JSON.stringify(employeeDataAfterParse)
    //     await fs.writeFile('employee.json',updateEmployeeData)
    // })

    // it.only('HTTP Call Get all post and accessing data', async function () {
    //     const getAllPOstURL = "https://jsonplaceholder.typicode.com/posts"
                                  https://jsonplaceholder.typicode.com/posts
    //     try{
    //         const response = await fetch(getAllPOstURL)
    //         const posts = await response.json()
    //         console.log("response is ", posts[1].title)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
        
    // })
    it.only('Get Single Post', async function () {
        const singlePost = "https://api.testmail.app/api/json?apikey=b251e48e-4517-44f8-851d-ace9eda8d054&namespace=riae9&pretty=true"
        try{
            const response = await fetch(singlePost)
            const posts = await response.json()
            console.log("response is ", posts.emails[0].text)
        }
        catch (error) {
            console.log(error)
        }
    })
    // it.only('Create a Post', async function () {
    //     const createPostURL = "https://jsonplaceholder.typicode.com/posts"


    //     const headers = new Headers();
    //     headers.append("Content-Type", "application/json");
      


    //     const bodyData = {
    //         id: 101,
    //         title: 'This is a title',
    //         postName: 'This is a post',
    //         userId: 1
    //       }


    //     const postBody = {
    //         method: "POST",
    //         headers: headers,
    //         body:JSON.stringify(bodyData)
    //     }



    //     try {
    //         const response = await fetch(createPostURL,postBody)
    //         const posts = await response.json()
    //         console.log("response is ", posts)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // })



    // it.only('should throw a custom error when 2 is not equal to 3', () => {
    //     try {
    //         if (2 === 2) {
    //             console.log("Thi will log when passed");
    //         } else {
    //             throw new Error('======== 2 is not equal to 3');
    //         }
    //     } catch (error) {
            
    //         console.error('Custom Error========:', error.message);
    //     }
    //     finally {
    //         console.log(" ============== I will print always")
    //     }
    // });


    // it.only('Faker message', async () => {
    //     const randomAirportname = faker.randAirport()
    //     const randomEmail = faker.randEmail({ length: 10 })
    //     console.log("===============", randomEmail)
    //     console.log("===============", randomEmail[2])
    // })

});








