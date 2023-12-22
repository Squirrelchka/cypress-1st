import { faker } from '@faker-js/faker';
// const signInSelectorElements = require("../fixtures/pages/signInSelector.json");
describe("SignIn tests", () => {
    beforeEach(() => {
    cy.visit("/login");
  });
  
   it("user cannot sign in with old password", () => {
    const Username = Cypress.config("Username");
    const Password = Cypress.config("Password");
    let newPassword = faker.internet.password();
    cy.signIn(Username, Password);
    cy.selectorChangePassword(Password, newPassword, newPassword);
    cy.logout();
    cy.visit("/login");
    cy.signIn(Username, Password);
    cy.get("[data-cy=loginError]").type(
      "Failed to sign in! Please check your credentials and try again"
    );
    cy.clearInputField(Username, newPassword);
    cy.selectorChangePassword(newPassword, Password, Password);
      });
  });