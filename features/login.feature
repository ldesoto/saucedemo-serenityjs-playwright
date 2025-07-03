# language: en
Feature: User Login
  As a user of the SauceDemo application
  I want to be able to log in
  So that I can access the products available

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When they enter username "standard_user" and password "secret_sauce"
    Then they should see the products page

  Scenario: Failed login with invalid credentials
    Given the user is on the login page
    When they enter username "invalid_user" and password "wrong_password"
    Then they should see an error message
