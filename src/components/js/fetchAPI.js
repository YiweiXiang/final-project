import axios from 'axios';

// const BASE_URL = `https://api.themoviedb.org/3`;
// const API_KEY = `api_key=ba9d938fb74cec3f1e5f84f1774aee3b`;
// const SEARCH_CONTENT = `&language=en-US&page=`;
// const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// let page = 1; 


const getMovie = async (url, page) => {
    try{
        let result = await axios.get(url+page);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}

export default getMovie;