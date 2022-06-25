declare namespace Cypress{
    interface Chainable {
        visitHost(): Chainable<Element>
    }   
} 
Cypress.Commands.add('visitHost', ()=>{
    cy.visit('www.saucedemo.com/')
})