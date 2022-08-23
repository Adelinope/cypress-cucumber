Feature: Home Application

  Feature As I validate home page
 
    Background: I make Login
        Given I open the sistem 
        When I submit login with 'standard_user' and 'secret_sauce'
        Then I should see homepage

    @Home
    Scenario: I validate home UI 
    Given I should see homepage
    Then  I validate products are presents
         