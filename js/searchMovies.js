import {getDataBySearch} from "./services.js";
import renderCard from "./renderCard.js";

const filmWeekSection = document.querySelector('.film-week');
const otherFilmsTitle = document.querySelector('.other-films__title');
const searchForm = document.querySelector('.header__search-form');
const searchInput = document.querySelector('.header__search-input');

const searchMovies = () => {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if(!searchInput.value) return;

        getDataBySearch(searchInput.value)
            .then(data => {
                if(data.results.length) {
                    renderCard(data.results);
                } else {
                    throw `К сожалению по вашему запросу ничего не найдено.`;
                }
            })
            .then(() => {
                filmWeekSection.style.display = 'none';
                otherFilmsTitle.textContent = 'Резултаты поиска:';
            })
            .catch(err => otherFilmsTitle.textContent = err);

    });
}

export default searchMovies;