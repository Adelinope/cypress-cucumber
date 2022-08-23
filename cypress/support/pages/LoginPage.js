import BasePage from "./BasePage"


class LoginPage extends BasePage{

    getUserName() { return '#user-name' }
    getUserPassword() { return '#password' }
    getSubmitButton() { return '#login-button' }
    getErrorLabel() { return 'div>h3[data-test~="error"]' }

    fillUsername(name) {
        cy.log(this.getUserName())
        cy.get(this.getUserName()).type(name)
        cy.log('Fill username with sucess')
    }

    fillPassword(password) {
        cy.get(this.getUserPassword()).type(password)
        cy.log('Fill password with sucess')
    }

    clickSubmit() {
        cy.get(this.getSubmitButton()).click()
        cy.log('Click on submit with sucess')
    }

    validadeErrorLabel() {
        cy.isPresent(this.getErrorLabel())
        cy.log('Erro label is present')
    }
}

export const loginPage = new LoginPage()