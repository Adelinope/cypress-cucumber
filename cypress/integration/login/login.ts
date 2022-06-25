import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('I open login page', () => {
    cy.visitHost()
})
When('I submit login', () => {
    cy.accessAccount()
})
Then('I should see homepage', () => {
    cy.get('.app_logo').should('be.visible')
})

