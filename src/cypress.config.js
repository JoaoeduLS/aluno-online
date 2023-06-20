const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rzb9e7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
