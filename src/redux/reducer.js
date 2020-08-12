import { FETCHED, FETCHING, FETCH_ERROR } from "./actions";
import {combineReducers} from "redux";
const initialState = ({
    loading: false,
    error: "",
    movies: null
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
                movies: payload,
                error: null
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

export default combineReducers({
    movies
});