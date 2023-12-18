import { faker } from "@faker-js/faker";
import { ResetPassword } from "../page/signIn.js_pageObj";
const signInSelectorElements = require("../fixtures/pages/signInSelector.json");

describe("SignIn tests UI and API", () => {
  let newPassword = faker.internet.password();
  const Username = Cypress.config("Username");
  const Password = Cypress.config("Password");
  const accMenu = "[data-cy=accountMenu]";
  const passwordlink = "[data-cy=passwordItem]";
  let resetPassword = new ResetPassword ();


  it("user cannot sign in with old password", () => {
    cy.visit("/login");
    cy.signIn(Username, Password);
    cy.contains("Account").click();
    cy.accountLink(accMenu, passwordlink);
   resetPassword.inputPassword(Password, newPassword, newPassword);
    cy.logout();
    cy.visit("/login");
    cy.signIn(Username, Password);
    cy.get("[data-cy=loginError]").type(
      "Failed to sign in! Please check your credentials and try again"
    );
    cy.get("#username").clear().type(Username);
    cy.get("#password").clear().type(newPassword);
    cy.get("[data-cy=submit]").click();
    cy.contains("Account").click();
    cy.accountLink(accMenu, passwordlink);
    cy.get(signInSelectorElements.currentPasswordField).type(newPassword);
    cy.get(signInSelectorElements.newPasswordField).type(Password);
    cy.get(signInSelectorElements.confirmPasswordField).type(Password);
    cy.get(signInSelectorElements.buttonField).click();
    cy.logout();
  });

  it("user cannot login with old password -UI", () => {});
  

it("user cannot login with old password -API,UI", () => {
   cy.request({
    method: "POST",
    url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/account/change-password",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJncm9tb3ZhX3RlYWNoZXIiLCJleHAiOjE3MDU1MTkzNzUsImF1dGgiOiJST0xFX1VTRVJfVEVBQ0hFUiIsImlhdCI6MTcwMjkyNzM3NX0.sJ9nOOXqeFJ9p7jl9x1Q97-6YGNj38cH058ef7JgN6H4d2C2DD9QCGRiZ5dU6aE15TxH76W5UCv7OVnAB2jriA",
    },
    body: {
      currentPassword: Password,
      newPassword: newPassword
    }
  }).then((response) => { //проверяем ответ
expect(response.status).to.equal(200)
});
cy.visit("/login");
cy.signIn(Username, newPassword);
cy.contains("Account").click();
cy.accountLink(accMenu, passwordlink);
resetPassword.inputPassword(newPassword, Password, Password);
cy.logout();
});
})
