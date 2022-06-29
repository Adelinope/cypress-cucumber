import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../pageObjects/LoginPage'
import HomePage from '../pageObjects/HomePage'

When('I submit login with {string} and {string}',(username, password) => {
   LoginPage.fillUsername(username)
   LoginPage.fillPassword(password)
   LoginPage.clickSubmit()
})
Then('I should see homepage', () => {
    HomePage.validLoadLogo()
})

Then ('I should see error message', ()=>{
    LoginPage.validadeErrorLabel()
})

