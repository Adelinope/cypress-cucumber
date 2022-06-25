Feature: Login to Application

  Feature As a valid user I want to log in into Application
 
    Scenario: Valid Login
        Given I open login page
        When I submit login
        Then I should see homepage

        