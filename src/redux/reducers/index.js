import { combineReducers } from "redux";
import { resultsReducer } from "./resultsReducer";
const reducers = combineReducers({
  allResults: resultsReducer,
 
});
export default reducers;