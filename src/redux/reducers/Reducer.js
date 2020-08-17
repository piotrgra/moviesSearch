import { combineReducers } from "redux";
import movies from "./Main";
import details from "./Details";

export default combineReducers({
  movies,
  details,
});