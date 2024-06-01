
class DragandDrop {

    // properties/elements

    get theButtonIwantToDrag() {
        return $("#drag_source")
    }
    get thePlaceIwantToDrop() {
        return $("#drop_target")
    }

    get mouseClickArea() {
        return $("#click_area")
    }

    get languageButton () {
        return $("button=Choose Language")
    }


    // behavior / action
    async goToDragandDropPage () {
        await browser.url('https://play1.automationcamp.ir/mouse_events.html')
    }

    async dragTheButtonAndDropInsideTheDiv() {
        const dragElement = await this.theButtonIwantToDrag
        const dropTarget = await this.thePlaceIwantToDrop
        dragElement.scrollIntoView()
        await browser.pause(3000)
        dragElement.dragAndDrop(dropTarget)
    }

    async click50pxLeftAndTop45px() {
        const area = await this.mouseClickArea
        await area.moveTo(100,80)
        await area.click()
        await browser.pause(3000)
    }

    async hoverOverTheLanguageButton () {
        (await this.languageButton).moveTo()
        await browser.pause(3000)
    }

}

export default new DragandDrop();

// slect
// ---- java 
// -- python
