const API_KEY = '7c2ee62875ea6fb1aea5a9512a985137';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

const getData = (url) => {
    return fetch(url)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw `Ошибка ${response.status}`;
        })
        .then(data => data)
        .catch(e => console.log(e));
};

export const getTrends = async (type = 'all', period = 'week', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    const data = await getData(url);
    return data;
}

export const getTop = async (type, period, page = 1) => {
    const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    const data = await getData(url);
    return data;
}

export const getPopular = async (type, page = 1) => {
    const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    const data = await getData(url);
    return data;
}

export const getVideo = async (id, type) => {
    const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}&${LANGUAGE}`;
    const data = await getData(url);
    return data;
}

export const getDataBySearch = async (text, page = 1) => {
    const url = `${BASE_URL}search/multi?api_key=${API_KEY}&${LANGUAGE}&query=${text}&page=${page}&include_adult=false`
    const data = await getData(url);
    return data
}