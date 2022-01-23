import slideMenu from "./menu.js";
import renderVideos from "./renderVideos.js";
import menuLink from "./menuLink.js";
import searchMovies from "./searchMovies.js";

slideMenu({
    openBtn: '.header__burger-btn',
    menuElem: '.navigation',
    activeMenuClass: 'navigation_active',
    closeTrigger: '.navigation__link, .navigation__close'
});

renderVideos();
menuLink();
searchMovies();