class BasePage{
    
      getElementByContainsText(text) {
        return cy.contains(text)
      }
    
      selectById(selectBoxId, selectText) {
        return cy.get(selectBoxId).select(selectText)
      }
    
      typeInputValueById(inputId, value) {
        return cy.get(inputId).type(value)
      }
    
      typeTextAreaValueById(textAreaId, value) {
        return cy.get(textAreaId).type(value)
      }   

} 

export default BasePage