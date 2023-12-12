const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nnsfu4",
  e2e:{
      baseUrl: "https://sqlverifier-staging-08050d656f7a.herokuapp.com",
      Username: "gromova_teacher",
      Password: "Qwerty123!",
      video: true,
      defaultCommandTimeout: 100000,
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },

});
