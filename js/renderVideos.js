import {getTrends, getVideo} from "./services.js";
import renderCard from './renderCard.js';

const filmWeekSection = document.querySelector('.film-week');

const firstRender = (data, {key}) => {
    const {vote_average, backdrop_path, original_name, original_title, name, title} = data;
    filmWeekSection.innerHTML = `
        <div class="container film-week__container" data-rating="${vote_average}">
            <div class="film-week__poster-wrapper">
                <img class="film-week__poster" 
                src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}" 
                alt="${original_name || original_title}">
                <p class="film-week__title_origin">${original_name || original_title}</p>
            </div>
            <h2 class="film-week__title">${name || title}</h2>
            ${key ?
        `<a class="film-week__watch-trailer tube" k" href="https://youtu.be/${key}"
           aria-label="смотреть трейлер"></a>` : ""}
        </div>
    `
}

const renderVideos = async () => {
    const data = await getTrends();
    const [firstCard, ...otherCards] = data.results;
    const videoKey = await getVideo(firstCard.id, firstCard.media_type);
    otherCards.length = 16;
    firstRender(firstCard, videoKey.results[0]);
    renderCard(otherCards);
}

export default renderVideos;