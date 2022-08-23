import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import {loginPage} from '../../support/pages/LoginPage'

Then ('I should see error message', ()=>{
    loginPage.validadeErrorLabel()
})

