import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from '../../support/pages/LoginPage'
import HomePage from '../../support/pages/HomePage'

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

