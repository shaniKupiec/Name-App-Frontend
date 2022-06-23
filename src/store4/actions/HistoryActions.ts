import { Dispatch } from "redux";
import { HISTORY_FAIL, HISTORY_LOADING, HISTORY_SUCCESS_SET, HISTORY_SUCCESS_PUSH, HistoryDispatchTypes } from "./HistoryActionTypes";
import axios from "axios";
import { NameData } from "../../models/nameData.models";

export const loadData = () => async (dispatch: Dispatch<HistoryDispatchTypes>) => {
  try {
    dispatch({
      type: HISTORY_LOADING,
    });

    const data = await axios.get("/historyList").then((res) => res.data);

    dispatch({
      type: HISTORY_SUCCESS_SET,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: HISTORY_FAIL,
    });
  }
};

export const addName = (name: string) => async (dispatch: Dispatch<HistoryDispatchTypes>) => {
  try {
    dispatch({
      type: HISTORY_LOADING,
    });

    const data: NameData = await axios.get(`/nameInfo/${name}`).then((res) => res.data);

    dispatch({
      type: HISTORY_SUCCESS_PUSH,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: HISTORY_FAIL,
    });
  }
};

export const clear = () => (dispatch: Dispatch<HistoryDispatchTypes>) => {
  try {
    dispatch({
      type: HISTORY_LOADING,
    });

    dispatch({
      type: HISTORY_SUCCESS_SET,
      payload: [],
    });
  } catch (e) {
    dispatch({
      type: HISTORY_FAIL,
    });
  }
};
