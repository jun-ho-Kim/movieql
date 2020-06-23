import fetch from "node-fetch";
import Axios from "../node_modules/axios";
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIE_URL= `${BASE_URL}list_movies.json`;
const Detail_Movie_URL = `${BASE_URL}movie_details.json`;
const Suggestion_Movie_URL = `${BASE_URL}movie_suggestions.json`

export const getMovies = async(limit, rating) => {
    const {
        data : {
            data : { movies }
        }
     } = await Axios(LIST_MOVIE_URL, {
        params : {
            limit,
            minimum_rating : rating
        }
    })
    console.log(movies);
    return movies;
}


export const getMovie = async id => {
    const {
        data : 
        {data: {movie}
        }
    } = await Axios(Detail_Movie_URL, {
        params: {
            movie_id:id
        }
    })
    return movie;
};

export const getSuggestion = async(id) => {
    const {
        data: {
            data: {movies}
        }
    } = await Axios(Suggestion_Movie_URL, {
        params : {
            movie_id: id
        }
    });
    return movies;
}