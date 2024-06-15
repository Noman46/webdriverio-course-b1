describe('Mock Request Example', () => {
    // it('should mock a request to JSONPlaceholder', async () => {

    //     await browser.url('https://jsonplaceholder.typicode.com/');


    //     const mock = await browser.mock('**/todos/1', {
    //         method: 'get'
    //     });

    //     mock.respond({
    //         "userId": 1,
    //         "id": 1,
    //         "title": "AMI ASI BAR wewqeqweqweNAI",
    //         "completed": false
    //       }, {
    //         statusCode: 304,
    //         headers: { 'Content-Type': 'application/json' }
    //     });
    //     const runbutton = await $('#run-button')
    //     await runbutton.scrollIntoView()
    //     await browser.pause(3000)
    //     await runbutton.click()
    //     await browser.pause(3000)

        
    // });

    // it('should mock a request and send us joke', async () => {
    //     await browser.url('https://jokeapi.dev/');


    //     const mock = await browser.mock('https://v2.jokeapi.dev/joke/Any', {
    //         method: 'get'
    //     });


    //     mock.respond({
    //         "error": false,
    //         "category": "Programming",
    //         "type": "single",
    //         "joke": "You do not need to know programing to be a good automation engineer, Really Ha ha ha ha ha ha",
    //         "flags": {
    //             "nsfw": false,
    //             "religious": false,
    //             "political": false,
    //             "racist": false,
    //             "sexist": false,
    //             "explicit": false
    //         },
    //         "id": 51,
    //         "safe": true,
    //         "lang": "en"
    //     }
    //       , {
    //         statusCode: 200,
    //         headers: { 'Content-Type': 'application/json' }
    //     });


    //     const sendRequestButton = await $('//button[contains(text(),"Send Request >")]')
    //     await sendRequestButton.scrollIntoView()
    //     await browser.pause(3000)
    //     await sendRequestButton.click()
    //     await browser.pause(3000)

        
    // });

    it('should mock a request and send us joke', async () => {
        await browser.url('https://play1.automationcamp.ir/register.html');

        const mock = await browser.mock('https://play1.automationcamp.ir/confirmation.html', {
            method: 'get'
        });
        

        const htmlResponse = `
            <html>
                <body>
                    <h1>Mocked HTML Content</h1>
                    <p>This is a mocked HTML response.</p>
                </body>
            </html>
        `;

        mock.respond(htmlResponse, {
            statusCode: 200,
            headers: { 'Content-Type': 'text/html' }
        });
        
        const firatName = await $('input[name="first_name"]');
        const lastname = await $('input[name="last_name"]');
        const email = await $('input[name="email"]');
        const password = await $('input[name="password"]');
        const confirmPassword = await $('input[name="confirm_password"]');
        const checkBox = await $('input[name="terms"]');
        const registerBtn = await $('#submit_button')


        await firatName.setValue("Noman")
        await lastname.setValue("Ibrahim")
        await email.setValue("Ibrahim@mail.com")
        await password.setValue("123456")
        await confirmPassword.setValue("123456")
        await checkBox.click()
        await registerBtn.click()


        await browser.pause(3000)
        await browser.pause(3000)
    });
});