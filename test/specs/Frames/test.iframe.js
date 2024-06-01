
import FramePage from  '../../pageobjects/frames.page.js'


describe('Iframe practice page', () => {

    it('should move to the frame 1 and click button 1', async () => {
        await FramePage.gotoFramePage();
        await browser.pause(2000)
        await FramePage.moveToFrame_1_Clickbtn_1()
        await browser.pause(2000)
    })

    it('should move to frame 4 and click on button 3', async () => {
        await FramePage.moveToFrame_2_Clickbtn_2()
        await browser.pause(2000)
    })

})

