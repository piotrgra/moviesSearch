import MoviesList from "../components/MoviesList";
import { connect } from "react-redux";
import { fetchMovies } from "../redux/actions/actions";

const mapState = (state) => ({
    loading: state.movies.loading,
    error: state.movies.error,
    movies: state.movies.movies,
    totalResults: state.movies.totalResults,
})

const mapDispatch = (dispatch) => ({
    fetchMovies: () => dispatch(fetchMovies()),

})

export default connect(mapState, mapDispatch)(MoviesList);