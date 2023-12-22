import { faker } from "@faker-js/faker";
import { ResetPassword } from "../page/signIn.js_pageObj";
const signInSelectorElements = require("../fixtures/pages/signInSelector.json");

describe("SignIn tests UI and API", () => {
  // let newPassword = faker.internet.password();
  let newPassword = "12345";
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

  
it("user cannot login with old password -API,UI", () => {
   cy.request({
    method: "POST",
    url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/account/change-password",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJncm9tb3ZhX2FkbWluIiwiZXhwIjoxNzAzMDkwMDgwLCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcwMzAwMzY4MH0.fG9F4oxjn0sospoNfJBEHRw15omgSAOwKOGAEZ9m1QQZ--joBCR-KDrSsiC-jJaqpU-ihvxKWnnvorxp0tgHtw",
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
it("user add, change, viewing and delete task -API,UI", () => {
    cy.request({
   method: "POST",
   url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks",
   headers: {
     Authorization:
       "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJncm9tb3ZhX2FkbWluIiwiZXhwIjoxNzAzMDkwMDgwLCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcwMzAwMzY4MH0.fG9F4oxjn0sospoNfJBEHRw15omgSAOwKOGAEZ9m1QQZ--joBCR-KDrSsiC-jJaqpU-ihvxKWnnvorxp0tgHtw",
   },
   body: {
    id: null,
  text: "test",
    answer: "text",
    title: "text"
  }
 }).then((response) => { 
  const taskId = response.body.id;//проверяем ответ
expect(taskId).to.not.be.null;
cy.wrap(taskId).as("taskId");//передает в след проеврку id
});
// });
// it("user change task -API,UI", () => {
    cy.get("@taskId").then((taskId) => {
cy.request({
  method: "PATCH",
  url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks/"+taskId,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJncm9tb3ZhX2FkbWluIiwiZXhwIjoxNzA1NTI4NjkxLCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcwMjkzNjY5MX0.QreSw0P5VdXVyZ-0lFxJ_lZbmF8EEqYV6GYeAhoIhBrbLIgNgyQjDDgBPqRjYhfDwjB3ArEJtIIDJXECREaFpA",
  },
  body:{
    id: taskId,
    text: "hi hi hi",
    answer: "hihihi ",
    title: "hi"
  }
}).then((response) => { 
  expect(response.status).to.equal(200);
});
});
cy.get("@taskId").then((taskId) => {
  cy.request({
    method: "GET",
    url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks/"+taskId,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJncm9tb3ZhX2FkbWluIiwiZXhwIjoxNzA1NTI4NjkxLCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcwMjkzNjY5MX0.QreSw0P5VdXVyZ-0lFxJ_lZbmF8EEqYV6GYeAhoIhBrbLIgNgyQjDDgBPqRjYhfDwjB3ArEJtIIDJXECREaFpA",
    }    
  }).then((response) => { 
    expect(response.body.title).to.equal("hi");
  });
  });
cy.get("@taskId").then((taskId) => {
  cy.request({
    method: "DELETE",
    url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks/"+taskId,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJncm9tb3ZhX2FkbWluIiwiZXhwIjoxNzA1NTI4NjkxLCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcwMjkzNjY5MX0.QreSw0P5VdXVyZ-0lFxJ_lZbmF8EEqYV6GYeAhoIhBrbLIgNgyQjDDgBPqRjYhfDwjB3ArEJtIIDJXECREaFpA",
    }
  }).then((response) => { 
    expect(response.status).to.equal(204);
  });
  });
});
});