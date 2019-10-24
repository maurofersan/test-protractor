const capabilities = require('./capabilities.js');

exports.config = {
    framework: 'jasmine',
    seleniumServerJar: 'node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
    chromeDriver: 'node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_76.0.3809.68.exe',
    suites: {
        login: ['testsJs/tests/spec.js'],
    },
    multiCapabilities: capabilities.multiCapabilities
};


