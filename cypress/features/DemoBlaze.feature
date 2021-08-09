Feature: Sign up new user, login and make and order

Scenario: Sign Up with a new user
Given I open navigator "DemoBlaze"
When I click signup button on the Main Page
And I see the register popup "register"
And I write username
And I write password
Then I confirm the register succesfully


Scenario: Sign Up with an existing user
Given I open navigator "DemoBlaze"
When I click signup button on the Main Page
And I see the register popup "register"
And I write username
And I write password
Then I confirm the user exist


Scenario: Login with the user created
Given I open navigator "DemoBlaze"
When I click login button on the Main Page
And I see the login popup
And I write my username
And I write my password
Then I confirm login succesfully

Scenario: Add to cart
Given I open navigator "DemoBlaze"
When I select a categories
And I add to cart the first product
And I go to home
And I add to cart the second product
And I go to home
And I open the cart
Then I validate my items


Scenario: Buy the items
Given I want to buy my items 
When I place order
Then I see the place order popup "checkout"
And I write Name
And I Write Country
And I write City
And I write Credit card
And I write Month
And I write Year
And I click purchase
Then I see order confirmation