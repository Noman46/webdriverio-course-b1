const env = process.env.npm_config_testSite || 'default';
import CustomCommands from './test/commands.js'
import fs from 'fs';
import path from 'path';
import slack from 'wdio-slack-service';
import SlackReporter from '@moroo/wdio-slack-reporter';



export const config = {
    runner: 'local',

    specs: [
        //'./test/specs/Mock/test.mock.prac.js'
        './test/specs/test.report.practice.js'
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

    mochaOpts: {
        ui: 'bdd',
        timeout: 6000000,
        retries: 2,
    },

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    baseUrl: 'http://localhost',
    framework: 'mocha',

    logLevel: 'error',
    bail: 0,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            // acceptInsecureCerts: true,
            // 'goog:chromeOptions': {
            //     args: ['headless', 'disable-gpu']
            // }

        },
        // {
        //     maxInstances: 1,
        //     browserName: 'firefox',
        //     acceptInsecureCerts: true
        // }
    ],
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
        //     webHookUrl: "your webhook", // Used to post notification to a particular channel
        //     notifyOnlyOnFailure: false, // Send notification only on test failure
        //     messageTitle: ":heavy_check_mark: Snyk learning report from WebdriverIO :100: :tada:" // Name of the notification
        // }]
    ],
    before: function (capabilities, specs) {
        // console.log(process.env.PATH);
        // console.log("===================", env)
        CustomCommands();
        browser.maximizeWindow();
        const allureReportPath = path.join(process.cwd(), 'allure-report');
        if (fs.existsSync(allureReportPath)) {
            fs.rmdirSync(allureReportPath, { recursive: true });
        } else {
            console.log('Folder allure report does not exist');
        }
        const allureResultPath = path.join(process.cwd(), 'allure-results');
        if (fs.existsSync(allureResultPath)) {
            fs.rmdirSync(allureResultPath, { recursive: true });
        } else {
            console.log('Folder allure result does not exist');
        }
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            // Take screenshot
            const screenshot = await browser.takeScreenshot();
            // Attach screenshot to Allure report
            allure.addAttachment('Screenshot on Failure', Buffer.from(screenshot, 'base64'), 'image/png');
        }
    },
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


