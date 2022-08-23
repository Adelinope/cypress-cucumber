Feature: Cart Application

  Feature I manage the cart 
 
    Background: I make Login
        Given I open the sistem 
        When I submit login with 'standard_user' and 'secret_sauce'
        Then I should see homepage
      

@Cart
Scenario Outline: I add a product to cart 
    Given I add a product to cart <product>
    Then  I validate the number of itens in the Cart is <numberItens>
    Examples:
        | product                   | numberItens |
        | 'Sauce Labs Bolt T-Shirt' | '1'         |