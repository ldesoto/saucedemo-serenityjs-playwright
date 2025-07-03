# language: en
@regression
Feature: Regression Test Suite
  As a QA engineer
  I want to run a comprehensive regression suite
  So that I can ensure all critical functionality works

  @smoke @login
  Scenario: Critical path - Complete purchase flow
    Given the user is on the login page
    When they enter username "standard_user" and password "secret_sauce"
    Then they should see the products page
    When they add product "Sauce Labs Backpack" to the cart
    And they proceed to checkout
    And they complete checkout information with:
      | firstName | lastName | postalCode |
      | John      | Doe      | 12345      |
    Then they should see the order confirmation message

  @regression @login
  Scenario Outline: Login with different user types
    Given the user is on the login page
    When they enter username "<username>" and password "<password>"
    Then they should see "<result>"

    Examples:
      | username                | password     | result           |
      | standard_user          | secret_sauce | products page    |
      | locked_out_user        | secret_sauce | error message    |
      | problem_user           | secret_sauce | products page    |
      # | performance_glitch_user| secret_sauce | products page    |
      | invalid_user           | wrong_pass   | error message    |

  @regression @cart
  Scenario: Cart functionality regression
    Given the user is logged in to the products page
    When they add product "Sauce Labs Backpack" to the cart
    And they add product "Sauce Labs Bike Light" to the cart
    Then the cart should show 2 products
    When they remove product "Sauce Labs Backpack" from the cart
    Then the cart should show 1 products
