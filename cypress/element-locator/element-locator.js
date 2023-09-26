export class ElementLocators{
    headerLogin = ".primary > :nth-child(3) > a"
    loginUsername = "#username"
    loginPassword = "#password"
    loginButton = "#login_button" 
    cookie = "#onetrust-accept-btn-handler"
    verifySuccessLogin = ".about > :nth-child(1) > h2 > a"

    //Select Favorite Movie
    headerMovie = '.dropdown_menu > :nth-child(1) > .no_click'
    headerMovieOpen = ".k-item.k-state-border-down > .k-animation-container > .k-group > .k-first > .k-link"
    favMovie = ":nth-child(1) > div.image > .wrapper > .image > .poster"
    buttonFav = "#favourite"
    buttonFavBeforeLogin = "#original_header > div.header_poster_wrapper.false > section > ul > li:nth-child(3)"

    clickAvatar = ".no_click > .avatar"
    clickAvatarOpen =".k-tooltip-content > .settings_content > :nth-child(2) > :nth-child(2) > a"
    clickOverview = ".false.k-first > :nth-child(1)"
    clickFavorite = ".group > .false > span.k-link"
    ClickMovie = "#new_shortcut_bar_mn_active > .k-animation-container > .k-group > .k-first > .k-link"
    verifySuccessFavMovie = ":nth-child(4) > .remove_list_item"
}