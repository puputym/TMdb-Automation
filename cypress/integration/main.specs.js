import LoginPage from "../page-object/login";
import MoviePage from "../page-object/favorite-movie";

describe('Running Automation Test TMDB Movie', ()=>{
    const loginPage = new LoginPage();
    const moviePage = new MoviePage();

    it('should be able to failed mark favorite movie', ()=>{
        loginPage.visit();
        moviePage.favMovieBeforeLogin();
        moviePage.verifyFailedFavMovie();
    })
    beforeEach(() =>{
        loginPage.visit();
        loginPage.login();
        // loginPage.verifySuccessLogin();
    })

    it('should be able to mark favorite movie', ()=>{
        moviePage.favoriteMovie();
        moviePage.verifyFavoriteMovie();
    })
})