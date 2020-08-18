import Watched from "../components/Watched";
import { connect } from "react-redux";

const mapState = (state) => ({
    movies: state.movies.watched,
})



export default connect(mapState)(Watched);