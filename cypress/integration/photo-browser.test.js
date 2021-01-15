/// <reference types="cypress" />

describe('Landing Page', function () {
  it('successfully loads', function () {
    cy.visit('/')
  })
  it('contains the navbar', function () {
    cy.get('.nav-bar').should('be.visible')
  })
  it('contains the description', function () {
    cy.contains('This is a website for viewing photos, albums and users from this api.')
  })
  it('contains the picture', function () {
    cy.get('[alt="Gallery"]').should('be.visible')
  })
  it('navbar can be clicked', function () {
    cy.contains('Users').click()
    cy.contains('Leanne Graham')
  })
})

describe('Photo Listing', function () {
  it('successfully loads', function () {
    cy.visit('/photos')
  })
  it('contains photo thumbnails', function () {
    cy.get('[alt="harum velit vero totam"]').should('be.visible')
    cy.get('[alt="accusamus beatae ad facilis cum similique qui sunt"]').should('be.visible')
  })
  it('photo thumbnails can be clicked', function () {
    cy.get('[alt="harum velit vero totam"]').click()
    cy.contains('Photo 23')
  })
})

describe('Album Listing', function () {
  it('successfully loads', function () {
    cy.visit('/albums')
  })
  it('contains album thumbnails', function () {
    cy.contains('Album 99').should('be.visible')
  })
  it('clicking album thumbnail works', function () {
    cy.contains('Album 99').click()
    cy.contains('Made by Clementina DuBuque')
    cy.contains('Previous Next')
  })
})

describe('User Listing', function () {
  it('successfully loads', function () {
    cy.visit('/users')
  })
  it('contains user thumbnails', function () {
    cy.contains('Nicholas Runolfsdottir V').should('be.visible')
  })
  it('clicking user thumbnail works', function () {
    cy.contains('Nicholas Runolfsdottir V').click()
    cy.contains('User Profile')
    cy.contains('Ellsworth Summit, Suite 729, 45169 Aliyaview')
  })
})

describe('Photo View', function () {
  it('successfully loads', function () {
    cy.visit('/photos/1')
  })
  it('contains picture', function () {
    cy.get('[alt="accusamus beatae ad facilis cum similique qui sunt"]').should('be.visible')
  })
  it('contains title', function () {
    cy.contains('accusamus beatae ad facilis cum similique qui sunt')
  })
  it('contains album link', function () {
    cy.contains('Album 1')
  })
  it('contains next button', function () {
    cy.get('.next-button').should('be.visible')
  })
  it('does not contains previous button', function () {
    cy.get('.previous-button').should('not.exist')
  })
  it('next button can be clicked', function () {
    cy.get('.next-button').click()
    cy.contains('reprehenderit est deserunt velit ipsam')
  })
  it('previous button can be clicked', function () {
    cy.get('.previous-button').click()
    cy.contains('Photo 1')
  })
})

describe('Album View', function () {
  it('successfully loads', function () {
    cy.visit('/albums/50')
  })
  it('contains picture', function () {
    cy.get('[alt="odio animi nobis cumque"]').should('be.visible')
  })
  it('contains title', function () {
    cy.contains('Album 50')
  })
  it('contains user information', function () {
    cy.contains('Made by Chelsey Dietrich')
  })
  it('contains next button and previous', function () {
    cy.contains('Previous Next')
  })
  it('next button can be clicked', function () {
    cy.contains('Next').click()
    cy.get('[alt="et sit voluptatum rerum architecto incidunt"]').should('be.visible')
    cy.contains('Made by Mrs. Dennis Schulist')
  })
  it('previous button can be clicked', function () {
    cy.contains('Previous').click()
    cy.get('[alt="odio animi nobis cumque"]').should('be.visible')
    cy.contains('Made by Chelsey Dietrich')
  })
  it('previous button can be clicked', function () {
    cy.contains('Made by Chelsey Dietrich').click()
    cy.contains('Keebler LLC, User-centric fault-tolerant solution')
  })
})

describe('User View', function () {
  it('successfully loads', function () {
    cy.visit('/users/3')
  })
  it('contains title', function () {
    cy.contains('User Profile')
  })
  it('contains name', function () {
    cy.contains('Clementine Bauch')
  })
  it('contains address', function () {
    cy.contains('Douglas Extension, Suite 847, 59590-4157 McKenziehaven')
  })
  it('contains next button', function () {
    cy.get('.next-button').should('be.visible')
  })
  it('does not contains previous button', function () {
    cy.get('.previous-button').should('be.visible')
  })
  it('next button can be clicked', function () {
    cy.get('.next-button').click()
    cy.contains('Patricia Lebsack')
  })
  it('previous button can be clicked', function () {
    cy.get('.previous-button').click()
    cy.contains('Clementine Bauch')
  })
})
