import { combineReducers } from "redux";
import CounterSlice from "./features/counter/counterSlice";

const rootReducers = combineReducers({
    counter: CounterSlice,
});

export default rootReducers;