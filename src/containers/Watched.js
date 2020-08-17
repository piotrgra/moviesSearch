import Watched from "../components/Watched";
import { connect } from "react-redux";

const mapState = (state) => ({
    movies: state.movies.movies,
    totalResults: state.movies.totalResults, //TODO
})



export default connect(mapState)(Watched);