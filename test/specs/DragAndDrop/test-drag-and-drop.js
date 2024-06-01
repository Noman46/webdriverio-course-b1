
import DragNadDrop from "../../pageobjects/dragAndDrop.page.js"


describe('Drag and Drop Practice', () => {

    it('should click on selected area by pixel', async () => {
        await DragNadDrop.goToDragandDropPage()
        await browser.pause(3000)
        await DragNadDrop.click50pxLeftAndTop45px()
        await browser.pause(5000)
    })
    it('should mouse hover on the language button', async () => {
        await browser.pause(3000)
        await DragNadDrop.hoverOverTheLanguageButton()
        await browser.pause(5000)
    })
    // it('should drag the button and drop inside the div', async () => {
    //     await DragNadDrop.goToDragandDropPage()
    //     await browser.pause(3000)
    //     await DragNadDrop.dragTheButtonAndDropInsideTheDiv()
    //     await browser.pause(5000)
    // })
})

