exports.config = {
    seleniumAddresss: 'http://localhsot:4444/wd/hub',
    specs: ['./patients/*.spec.js' ], //,'./pageObjects/*.spec.js', './registration/*.spec.js'
    capabilities: {
        'browserName': 'chrome'
    },

    suites: {
        patients: '/patients/*.spec.js' 
    },
    onPrepare: function() {
        browser.driver.manage().window().setPosition(0,0);
        browser.driver.manage().window().setSize(1280, 720);
    },
    jasmineNodeOpts: {
        showColors:true
    }
};