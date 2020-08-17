import PlaceHolder from "../components/PlaceHolder";
import { connect } from "react-redux";
import { addWatch, watched } from "../redux/actions/actions";

const mapState = (state) => ({
    addWatch: state.movies.addWatch,
})

const mapDispatch = (dispatch) => ({
    addToWishlist: (movieId) => dispatch(addWatch(movieId)),
    addToWatched: (movieId, stars) => dispatch(watched(movieId, stars))
})

export default connect(mapState, mapDispatch)(PlaceHolder);