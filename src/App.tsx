import { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { HistoryView } from "./views/HistoryView";
import { NameView } from "./views/NameView";
import { NameData } from "./models/nameData.models";
import axios from "axios";
// import { useAppDispatch, useAppSelector } from "./hooks";
// import { useSelector, useDispatch } from "react-redux";
// import { addName, clear, loadData } from "./store/actions/nameActions";

export const App = () => {
  // const { historyList }: { historyList: NameData[] } = useAppSelector((state) => {
  //   return state.nameModule;
  // });
  // const dispatch = useAppDispatch();
  const [historyList, setHistoryList] = useState<NameData[]>([]);
  console.log("historyList", historyList);

  useEffect(() => {
    // dispatch(loadData());
    loadData();
  }, []);

  const loadData = async () => {
    const data = await axios.get("/historyList").then((res) => res.data);
    setHistoryList(data);
  };

  const onSubmit = async (name: string) => {
    // dispatch(addName(name));
    const data: NameData = await axios.get(`/nameInfo/${name}`).then((res) => res.data);
    setHistoryList((prevState) => [data, ...prevState]);
  };

  const onClear = async () => {
    // dispatch(clear());
    await axios.delete("/historyList");
    setHistoryList([]);
  };

  const lastName = historyList.length ? historyList[0] : null;

  return (
    <BrowserRouter>
      <section className="app">
        <header className="app__header">
          <NavLink to="/">new name</NavLink>
          <NavLink to="/history">History</NavLink>
        </header>
        <main className="app__main">
          <Routes>
            <Route path="/history" element={<HistoryView onClear={onClear} historyList={historyList} />} />
            <Route path="/" element={<NameView onSubmit={onSubmit} nameData={lastName} />} />
          </Routes>
        </main>
      </section>
    </BrowserRouter>
  );
};
