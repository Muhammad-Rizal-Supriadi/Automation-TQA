const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ybdk7p",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "https://automationteststore.com/",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    env:{
      baseUrl: "https://automationteststore.com/",
    }
  },
});
