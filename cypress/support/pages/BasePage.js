class BasePage {  
   
    getIconCart(){
        return '[class=shopping_cart_link]'
    }

    getValueIconCart(value){
         cy.get(this.getIconCart()).children().should('have.text',value)
    }
   
    validateNumberProductsCart(numberItens){
        this.getValueIconCart(numberItens)
       cy.log('The number of itens in cart is '+numberItens)
    }
}

export default BasePage