const FETCHING = "FETCHING";
const FETCHED = "FETCHED";
const FETCH_ERROR = "FETCH_ERROR";
const ADD_WATCH = "ADD_WATCH"
const WATCHED = "WATCHED";

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

const addWatch = (movieId) => ({
    type: ADD_WATCH,
    payload: movieId,
})

const watched = (movieId, stars) => ({
    type: WATCHED,
    payload: {movieId: movieId, stars: stars},
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
    startFetching, moviesFetched, moviesError, fetchMovies, addWatch, watched,
    FETCHING, FETCHED, FETCH_ERROR, ADD_WATCH, WATCHED
}