import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NameData } from "../../models/nameData.models";
import type { RootState } from "../index";

// Define the initial state using that type
const initialState: NameData[] = [];

export const HistorySlice = createSlice({
  name: "history",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<NameData>) => {
      state.unshift(action.payload);
    },
  },
});

export const { add } = HistorySlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.history.value;

export default HistorySlice.reducer;
