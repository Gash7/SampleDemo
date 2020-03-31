Feature: Login Feature
Scenario Outline:Negative login
Given user is on login page  
When user Enter proper "<username>" and "<password>"
And User clicks on submit button
Then User is on HomePage

Examples:
|username|password|
|avgore7@gmail.com|Ashu@022|
|ashu123@gmail.com|Ashu022|
|ash@gmail.com|ashish123|
