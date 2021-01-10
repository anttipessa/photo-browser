/// <reference types="cypress" />

describe('Photos', function () {
    it('front page can be opened', function () {
      cy.visit('http://localhost:3000')
      cy.contains('PhotoBrowser')
    })
    it('photo page can be viewed', function () {
      cy.visit('http://localhost:3000/photos/1')
      cy.contains('accusamus beatae ad facilis cum similique qui sunt')
      cy.contains('1')
    })
  })