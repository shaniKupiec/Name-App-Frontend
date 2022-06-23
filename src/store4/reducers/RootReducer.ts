import { combineReducers } from "redux";
import historyReducer from "./HistoryReducer";

const RootReducer = combineReducers({
  history: historyReducer,
});

export default RootReducer;
