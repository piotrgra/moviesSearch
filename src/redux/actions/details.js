const FETCHING_DETAILS = "FETCHING_DETAILS";
const DETAILS_FETCHED = "DETAILS_FETCHED";
const DETAILS_FETCH_ERROR = "DETAILS_FETCH_ERROR";

const startFetchingDetails = () => ({
    type: FETCHING_DETAILS,
})

const movieFetched = (movie) => ({
    type: DETAILS_FETCHED,
    payload: movie
})

const movieError = (error) => ({
    type: DETAILS_FETCH_ERROR,
    payload: error,
})

const loadMovie = (movieId) => async (dispatch) => {
        dispatch(startFetchingDetails());
        fetch("http://www.omdbapi.com/?i="+movieId+"&apikey=685a6224")
        .then(respons => respons.json())
        .then(data  => {
            dispatch(movieFetched(data));
        })
        .catch(
            (error) => {
                dispatch(movieError(error));
            }
        )
}

export {
    startFetchingDetails, movieFetched, movieError, loadMovie,
    FETCHING_DETAILS, DETAILS_FETCHED, DETAILS_FETCH_ERROR
}