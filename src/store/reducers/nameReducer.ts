import { NameData } from "../../models/nameData.models";

const INITIAL_STATE: { historyList: NameData[] } = {
  historyList: [],
};

export function nameReducer(state = INITIAL_STATE, action: { type: "string"; data: NameData | NameData[] }) {
  switch (action.type as string) {
    case "SET_HISTORY_LIST":
      return {
        historyList: { ...action.data },
      };
    case "ADD_NAME":
      return {
        historyList: [action.data, ...state.historyList],
      };
    default:
      return state;
  }
}
