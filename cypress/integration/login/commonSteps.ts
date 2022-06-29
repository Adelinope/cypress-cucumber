import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given ('I open the sistem',()=>{
    cy.visitHost()
}) 