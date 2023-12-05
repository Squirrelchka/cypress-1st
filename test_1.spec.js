/// <reference types="cypress" />

describe('home page', () => {
  beforeEach(() => {
        cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/')
  })
    it('page loading check', () => {
      cy.get('.table-responsive div').should('have.length', 21)
      cy.get('.table-responsive div').first().should('have.text', 'applications program Somalia maroon Architect')
     })

    })