import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { NameData } from "../models/nameData.models";
import { Store } from "./store";
import axios from "axios";

export type ActionTypes = { type: "SET_HISTORY_LIST"; payload: NameData[] } | { type: "ADD_NAME"; payload: NameData };

export const loadData = (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  const data = await axios.get("/historyList").then((res) => res.data);
  dispatch({ type: "SET_HISTORY_LIST", data });
};

export const addName =
  (name: string): ThunkAction<void, Store, unknown, Action<string>> =>
  async (dispatch) => {
    const data: NameData = await axios.get(`/nameInfo/${name}`).then((res) => res.data);
    dispatch({ type: "ADD_NAME", data });
  };

export const clear = (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  await axios.delete("/historyList");
  dispatch({ type: "SET_HISTORY_LIST", data: [] });
};
