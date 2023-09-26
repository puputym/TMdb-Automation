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
    })

    it('should be able to mark favorite movie 1', ()=>{
        loginPage.login();
        moviePage.favoriteMovie();
        moviePage.verifyFavoriteMovie();
    })

    it('should be able to mark favorite movie 2', ()=>{
        loginPage.login();
        moviePage.favoriteMovie2();
        moviePage.verifyFavoriteMovie();
    })
    it('should be able to mark favorite movie 3', ()=>{
        loginPage.login();
        moviePage.favoriteMovie3();
        moviePage.verifyFavoriteMovie();
    })
    it('should be able to Order favorite movie ', ()=>{
        loginPage.login();
        moviePage.verifyFavoriteMovie();
        moviePage.orderMovie();
    })
    it('should be able to remove favorite movie 1', ()=>{
        loginPage.login();
        moviePage.verifyFavoriteMovie();
        moviePage.removeMovie();
        moviePage.verifyFavoriteMovie();
    })
})