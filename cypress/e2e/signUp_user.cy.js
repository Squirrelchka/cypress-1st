const textData = require("../fixtures/signUp_text.json");
describe("SignUp tests", () => {
  it("Click on Account  link", () => {
    cy.visit("/?page=1&sort=id,asc");
    cy.contains("Account").click();
    const accMenu = "[data-cy=accountMenu]";
    const register = "[data-cy=register]";
    cy.accountLink(accMenu, register);
    cy.url().should("include", "/account/register");
  });

  beforeEach(() => {
    cy.visit("/account/register");
  });

  it("h1 be visible", () => {
    cy.get("#register-title").should("have.text", "Registration");
  });
  it("Registrations field", () => {
    cy.get("#register-form div").should("have.length", 5);
  });
  it("checking input fields", () => {
    textData.forEach((data) => {
      cy.get("#username").clear().type(data.username);
      cy.get("#email").clear().type(data.email);
      cy.get("#firstPassword").clear().type(data.firstPassword);
      cy.get("#secondPassword").clear().type(data.secondPassword);
      cy.get("#register-submit").click();
    });
  });
  it("Click signIn", () => {
    cy.contains("sign in").click();
    cy.url().should("include", "/login");
  });
});
