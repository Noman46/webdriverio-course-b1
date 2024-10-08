export default () => {
    browser.addCommand("clickAndSetValue", async function (selector, value) {
        const element = await $(selector);
        await element.click();
        await element.setValue(value);
    });

    browser.addCommand("clickWaitAndGetMessage", async function (btnSelector, msgSelector) {
        const element = await $(btnSelector)
        const msgElement = await $(msgSelector)
        await element.click()
        await msgElement.waitForDisplayed({ timeout: 20000 })
        const msgText = msgElement.getText()
        return msgText
    })
    browser.addCommand("yourCommandname", async function (element) {
        // Function implementation
    })
    
    browser.addCommand("waitThenClick", async function (selector) {
       const element = await $(selector)
       await element.waitForClickable({timeout:1200000})
       await element.click()
    })

};