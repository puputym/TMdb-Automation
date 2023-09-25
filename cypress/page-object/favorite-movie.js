import { ElementLocators } from "../element-locator/element-locator";

const elementLocator = new ElementLocators();

export default class MoviePage {

  favoriteMovie() {
    cy.get(elementLocator.headerMovie).should('be.visible');
    cy.get(elementLocator.headerMovieOpen, 'Popular').click();
    cy.get(elementLocator.favMovie).click();
    cy.get(elementLocator.buttonFav).click();
  }
  verifyFavoriteMovie(){
    cy.get(elementLocator.clickAvatar).should('be.visible');
    cy.get(elementLocator.clickAvatarOpen, 'View profile').click();
    cy.get(elementLocator.clickOverview).should('be.visible');
    cy.get(elementLocator.clickFavorite, 'Favorites').click();
    cy.get(elementLocator.clickMovie, 'Movies').click();
  }
}
