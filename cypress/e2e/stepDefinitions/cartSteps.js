import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../support/pages/HomePage"

Given ('I add a product to cart {string}', (product)=>{
    homePage.clickOnProduct(product)
})
