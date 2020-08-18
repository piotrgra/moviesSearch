import { FETCHED, FETCHING, FETCH_ERROR, ADD_WATCH, WATCHED } from "../actions/actions";

const initialState = ({
    loading: false,
    error: "",
    movies: [],
    totalResults: "",
    addWatch: [],
    watched: [],
});

const movies = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCHING:
            return {
                ...state,
                loading: true
            }
        case FETCHED:
            return {
                ...state,
                loading: false,
                movies: payload.Search,
                error: null,
                totalResults: payload.totalResults,
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                movies: null,
                error: payload
            }
        case ADD_WATCH:
            const add = state.movies.filter((movie) => {
                if (movie.imdbID === payload) {
                    return movie;
                } else {
                    return null;
                }
            })[0];
            return {
                ...state,
                addWatch: [...state.addWatch, add],
            }
        case WATCHED:
            const movie = state.movies.filter((movie) => {
                if (movie.imdbID === payload.movieId) {
                    return movie;
                } else {
                    return null;
                }
            })[0];

            return {
                ...state,
                watched: [
                    ...state.watched,
                    {
                        movie: movie,
                        stars: payload.stars,
                    }
                ]
            }
        default: return {
            ...state
        }
    }
}

export default movies;