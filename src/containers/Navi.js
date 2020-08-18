import Navi from "../components/Navi";
import {connect} from "react-redux";
import { fetchMovies } from "../redux/actions/actions";

const mapDispatch = (dispatch) => ({
    fetchMovies: (searchWord) => dispatch(fetchMovies(searchWord)),
})

export default connect(null, mapDispatch)(Navi);