//<reference types="cypress" />

describe("home page", () => {
  beforeEach(() => {
    cy.visit("/?page=1&sort=id,asc");
  });
  it("page loading check", () => {
    cy.get(".brand-title").should("have.length", 1);
  });
  it("page loading check", () => {
    cy.get("h2").debug().should("be.visible");
  });
});
