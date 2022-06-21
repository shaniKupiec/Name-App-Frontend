// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { NameData } from "../models/nameData.models";
// import type { RootState } from "./index";
// import axios from "axios";
export const x = 1;

// // Define the initial state using that type
// const initialState: NameData[] = [];

// export const HistorySlice = createSlice({
//   name: "history",
//   // `createSlice` will infer the state type from the `initialState` argument
//   initialState,
//   reducers: {
//     loadData: (state) => {
//       state = await axios.get("/historyList").then((res) => res.data);
//     },
//     addName: (state, action: PayloadAction<string>) => {
//       const data: NameData = await axios.get(`/nameInfo/${action.payload}`).then((res) => res.data);
//       state.unshift(data);
//     },
//     clear: (state) => {
//       await axios.delete("/historyList");
//       state = [];
//     },
//   },
// });

// export const { loadData, addName, clear } = HistorySlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectHistory = (state: RootState) => state.history;

// export default HistorySlice.reducer;
