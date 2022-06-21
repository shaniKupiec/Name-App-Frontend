import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { NameData } from "../models/nameData.models";
import { ActionTypes } from "./actions";

export interface Store {
  historyList: NameData[];
}
const initialState: Store = {
  historyList: []
};

// Redux implementation
function historyReducer(state = initialState, action: ActionTypes)  {
  switch (action.type as string) {
    case "SET_HISTORY_LIST":
      return {
        historyList: { ...action.payload },
      };
    case "ADD_NAME":
      return {
        historyList: [action.payload, ...state.historyList],
      };
    default:
      return state;
  }
}

// const store = createStore(historyReducer, applyMiddleware(thunk));

// export default store;

