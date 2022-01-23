import {getVideo} from "./services.js";

const cardsContainer = document.querySelector('.other-films__list');

const renderCard = (data) => {

    cardsContainer.textContent = '';
    Promise.all(
        data.map(async (elem) => {
            const videoKey = await getVideo(elem.id, elem.media_type);
            const key = videoKey.results[0]?.key || '';
            return `
        <li class="other-films__item" data-filmId="${data.id}">
            <a class="other-films__link tube" data-rating="${elem.vote_average}"  ${key ? `href="https://youtu.be/${key}"` : ''}>
                <img 
                class="other-films__img" 
                
                src="${elem.poster_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${elem.poster_path}` :
            'https://www.kinonews.ru/images2/noposter160x213.jpg'}" 
                alt="постер">
            </a>
            ${elem.poster_path ? '' : ` <p>${elem.name || elem.title}</p>`}
        </li>`;
        })
    ).then(cards => cardsContainer.innerHTML = cards.join(' '));
}

export default renderCard;