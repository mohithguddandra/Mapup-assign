import { createStore, combineReducers } from "redux";
import regionReducer from "./Reducers";

const rootReducer = combineReducers({
  region: regionReducer,
});

const store = createStore(rootReducer);

export default store;
