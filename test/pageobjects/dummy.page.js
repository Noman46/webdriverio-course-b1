
class DummyPage {

    // properties/elements

    get theButtonIwantToDrag() {
        return $("#drag_source")
    }



    // behavior / action
    async goToDummyPAge () {
        await browser.url('http://127.0.0.1:5500/demo.html')
    }


}

export default new DummyPage();

