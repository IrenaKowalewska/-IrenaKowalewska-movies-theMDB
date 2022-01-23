import {
    getTop,
    getPopular,
    getTrends
} from "./services.js";
import renderCard from "./renderCard.js";

const filmWeekSection = document.querySelector('.film-week');
const getNav = document.querySelectorAll('.get-nav');
const otherFilmsTitle = document.querySelector('.other-films__title');

const getData = async (reating, type) => {
    let data = [];
    if (reating === 'top') {
        data = await getTop(type);
    } else if(reating === 'popular') {
        data = await getPopular(type);
    } else {
        data = await getTrends();
    }
    const [...cards] = data.results;
    cards.length = 16;
    renderCard(cards);
}

export const menuLink = () => {
    getNav.forEach(nav => {
        nav.addEventListener('click', async (e) => {
            const target = e.target.closest('.get-nav__link');
            if(target) {
                e.preventDefault();
                filmWeekSection.style.display = 'none';
                otherFilmsTitle.textContent = target.textContent;
                switch (target.dataset.type) {
                    case 'top-tv':
                        await getData('top','tv');
                        break;
                    case 'top-movies':
                        await getData('top','movie');
                        break;
                    case 'popular-tv':
                        await getData('popular','tv');
                        break;
                    case 'popular-movies':
                        await getData('popular','movie');
                        break;
                    case 'triends':
                        await getData('trends','all');
                        break;
                }

            }
        });
    })
}

export default menuLink;