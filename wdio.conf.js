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

    ],
    suites: {
        login: [
           
            './test/specs/Login/test-login.js'

        ],
        otherFeature: [
            // ...
        ]
    },




    exclude: [
        // 'path/to/excluded/files'
    ],

    before: function (capabilities, specs) {
        browser.maximizeWindow();
    },

    maxInstances: 10,
    logLevel: 'error',
    bail: 0,
    capabilities: [{
        browserName: 'chrome'
    }],
    waitforTimeout: 40000,
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
