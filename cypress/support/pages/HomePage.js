import BasePage from "./BasePage";


class HomePage extends BasePage {  

    getHomeLogo(){
        return ".app_logo";
    }

    getProducts(){
        return '[class=inventory_item_name]'
    }

    getProduct(){
        return '[class=inventory_item_description]'
    }
    
    getAddCartButton(){
        return 'div[class=pricebar] > button'
    }

    validLoadLogo(){
        cy.isPresent(this.getHomeLogo())
        cy.log('Logo is present')
    }

    validateProductsPresents(){
        cy.isPresent(this.getProducts())
        cy.log('Products is present')
    }

    clickOnProduct(text){
        cy.get(this.getProduct())
                .contains(text)
                .parent().parent()
                .find(this.getAddCartButton()).click()    
        cy.log('Clicked with sucess in the product '+text)
    }
}

export const homePage = new HomePage()