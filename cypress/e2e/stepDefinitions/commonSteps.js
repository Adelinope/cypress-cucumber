import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

export default class commonSteps{}

Given ('I open the sistem',()=>{
    cy.visitHost()
}) 