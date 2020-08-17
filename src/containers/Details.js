import Details from "../components/Details";
import { connect } from "react-redux";
import { loadMovie } from "../redux/actions/details";

const mapState = (state) => ({
    loadingMovie: state.details.loadingMovie,
    data: state.details.data,
})

const mapDispatch = (dispatch) => ({
    loadMovie: (movieId) => dispatch(loadMovie(movieId)),
})

export default connect(mapState, mapDispatch)(Details);