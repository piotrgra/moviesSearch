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
    payload: error,
})

const fetchMovies = (search) => async (dispatch) => {
        if(search === undefined) {
            search = "harry potter";
        }
        dispatch(startFetching());
        fetch("http://www.omdbapi.com/?s="+search+"&apikey=685a6224&type=movie")
        .then(respons => respons.json())
        .then(data  => {
            dispatch(moviesFetched(data));
        })
        .catch(
            (error) => {
                dispatch(moviesError(error));
            }
        )
}

export {
    startFetching, moviesFetched, moviesError, fetchMovies,
    FETCHING, FETCHED, FETCH_ERROR
}