describe('Practising diffirent element and action', () => {
    // it("should got to heralko button page and click on the add element button ", async ()=>{
        // await browser.maximizeWindow();
    //     await browser.url("https://the-internet.herokuapp.com/add_remove_elements/")
    //     await browser.pause(3000)
    //     //const addButton = await $('button[onclick="addElement()"]')
    //     //const addButton = await $('button=Add Element')
    //     //const addButton = await $('//button[contains(text(),"Add Element")]')
    //     const addButton = await $('//button[text()="Add Element"]')
    //     await addButton.click();
    //     // await addButton.click({ button: 'right' });
    //     // await addButton.click({ button: 'right' });
    //     await browser.pause(3000)

    // })
    // it("should click on the delete button", async ()=>{
    //     const deleteButton =  await $('button=Delete')
    //     await deleteButton.click()
    //     await browser.pause(3000)
    // })
    // it("should double click on add and then right click on the element", async() => {
    //     const addButton = await $('//button[text()="Add Element"]')
    //     addButton.doubleClick()
    //     await browser.pause(3000)
    // })
    // it("should click on the Element Selenium Link", async() => {
    //     const elementalSeleniumLink = await $('a=Elemental Selenium')
    //     elementalSeleniumLink.click()
    //     await browser.pause(5000)
    // })
    it("should scroll down and scrollup", async() =>{
        await browser.url("https://demoqa.com/elements")
        await browser.pause(3000)
        const topElement = await $('//span[contains(text(),"Text Box")]')
        const bookApplicationBtn = await $$('//span[@class="pr-1"]')[5]

        await bookApplicationBtn.scrollIntoView()
        await browser.pause(3000)
        await topElement.scrollIntoView()
        await browser.pause(3000)

    })

    // it("Keyboard action", async () => {
    //         await browser.url("https://play1.automationcamp.ir/keyboard_events.html")
    //         await browser.pause(3000)
    //         // const textArea = await $('#area')
    //         // textArea.click()
    //         // await browser.pause(2000)
    //         await browser.keys(['Control','a'])
    //         await browser.pause(2000)
    // })

})