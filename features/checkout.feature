# language: en
Feature: Checkout Process
  As a user with products in cart
  I want to complete the checkout process
  So that I can finalize my order

  Background:
    Given the user is logged in to the products page
    And they have products in the cart

  Scenario: Complete checkout successfully
    When they proceed to checkout
    And they complete checkout information with:
      | firstName | lastName | postalCode |
      | John      | Doe      | 12345      |
    Then they should see the order confirmation message
