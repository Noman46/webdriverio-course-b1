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
        './test/specs/**/test.assertion.js'

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
        // 'path/to/excluded/files'
    ],

    before: function (capabilities, specs) {
        browser.maximizeWindow();
    },

    // maxInstances: 2,
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
