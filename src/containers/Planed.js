import Planed from "../components/Planed";
import { connect } from "react-redux";

const mapState = (state) => ({
    movies: state.movies.addWatch,
})

export default connect(mapState)(Planed);