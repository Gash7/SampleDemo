$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Negative login",
  "description": "",
  "id": "login-feature;negative-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter proper \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
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
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login-feature;negative-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "login-feature;negative-login;;1"
    },
    {
      "cells": [
        "avgore7@gmail.com",
        "Ashu@022"
      ],
      "line": 10,
      "id": "login-feature;negative-login;;2"
    },
    {
      "cells": [
        "ashu123@gmail.com",
        "Ashu022"
      ],
      "line": 11,
      "id": "login-feature;negative-login;;3"
    },
    {
      "cells": [
        "ash@gmail.com",
        "ashish123"
      ],
      "line": 12,
      "id": "login-feature;negative-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 32494782000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Negative login",
  "description": "",
  "id": "login-feature;negative-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter proper \"avgore7@gmail.com\" and \"Ashu@022\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 154573500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avgore7@gmail.com",
      "offset": 19
    },
    {
      "val": "Ashu@022",
      "offset": 43
    }
  ],
  "location": "LoginSteps.user_Enter_proper_and(String,String)"
});
formatter.result({
  "duration": 776806800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 35348800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_HomePage()"
});
formatter.result({
  "duration": 11003422200,
  "status": "passed"
});
formatter.after({
  "duration": 1032709800,
  "status": "passed"
});
formatter.before({
  "duration": 27098227500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Negative login",
  "description": "",
  "id": "login-feature;negative-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter proper \"ashu123@gmail.com\" and \"Ashu022\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 95300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashu123@gmail.com",
      "offset": 19
    },
    {
      "val": "Ashu022",
      "offset": 43
    }
  ],
  "location": "LoginSteps.user_Enter_proper_and(String,String)"
});
formatter.result({
  "duration": 593128300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 18709900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_HomePage()"
});
formatter.result({
  "duration": 10999687200,
  "status": "passed"
});
formatter.after({
  "duration": 4172036400,
  "status": "passed"
});
formatter.before({
  "duration": 25080602300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Negative login",
  "description": "",
  "id": "login-feature;negative-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter proper \"ash@gmail.com\" and \"ashish123\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 77800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ash@gmail.com",
      "offset": 19
    },
    {
      "val": "ashish123",
      "offset": 39
    }
  ],
  "location": "LoginSteps.user_Enter_proper_and(String,String)"
});
formatter.result({
  "duration": 549366000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 24103900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_HomePage()"
});
formatter.result({
  "duration": 10999653900,
  "status": "passed"
});
formatter.after({
  "duration": 259780100,
  "status": "passed"
});
});