import { NameData } from "../../models/nameData.models";
import {
  HISTORY_FAIL,
  HISTORY_LOADING,
  HISTORY_SUCCESS_SET,
  HISTORY_SUCCESS_PUSH,
  HistoryDispatchTypes,
} from "../actions/HistoryActionTypes";

interface DefaultStateI {
  loading: boolean,
  history?: NameData[]
}

const defaultState: DefaultStateI = {
  loading: false
};

const historyReducer = (state: DefaultStateI = defaultState, action: HistoryDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case HISTORY_FAIL:
      return {
        loading: false,
      }
    case HISTORY_LOADING:
      return {
        loading: true,
      }
    case HISTORY_SUCCESS_SET:
      return {
        loading: false,
        history: action.payload
      }
    case HISTORY_SUCCESS_PUSH:
      return {
        loading: false,
        // history: state.history?.push(action.payload),
      }
    default:
      return state
  }
};


export default historyReducer