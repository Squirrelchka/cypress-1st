const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "nnsfu4",
    e2e: {
      baseUrl: 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/',
      Username: "gromova_student",
      Password: "Qwerty123!",
      video: true, 
      setupNodeEvents(on, config) {
        // implement node event listeners here
      }
    }, 
});

