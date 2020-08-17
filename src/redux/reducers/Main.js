import { FETCHED, FETCHING, FETCH_ERROR } from "../actions/actions";

const initialState = ({
    loading: false,
    error: "",
    movies: [],
    totalResults: "",
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
                loading: false,
                movies: payload.Search,
                error: null,
                totalResults: payload.totalResults,
            }
        case FETCH_ERROR:
            return {
                loading: false,
                movies: null,
                error: payload
            }
            default: return {
                ...state
            }
    }
}

export default movies;