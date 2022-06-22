// import { ThunkAction } from "redux-thunk";
// import { Action } from "redux";
import { NameData } from "../models/nameData.models";
// import { Store } from "./store";
// import axios from "axios";
import { useCallback, useReducer } from "react";

type ActionType = { type: "SET_HISTORY_LIST"; data: NameData[] } | { type: "ADD_NAME"; data: NameData };

export function useHistory(initialHistory: NameData[]): {
  historyList: NameData[];
  setHistoryList: (data: NameData[]) => void;
  addName: (data: NameData) => void;
} {
  const [historyList, dispatch] = useReducer((state: NameData[], action: ActionType) => {
    switch (action.type) {
      case "SET_HISTORY_LIST":
        return action.data;
      case "ADD_NAME":
        return [action.data, ...state];
      default:
        return state;
    }
  }, initialHistory);

  const setHistoryList = useCallback((data: NameData[]) => {
    dispatch({
      type: "SET_HISTORY_LIST",
      data,
    });
  }, []);

  const addName = useCallback((data: NameData) => {
    dispatch({
      type: "ADD_NAME",
      data,
    });
  }, []);

  return { historyList, setHistoryList, addName };
}