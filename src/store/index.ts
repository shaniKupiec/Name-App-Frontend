// // import { configureStore } from "@reduxjs/toolkit";
// // import { createStore, applyMiddleware } from "redux";
// // import thunk from "redux-thunk";
// // import { ActionTypes } from "./actions";

// import { createAsyncThunk, configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
// import thunk from "redux-thunk";
// import { NameData } from "../models/nameData.models";
// import axios from "axios";

// export interface Store {
//   historyList: NameData[];
//   loading: 'idle' | 'pending' | 'succeeded' | 'failed'
// }
// const initialState: Store = {
//   historyList: [],
//   loading: 'idle',
// };

// const fetchHistoryList = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (_, thunkAPI) => {
//     const response = await axios.get("/historyList").then((res) => res.data);
//     return response.data
//   }
// )

// const fetchAddName= createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (name: string, thunkAPI) => {
//     const response = await axios.get(`/nameInfo/${name}`).then((res) => res.data);
//     return response.data
//   }
// )

// export const historyReducer = createSlice({
//   name:'history',
//   initialState,
//   reducers: {},
//   extraReducers: (builder: any) => {
//         // Add reducers for additional action types here, and handle loading state as needed
//         builder.setHistoryList(fetchHistoryList.fulfilled, (state: Store, action: any) => {
//           // Add user to the state array
//           state.historyList = action.payload
//           // return state
//         }),
//         builder.addName(fetchAddName.fulfilled, (state: Store, action: any) => {
//           // Add user to the state array
//           state.historyList.push(action.payload)
//           // return state
//         })
//       },
// })

// // export const { setHistoryList, addName } = historyReducer;
// console.log('historyReducer',historyReducer)

// const store = configureStore({
//   reducer: {
//     history: historyReducer.reducer,
//   },
// });

// type RootState = ReturnType<typeof store.getState>;

// export const selectHistory = (state: RootState) => state.history.historyList;

// export default store;

export const x = 1;
