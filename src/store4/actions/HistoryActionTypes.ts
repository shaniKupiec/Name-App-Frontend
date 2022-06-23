import { NameData } from "../../models/nameData.models";

export const HISTORY_LOADING = "HISTORY_LOADING";
export const HISTORY_FAIL = "HISTORY_FAIL";
export const HISTORY_SUCCESS_SET = "HISTORY_SUCCESS";
export const HISTORY_SUCCESS_PUSH = "HISTORY_SUCCESS_PUSH";

export interface HistoryLoading {
  type: typeof HISTORY_LOADING
}

export interface HistoryFail {
  type: typeof HISTORY_FAIL
}

export interface HistorySuccessPush {
  type: typeof HISTORY_SUCCESS_PUSH,
  payload: NameData
}

export interface HistorySuccessSet {
  type: typeof HISTORY_SUCCESS_SET,
  payload: NameData[]
}

export type HistoryDispatchTypes = HistoryLoading | HistoryFail | HistorySuccessSet | HistorySuccessPush