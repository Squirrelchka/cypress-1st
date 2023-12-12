//<reference types="cypress" />

describe("home page", () => {
  before(() => {
    cy.visit("/?page=1&sort=id,asc");
  });

//     cy.visit("/?page=1&sort=id,asc");
//   });
//   it("page loading check", () => {
//     cy.get(".brand-title").should("have.length", 1);
//   });
//   it("page loading check", () => {
//     cy.get("h2").debug().should("be.visible");
//   });
// });

it('Test for .then()', ()=> { //only позволяет запускать отдельно взятый тест
cy.get("#header-tabs li").then((number) =>{//после then кол-во эл-ов к-ые должны вернуться
  expect(number.length).to.equal(3)
  assert.equal(number.length,3,"Array number is not right"); 
  // cy.log(number.length);
  // cy.log(1);
  // cy.log(typeof number);
  // cy.log(JSON.stringify(number));//для дибагенга берем эту команду, переводит в формат строки
});
});
});

describe.only("home page", () => {
  it('header home page()', ()=> { 
    const Username = Cypress.config("Username");
    const Password = Cypress.config("Password");
    cy.visit("/login");
    cy.get("#username").type(Username);
    cy.get("#password").type(Password);
    cy.get("[data-cy=submit]").click();
    cy.url().should("include", "/?page=1&sort=id,asc");
       cy.get("#header-tabs li").should("have.length", 5);
     });
    });
