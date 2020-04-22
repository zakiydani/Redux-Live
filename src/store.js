import { createStore } from "redux";
import counterReducers from "./Reducers/counterReducers";

export default createStore(counterReducers);
