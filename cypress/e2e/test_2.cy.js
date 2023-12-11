describe("Header tests", () => {
  beforeEach(() => {
    const Username = Cypress.config("Username");
    const Password = Cypress.config("Password");
    cy.visit("/login");
    cy.get("#username").type(Username);
    cy.get("#password").type(Password);
    cy.get("[data-cy=submit]").click();
    cy.url().should("include", "/?page=1&sort=id,asc");
    cy.visit("/?page=1&sort=id,asc");
  });
  it("Check brend-title lenght", () => {
    cy.get(".brand-title").should("have.length", 1);
  });
  it("Header five text items", () => {
    cy.get("#header-tabs li").should("have.length", 5);
  });
  // it("Check correct texts item", () => {
  //   cy.get("#header-tabs li").first().should("have.text", "Home");
  //   cy.get("#header-tabs li")
  //     .last()
  //     .should("have.text", "Account Settings Password Sign out");
  // });
  // it("Check correct text item 2", () => {
  //   cy.get("#entity-menu").should("have.text", "Entities Task User Task");
  // });
  // it("Check correct text item 3", () => {
  //   cy.get("#docs-menu").should("have.text", "Swagger API");
  // });
  // it("Click on Account link", () => {
  //   cy.get("[data-cy=accountMenu").click();
  // });
  // it("Check parents item Account", () => {
  //   cy.get("#account-menu").should("be.visible");
  // });
  it("Click on Setting link", () => {
    cy.contains("Account").click();
    cy.get("[data-cy=accountMenu]").find("[data-cy=settings]").click();
  });
  it("Click on Password link", () => {
    cy.contains("Account").click();
    cy.get("[data-cy=accountMenu]").find("[data-cy=passwordItem]").click();
  });
  it("Click on Logout link", () => {
    cy.contains("Account").click();
    cy.get("[data-cy=accountMenu]").find("[data-cy=logout]").click();
  });
  it("Click on Home link", () => {
    cy.contains("Home").click();
  });
  // it("Check parents item Entities", () => {
  //   cy.get("#entity-menu").should("be.visible");
  // });
  it("Click on Task  link", () => {
    cy.contains("Entities").click();
    cy.get('a[href="/task"]').trigger("mouseover");
    cy.get('a[href="/task"]').click();
  });
  it("Click on UserTask  link", () => {
    cy.contains("Entities").click();
    cy.get('a[href="/user-task"]').trigger("mouseover");
    cy.get('a[href="/user-task"]').click();
  });
  it("Click on API  link", () => {
    cy.contains("Swagger").click();
    cy.get('a[href="/docs/docs"]').trigger("mouseover");
    cy.get('a[href="/docs/docs"]').click();
  });
  it("Click on en  link", () => {
    cy.contains("English").click();
    cy.get("div.dropdown-menu.dropdown-menu-end").invoke("show");
    cy.get('button.dropdown-item[value="en"]').trigger("mouseover");
    cy.contains("English").click();
  });
  it("Click on fr  link", () => {
    const language = 'English'
    cy.contains(`${language}`).click();
    cy.get("div.dropdown-menu.dropdown-menu-end").invoke("show");
    cy.get('button.dropdown-item[value="fr"]').trigger("mouseover");
    cy.contains("Français").click();
  });
  it("Click on ru  link", () => {
    const language = 'English'
    cy.contains(`${language}`).click();
    cy.get("div.dropdown-menu.dropdown-menu-end").invoke("show");
    cy.get('button.dropdown-item[value="ru"]').trigger("mouseover");
    cy.contains("Русский").click();
  });
  it("Click on ua  link", () => {
    const language = 'English'
    cy.contains(`${language}`).click();
    cy.get("div.dropdown-menu.dropdown-menu-end").invoke("show");
    cy.get('button.dropdown-item[value="ua"]').trigger("mouseover");
    cy.contains("Українська").click();
});
});
