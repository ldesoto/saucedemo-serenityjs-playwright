# language: en
Feature: Shopping Cart Management
  As an authenticated user
  I want to add products to my cart
  So that I can proceed with my purchase

  Background:
    Given the user is logged in to the products page

  Scenario: Add a single product to cart
    When they add product "Sauce Labs Backpack" to the cart
    Then the cart should contain product "Sauce Labs Backpack"

  Scenario: Add multiple products to cart
    When they add product "Sauce Labs Backpack" to the cart
    And they add product "Sauce Labs Bike Light" to the cart
    Then the cart should show 2 products
