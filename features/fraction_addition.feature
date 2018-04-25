Feature: Multiple Addition with Fraction
  In order to perform real world Fraction
  As a user of a calculator
  I want to be able to add multiple fractional Addition

  Scenario: An user add multiple fraction
  Given the calculator is cleared
  When I add 1/2 to 1/4
  Then the result sould be 3/4 

  Scenario: An user with an another operation
  Given the calculator is cleared
  When I add 1/4 to 1/4
  Then the result sould be 2/4