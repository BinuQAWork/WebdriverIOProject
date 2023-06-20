Feature: Test login functionality
    Scenario Outline: As a user, test login feature
        Given user is on login page
        When user enters <username> and <password>
        And clicks on login button
        Then user is able to view the <message>

        Examples:
        | username | password             | message                        |
        | tomsmith | SuperSecretPassword! | You logged into a secure area! |
        | 123      | wer                  | Your username is invalid!      |
     