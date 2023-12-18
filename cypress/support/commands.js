// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('accountLink', (menuSelector, linkSelector) => { 
    cy.get(menuSelector).find(linkSelector).click(); 
});
Cypress.Commands.add("changePassword", (currentPassword, newPassword, confirmPassword) => {
    const accMenu = "[data-cy=accountMenu]";
    const passwordlink = "[data-cy=passwordItem]";
    cy.contains("Account").click();
    cy.accountLink(accMenu, passwordlink);
    cy.get("#password-title > span").should("have.text", "Password for [gromova_student]");
    cy.get("#currentPassword").type(currentPassword);
    cy.get("#newPassword").type(newPassword);
    cy.get("#confirmPassword").type(confirmPassword);
    cy.get("#password-form > button").click();
  });
Cypress.Commands.add('signIn', (Username, Password) => {
cy.get("#username").type(Username);
    cy.get("#password").type(Password);
    cy.get("[data-cy=submit]").click();
})
Cypress.Commands.add("logout", () => {
    const accMenu = "[data-cy=accountMenu]";
    const logoutlink = "[data-cy=logout]";
    cy.contains("Account").click();
    cy.accountLink(accMenu, logoutlink);
  });
