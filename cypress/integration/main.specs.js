import LoginPage from "../page-object/login";
import MoviePage from "../page-object/favorite-movie";

describe('Running Automation Test TMDB Movie', ()=>{
    const loginPage = new LoginPage();
    const moviePage = new MoviePage();

    beforeEach(() =>{
        loginPage.visit();
        loginPage.login();
    })
    it('should be able to mark favorite movie', ()=>{
        moviePage.favoriteMovie();
        moviePage.verifyFavoriteMovie();
    })
})