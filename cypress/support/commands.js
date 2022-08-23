
Cypress.Commands.add('visitHost', ()=>{
    cy.visit('www.saucedemo.com/')
})

Cypress.Commands.add('isPresent', (element)=>{
    cy.get(element).should('be.visible')
})