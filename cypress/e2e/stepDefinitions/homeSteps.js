import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../support/pages/HomePage"

When  ('I validate products are presents',()=>{
    homePage.validLoadLogo()
})