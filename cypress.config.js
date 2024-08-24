const { defineConfig } = require('cypress');

// Define the Cypress configuration
module.exports = defineConfig({
  retries: {            
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // For Mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      // Include custom commands
      require('./cypress/support/commands');
    },
    env: {
      baseURL: 'https://docs.cypress.io/',
    },
    projectId: '87yqm7',
  },
  pageLoadTimeout: 7000,    
  viewportHeight: 1080,    
  viewportWidth: 1920,   
  reporter: 'cypress-mochawesome-reporter', 
  reporterOptions: { 
    charts: true,
    reportPageTitle: 'Option 2 report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  video: false, 
  screenshotOnRunFailure: false, 
});

