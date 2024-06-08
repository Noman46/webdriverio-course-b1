
class Utility {

    async getCurrentTimeInSeconds() {
        return Math.floor(new Date().getTime() / 1000);
    }

    async takeScreenShotAsProof(asserTionDetails) {
        console.log("=============== Assertion details", asserTionDetails.result.pass)
        let result = asserTionDetails.result.pass
        if(result === false){
            let curretTime =  Math.floor(Math.random() * 10)
            browser.saveScreenshot(`./screenshots/${curretTime}-bug-image.png`)  
        }
        else 
        console.log("kajsdkjankd")

    }

}

export default new Utility();



