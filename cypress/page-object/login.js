import { ElementLocators } from "../element-locator/element-locator";
const elementLocator = new ElementLocators();

export default class LoginPage {
  visit() {
   cy.visit("https://www.themoviedb.org");
  }

  login() {
    const username = Cypress.env("CYPRESS_USERNAME");
    const password = Cypress.env("CYPRESS_PASSWORD");
    cy.get(elementLocator.headerLogin).click()
    cy.get(elementLocator.loginUsername).type(username);
    cy.get(elementLocator.loginPassword).type(password);
    cy.get(elementLocator.loginButton, { failOnStatusCode: false }).should('be.visible').click();
    }

  verifySuccessLogin(){
    //cy.contains(elementLocator.verifySuccessLogin).should('be.visible')
  }
}

