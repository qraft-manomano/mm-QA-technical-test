const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    webdriver: {
      url: "http://www.demoblaze.com",
      browser: 'chrome',
      restart: false,
      smartWait: 5000,
      windowSize: '1200x888',
      desiredCapabilities: {
        chromeOptions: {
          args: [
            /* "--headless", */
            '--disable-gpu',
            '--no-sandbox',
            '--enable-features=NetworkService,NetworkServiceInProcess',
            '--disable-dev-shm-usage',
          ],
        },
      },
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'techtest',
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
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
      outputDir: './output',
    }
  }
}