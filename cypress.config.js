const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nnsfu4",
  e2e:{
      baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com",
      Username: "gromova_student",
      Password: "Qwerty123!",
      video: true,
      defaultCommandTimeout: 100000,
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
      // можно логин пароль сделать так:
      // env: {
        // Username: "gromova_student",
      // Password: "Qwerty123!"
// }  и в тест добавить cy.signIn(Cypress.env('login'), Cypress.env('password'))
      }
    },

});

