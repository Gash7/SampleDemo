$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Positive login",
  "description": "",
  "id": "login-feature;positive-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter proper username and password",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 26470852500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Enter_proper_username_and_password()"
});
formatter.result({
  "duration": 921623700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 44943400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_HomePage()"
});
formatter.result({
  "duration": 15337129500,
  "status": "passed"
});
});