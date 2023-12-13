
describe("Header tests", () => {
  beforeEach(() => {
    const Username = Cypress.config("Username");
    const Password = Cypress.config("Password");
    cy.visit("/login");
    cy.get("#username").type(Username);
    cy.get("#password").type(Password);
    cy.get("[data-cy=submit]").click();
    cy.url().should("include", "/?page=1&sort=id,asc");
  });

  it("Check brand-title lenght", () => {
    cy.get(".brand-title").should("have.length", 1);
  });
  it("Header five text items", () => {
    cy.get("#header-tabs li").should("have.length", 5);
  });

  // it("Check correct texts item", () => {
  //   cy.get("#header-tabs li").first().should("have.text", "Home");
  //     // });
  // it("Check correct text item 2", () => {
  //   cy.get("#entity-menu").should("have.text", "Entities Task User Task");
  // });
  // it("Check parents item Account", () => {
  //   cy.get("#account-menu").should("be.visible");
  // });
  it("Click on Setting link", () => {
    cy.contains("Account").click();
    const accMenu = "[data-cy=accountMenu]";
    const settings = "[data-cy=settings]";
    // cy.get("[data-cy=accountMenu]").find("[data-cy=settings]").click();
    // cy.get("[data-cy=accountMenu]","[data-cy=settings]")
    cy.accountLink(accMenu, settings);
  });
  it("Click on Password link", () => {
    cy.contains("Account").click();
    const accMenu = "[data-cy=accountMenu]";
    const password = "[data-cy=passwordItem]";
    // cy.get("[data-cy=accountMenu]").find("[data-cy=passwordItem]").click();
    // cy.accountLink("[data-cy=accountMenu]", "[data-cy=passwordItem]");
    cy.accountLink(accMenu, password);
  });
  it("Click on Logout link", () => {
    cy.contains("Account").click();
    const accMenu = "[data-cy=accountMenu]";
    const logout = "[data-cy=logout]";
    // cy.get("[data-cy=accountMenu]").find("[data-cy=logout]").click();
    // cy.accountLink("[data-cy=accountMenu]", "[data-cy=logout]");
    cy.accountLink(accMenu, logout);
  });
  it("Click on Home link", () => {
    cy.contains("Home").click();
  });
    it("Click on Task  link", () => {
    cy.contains("Entities").click();
    cy.get('a[href="/task"]').click();
  });
  it("Click on UserTask  link", () => {
    cy.contains("Entities").click();
    cy.get('a[href="/user-task"]').click();
  });
  it("Click on API  link", () => {
    cy.contains("Swagger").click();
    cy.get('a[href="/docs/docs"]').click();
  });
   it("Click on en  link", () => {
    cy.contains("English").click();
    cy.contains("Русский").click();
  });
  it("Click on fr  link", () => {
    const language = "English";
    cy.contains(`${language}`).click();
    cy.contains("Français").click();
  });
  it("Click on ru  link", () => {
    const language = "English";
    cy.contains(`${language}`).click();
    cy.contains("Русский").click();
  });
  it("Click on ua  link", () => {
    const language = "English";
    cy.contains(language).click();
    cy.contains("Українська").click();
  });
});

