import createStore from "redux";
import { combineReducers } from "redux";

const rootRenderer = combineReducers();

const store = createStore(rootRenderer);

export default store;