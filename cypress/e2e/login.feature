Feature: Login to Application

  Feature As a valid user I want to log in into Application
 
    @login
    Scenario Outline: Valid Login
        Given I open the sistem 
        When I submit login with <username> and <password>
        Then I should see homepage

        Examples:
            | username         | password        | 
            | 'standard_user'  | 'secret_sauce'  |
    

    @login
    Scenario Outline: Invalid Login
        Given I open the sistem 
        When I submit login with <username> and <password>
        Then I should see error message

        Examples:
            | username         | password        | 
            | 'invalid_user'   | 'secret_sauce'  |