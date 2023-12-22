import { faker } from "@faker-js/faker";
import { ResetPassword } from "../page/signIn.js_pageObj";
describe("SignIn tests", () => {
  
  beforeEach(() => {
    cy.visit("/login");
  });

    it("user cannot sign in with old password", () => {
    const Username = Cypress.config("Username");
    const Password = Cypress.config("Password");
    let newPassword = faker.internet.password(); 
    let resetPassword = new ResetPassword();
    cy.get("#username").type(Username);
    cy.get("#password").type(Password);
    cy.get("[data-cy=submit]").click();
    cy.contains("Account").click();
    cy.get("[data-cy=accountMenu]").find("[data-cy=passwordItem]").click();
    resetPassword.inputPassword(Password, newPassword, newPassword); 
    cy.contains("Account").click();
    cy.get("[data-cy=accountMenu]").find("[data-cy=logout]").click();
    cy.visit("/login");
    cy.get("#username").type(Username);
    cy.get("#password").type(Password);
    cy.get("[data-cy=submit]").click();
    cy.get("[data-cy=loginError]").type(
      "Failed to sign in! Please check your credentials and try again"
    );
    cy.get("#username").clear().type(Username);
    cy.get("#password").clear().type(newPassword);
    cy.get("[data-cy=submit]").click();
    cy.contains("Account").click();
    cy.get("[data-cy=accountMenu]").find("[data-cy=passwordItem]").click();
    resetPassword.inputPassword(newPassword, Password, Password);
    cy.contains("Account").click();
    cy.get("[data-cy=accountMenu]").find("[data-cy=logout]").click();
  });
 });
