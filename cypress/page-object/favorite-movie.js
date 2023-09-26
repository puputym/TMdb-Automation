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
    cy.contains(elementLocator.ClickMovie, 'Movies').should('be.visible').click({force: true});
    cy.contains(elementLocator.verifySuccessFavMovie, 'Remove').should('be.visible');
  }
  favMovieBeforeLogin(){
    cy.get(elementLocator.favMovieBeforeLogin).click();
    cy.get(elementLocator.buttonFav).click();
  }
  verifyFailedFavMovie(){
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Login to add this movie to your favorite list`)
  })
  }
}
