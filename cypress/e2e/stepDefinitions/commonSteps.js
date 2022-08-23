import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import {loginPage} from '../../support/pages/LoginPage'
import { homePage } from "../../support/pages/HomePage"
export default class commonSteps{}

Given ('I open the sistem',()=>{
    cy.visitHost()
}) 

When('I submit login with {string} and {string}',(username, password) => {
    loginPage.fillUsername(username)
    loginPage.fillPassword(password)
    loginPage.clickSubmit()
 })

 Then('I should see homepage', () => {
    homePage.validLoadLogo()
})

Then ('I validate the number of itens in the Cart is {string}', (numberItens)=>{
    homePage.validateNumberProductsCart(numberItens)
})