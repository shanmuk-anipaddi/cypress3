import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("I visit the zero.websecurity.com site", () => {
  cy.visit("http://zero.webappsecurity.com/login.html");
});
Given("I sign in with {string} and {string}", (UserName, Password) => {
  cy.get("#user_login").type(UserName);
  cy.get("#user_password").type(Password);
  cy.contains("Sign in").click();
});
