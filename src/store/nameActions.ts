// import axios from "axios";
// import { NameData } from "../models/nameData.models"

// export function loadData() {
//   return async (dispatch: any) => {
//     try {
//       console.log("lodaing");
//       const data = await axios.get("/historyList").then((res) => res.data);
//       dispatch({ type: "SET_HISTORY_LIST", data });
//     } catch (err) {
//       console.log("err:", err);
//     }
//   };
// }

// export function addName(name: string) {
//   return async (dispatch: any) => {
//     try {
//       const data: NameData = await axios.get(`/nameInfo/${name}`).then((res) => res.data);
//       dispatch({ type: "ADD_NAME", data });
//     } catch (err) {
//       console.log("err:", err);
//     }
//   };
// }

// export function clear() {
//   return async (dispatch: any) => {
//     try {
//       await axios.delete("/historyList");
//       dispatch({ type: "SET_HISTORY_LIST", data: [] });
//     } catch (err) {
//       console.log("err:", err);
//     }
//   };
// }
export const x = 1;