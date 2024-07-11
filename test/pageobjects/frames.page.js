
class Frames {

    // properties/elements
    get button_1_frame_1() {
        return $("#click_me_1")
    }
    get button_2_frame_2() {
        return $("#click_me_2")
    }
    get button_3_frame_4() {
        return $("#click_me_4")
    }
    get iFrame_1 () {
        return $("#frame1")
    }
    get iFrame_2 () {
        return $("#frame2")
    }
    get iFrame_3 () {
        return $("#frame3")
    }
    get iFrame_4 () {
        return $("#frame4")
    }

    // behavior / action
    async gotoFramePage () {
        await browser.url('https://play1.automationcamp.ir/frames.html')
    }
    async clickButton_1 (){
        const button = await this.button_1_frame_1
        await button.click()
    }
    async clickButton_2 (){
        const button = await this.button_2_frame_2
        await button.click()
    }
    async moveToFrame_1_Clickbtn_1 () {
        const frame_1 = await this.iFrame_1;
        await browser.switchToFrame(frame_1)
        await browser.pause(2000)
        await this.clickButton_1();
    }
    async moveToFrame_2_Clickbtn_2 () {
        const frame_2 = await this.iFrame_2;
        await browser.switchToFrame(frame_2)
        await browser.pause(2000)
        await this.clickButton_2();
        await browser.pause(2000)
    }
}

export default new Frames();
