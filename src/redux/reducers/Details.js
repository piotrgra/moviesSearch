import { DETAILS_FETCHED, DETAILS_FETCH_ERROR, FETCHING_DETAILS } from "../actions/details";

const initialState = ({
    loadingMovie: false,
    data: null,
});

const details = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DETAILS:
            return {
                ...state,
                loadingMovie: true
            }
        case DETAILS_FETCHED:
            return {
                loadingMovie: false,
                data: action.payload
            }
        case DETAILS_FETCH_ERROR:
            return {
                ...state,
                loadingMovie: false,
            }
        default: return {
            ...state
        }
    }
}

export default details;