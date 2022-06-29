declare namespace Cypress{
    interface Chainable {
        accessAccount(): Chainable<Element>
        visitHost(): Chainable<Element>
    }
}

Cypress.Commands.add('visitHost', ()=>{
    cy.visit('www.saucedemo.com/')
})