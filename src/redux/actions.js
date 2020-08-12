const FETCHING = "FETCHING";
const FETCHED = "FETCHED";
const FETCH_ERROR = "FETCH_ERROR";

const startFetching = () => ({
    type: FETCHING,
})

const moviesFetched = (movies) => ({
    type: FETCHED,
    payload: movies
})

const moviesError = (error) => ({
    type: FETCH_ERROR,
})

const fetchMovies = () => dispatch => {
    return () => {
        dispatch(startFetching());

        fetch("http://www.omdbapi.com/?s=%22star%22&apikey=685a6224").fetchMovies().then(
            (respons) => {
                dispatch(moviesFetched(respons));
            }
        ).catch(
            (error) => {
                dispatch(moviesError(error));
            }
        )
    }
}

export {
    startFetching, moviesFetched, moviesError, fetchMovies,
    FETCHING, FETCHED, FETCH_ERROR
}