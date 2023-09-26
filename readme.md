# How to Run
1. npm init
2. npm install
3. npm install cypress --save-dev
4. npx cypress run or npm cypress open

# version
cypress : '13.2.0'
node : 'v17.4.0'
npm : '8.3.1' 

# Gherkin Skenario
Feature: Mark as Favorite on TMDb

  ``Scenario: User marks a movie as favorite
    Given the user is logged in to TMDb
    When the user selects a popular movie
    And marks it as favorite
    Then the movie should appear in the user's favorite movies list
    And the user should be able to remove the movie from their favorites
    And the user should be able to reorder their favorite movies list`

  Scenario: User marks multiple movies as favorites
    Given the user is logged in to TMDb
    When the user selects multiple popular movies
    And marks them as favorites
    Then all selected movies should appear in the user's favorite movies list
    And the user should be able to remove any of the movies from their favorites
    And the user should be able to reorder their favorite movies list

  Scenario: User marks a movie as favorite and logs out
    Given the user is logged in to TMDb
    When the user selects a popular movie
    And marks it as favorite
    And logs out
    Then upon logging back in, the movie should still be in the user's favorite movies list

  Scenario: User tries to mark a movie as favorite without logging in
    Given the user is not logged in to TMDb
    When the user attempts to mark a movie as favorite
    Then the user should be prompted to log in

  Scenario: User tries to remove a movie from favorites without logging in
    Given the user is logged in to TMDb and has marked a movie as favorite
    When the user logs out
    And attempts to remove a movie from favorites without logging in
    Then the user should be prompted to log in

  Scenario: User tries to reorder favorite movies without logging in
    Given the user is logged in to TMDb and has marked multiple movies as favorites
    When the user logs out
    And attempts to reorder their favorite movies list without logging in
    Then the user should be prompted to log in


setx CYPRESS_USERNAME your_username
setx CYPRESS_PASSWORD your_password

