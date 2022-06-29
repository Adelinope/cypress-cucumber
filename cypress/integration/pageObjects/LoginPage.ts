const USER_NAME = "#user-name"
const USER_PASSWORD = "#password"
const SUBMIT_BUTTON = "#login-button"
const ERROR_LABEL = 'div>h3[data-test~="error"]'

class LoginPage {
    static fillUsername(name){
        cy.get(USER_NAME).type(name)
    }
    static fillPassword(password){
        cy.get(USER_PASSWORD).type(password)
    }
    static clickSubmit(){
        cy.get(SUBMIT_BUTTON).click()
    }
    static validadeErrorLabel(){
        cy.get(ERROR_LABEL).should('be.visible')
    }
}

export default LoginPage