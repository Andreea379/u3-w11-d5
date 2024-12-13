import { combineReducers } from "@reduxjs/toolkit";
import songReducer from "../reducers/song";
import searchReducer from "../reducers/search";

const mainReducer = combineReducers({
  song: songReducer,
  search: searchReducer
});
export default mainReducer;
