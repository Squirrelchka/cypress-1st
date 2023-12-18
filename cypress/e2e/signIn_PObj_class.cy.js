import { faker } from '@faker-js/faker';
import { ResetPassword } from "../page/signIn.js_pageObj";
const signInSelectorElements = require("../fixtures/pages/signInSelector.json");
const textDataSignIn = require("../fixtures/signIn_text.json");
describe("SignIn tests", () => {
  it("click on Account  link", () => {
    cy.visit("/?page=1&sort=id,asc");
    cy.contains("Account").click();
    const accMenu = "[data-cy=accountMenu]";
    const login = "[data-cy=login]";
    cy.accountLink(accMenu, login);
    cy.url().should("include", "/login");
  });

  beforeEach(() => {
    cy.visit("/login");
  });
  
  it("h5 be visible", () => {
    cy.get("#login-title").should("have.text", "Sign in");
  });
  it("login field", () => {
    cy.get(
      "#login-page > div > form > div.modal-body > div.row > div:nth-child(2) div"
    ).should("have.length", 3);
  });
  it("checking input fields", () => {
    textDataSignIn.forEach((data) => {
      cy.get("#username").clear().type(data.username); //clear подчищает предыдущие значения
      cy.get("#password").clear().type(data.password);
      cy.get("#rememberMe").click();
      cy.get("[data-cy=submit]").click();
    });
  });

  it("user cannot sign in with old password", () => {
    const Username = Cypress.config("Username");
    const Password = Cypress.config("Password");
    let newPassword = faker.internet.password();//генирируем новый пароль,4 characters
    // let newPassword = "12345";
    let resetPassword = new ResetPassword ();
    cy.signIn(Username, Password);
    // cy.get("#username").type(Username);добавлено в костомн.ком
    // cy.get("#password").type(Password);
    // cy.get("[data-cy=submit]").click();
    const accMenu = "[data-cy=accountMenu]";
    const passwordlink = "[data-cy=passwordItem]";
    cy.contains("Account").click();
    cy.accountLink(accMenu, passwordlink);
    
    resetPassword.inputPassword(Password, newPassword, newPassword);//исп. классы
    // cy.get("#currentPassword").type(Password);
    //   cy.get("#newPassword").type(newPassword);
    //   cy.get("#confirmPassword").type(newPassword);
    //   cy.get("#password-form > button").click();
    cy.logout();
    //   cy.contains("Account").click();
    // const accMenu = "[data-cy=accountMenu]";
    // const logoutlink = "[data-cy=logout]";
    // cy.accountLink(accMenu, logoutlink);
    cy.visit("/login");
    cy.signIn(Username, Password);
    // cy.get("#username").type(Username);
    // cy.get("#password").type(Password);
    // cy.get("[data-cy=submit]").click();
    cy.get("[data-cy=loginError]").type(
      "Failed to sign in! Please check your credentials and try again"
    );
    cy.get("#username").clear().type(Username);
    cy.get("#password").clear().type(newPassword);
    cy.get("[data-cy=submit]").click();
    //cy.changePassword(newPassword, Password, Password);
    cy.contains("Account").click();
    // const passwordlink = "[data-cy=passwordItem]";
    cy.accountLink(accMenu, passwordlink);
    resetPassword.inputPassword(newPassword, Password, Password);
    cy.logout();
  });

  it("click register a new account", () => {
    cy.get(
      "#login-page > div > form > div.modal-body > div:nth-child(4) > a"
    ).click();
    cy.url().should("include", "/account/register");
  });
  it("forget password", () => {
    cy.get("[data-cy=forgetYourPasswordSelector]").click();
    cy.get("#email").type("gromova_teacher@eicb.ru");
    cy.contains("Reset password").click();
    cy.url().should("include", "/account/reset/request");
  });
});
