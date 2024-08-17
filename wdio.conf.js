
export const config = {
    runner: 'local',

    specs: [
     
        './test/specs/**/test-login-playauto.js',


    ],


    exclude: [
        // 'path/to/excluded/files'
    ],

    before: function (capabilities, specs) {
        browser.maximizeWindow();
    },

    maxInstances: 1,
    logLevel: 'debug',
    bail: 0,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--headless',
                '--disable-dev-shm-usage',
                '--disable-gpu'
            ]
        }
    }],
    waitforTimeout: 10000,
    connectionRetryTimeout: 12000,
    connectionRetryCount: 3,

    baseUrl: '',
    framework: 'mocha',

    logLevel: 'error',
    bail: 0,
    // capabilities: [
    //     {
    //         maxInstances: 1,
    //         browserName: 'chrome',
    //         // acceptInsecureCerts: true,
    //         // 'goog:chromeOptions': {
    //         //     args: ['headless', 'disable-gpu']
    //         // }

    //     },
    //     // {
    //     //     maxInstances: 1,
    //     //     browserName: 'firefox',
    //     //     acceptInsecureCerts: true
    //     // }
    // ],
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }],
        // [
        //     SlackReporter,
        //     {
        //         slackOptions: {
        //             type: 'web-api',
        //             channel: 'C06RY8B282D',
        //             slackBotToken: 'your bot token',
        //         },
        //         title: 'Slack Reporter Testdddd',
        //     }

        // ]
    ],

    services: [
        // [slack, {
        //     webHookUrl: "your web hook url", // Used to post notification to a particular channel
        //     notifyOnlyOnFailure: false, // Send notification only on test failure
        //     messageTitle: ":heavy_check_mark: Snyk learning report from WebdriverIO :100: :tada:" // Name of the notification
        // }]
    ],
    // before: function (capabilities, specs) {
    
    //     CustomCommands();
    //     browser.maximizeWindow();
        // const allureReportPath = path.join(process.cwd(), 'allure-report');
        // if (fs.existsSync(allureReportPath)) {
        //     fs.rmdirSync(allureReportPath, { recursive: true });
        // } else {
        //     console.log('Folder allure report does not exist');
        // }
        // const allureResultPath = path.join(process.cwd(), 'allure-results');
        // if (fs.existsSync(allureResultPath)) {
        //     fs.rmdirSync(allureResultPath, { recursive: true });
        // } else {
        //     console.log('Folder allure result does not exist');
        // }
    //},

    // afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    //     if (error) {
    //         // Take screenshot
    //         const screenshot = await browser.takeScreenshot();
    //         // Attach screenshot to Allure report
    //         allure.addAttachment('Screenshot on Failure', Buffer.from(screenshot, 'base64'), 'image/png');
    //     }
    // },
    beforeSuite: function () {
        let a = 30
        let b = 30
        console.log('Before running a suite the value is ', a + b);
    },
    afterSuite: function () {
        let a = 30
        let b = 30
        console.log('After running a suite the value is ', a + b);
    }

    //oncomplte function
}


