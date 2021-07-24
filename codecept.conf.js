const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
        url: 'https://devportal.askia.com/AskiaPortal/SignIn/',
        show: true,
        windowSize: '1920x1080',
        waitForNavigation: "networkidle0",
        waitForAction: 3000,
        waitForTimeout: 3000    
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'automation-tests-demo',
  plugins: {     
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
        enabled: true
    }    
  }
}