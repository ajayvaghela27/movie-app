import MovieReducer from "./MovieReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  MovieReducer,
});

export default RootReducer;
