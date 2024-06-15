const env = process.env.npm_config_testSite  || 'default';



export const config = {

    runner: 'local',

    specs: [
        //  './test/specs/**/test-locators.js'
        // './test/specs/**/test-class-practise.js'
        //  './test/specs/**/test-element-practice.js'
        //'./test/specs/**/test-class-4-element-practice.js'
        // './test/specs/**/test-login-playauto.js',
        // './test/specs/DragAndDrop/test-drag-and-drop.js',
        // './test/specs/Frames/test.iframe.js'
        // './test/specs/DropDown/test-drop-down.js'
        // './test/specs/**/letcodeLoginPage_test.js'
        //'./test/specs/**/test.assertion.js',
         './test/specs/**/test.testdata.js'

    ],

    suites: {
        login: [
            './test/specs/Login/test-login.js',
            './test/specs/Login/test-loginfrom-article.js',

        ],
        payment: [
            './test/specs/Payment/payment-1.js',
        ],
        regression: [
            './test/specs/Login/test-login.js',
            './test/specs/Login/test-loginfrom-article.js',
            './test/specs/Payment/payment-1.js',
        ]
    },

    exclude: [

    ],

    before: function (capabilities, specs) {
        console.log(process.env.PATH);
        console.log("===================", env)
        browser.maximizeWindow();
    },


    logLevel: 'error',
    bail: 0,
    capabilities: [
        {
            maxInstances: 3,
            browserName: 'chrome',
            acceptInsecureCerts: true
        },
        // {
        //     maxInstances: 1,
        //     browserName: 'firefox',
        //     acceptInsecureCerts: true
        // }
    ],
    waitforTimeout: 12000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],

    framework: 'mocha',

    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    baseUrl: 'http://localhost'
}
