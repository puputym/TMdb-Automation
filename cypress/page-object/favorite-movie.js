import { ElementLocators } from "../element-locator/element-locator";

const elementLocator = new ElementLocators();

export default class MoviePage {

  favoriteMovie() {
    cy.get(elementLocator.headerMovie).should('be.visible').click();
    cy.contains(elementLocator.headerMovieOpen, 'Popular').click();
    cy.get(elementLocator.favMovie).click();
    cy.get(elementLocator.buttonFav).click();
  }
  verifyFavoriteMovie(){
    cy.get(elementLocator.clickAvatar).should('be.visible').scrollIntoView().click({force: true});
    cy.contains(elementLocator.clickAvatarOpen, 'Lists').click({force: true});
    cy.get(elementLocator.clickOverview).should('be.visible').click();
    cy.contains(elementLocator.clickFavorite, 'Favorites').should('be.visible').click({force: true});
    cy.get(elementLocator.clickMovie).should('be.visible').click();
    cy.contains(elementLocator.verifySuccessFavMovie, 'Remove').should('be.visible');
  }
}
