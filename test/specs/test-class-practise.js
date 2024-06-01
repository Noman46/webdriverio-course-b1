describe("Practise on Heroku App to demonstraite varioyus action", () => {

    it("should land on heroku button page", async () =>{

        await browser.url("https://the-internet.herokuapp.com/add_remove_elements/")
        await browser.pause(3000)
    })
    it("hsould get the Add Button Element", async()=>{
        // const addButton = $("button[onclick='addElement()']")
        // get element by text
        const addButtonWithText = $('button=Add Element')
        // await addButtonWithText.click();
        // await addButtonWithText.click({ button: 'right' });
        await browser.pause(3000)

    })
    it("should go to the page and select all the text", async () => {
        await browser.url("https://demoqa.com/elements")
        await browser.pause(3000)
        const bookApplicationBtns = await $$('//span[@class="pr-1"]')[5]

        await bookApplicationBtns.scrollIntoView()
        await browser.pause(3000)


    })



})