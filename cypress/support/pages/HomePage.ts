const HOME_LOGO = ".app_logo"


class HomePage {

    static validLoadLogo(){
        cy.get(HOME_LOGO).should('be.visible')
    }
}

export default HomePage