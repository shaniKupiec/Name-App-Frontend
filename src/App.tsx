import { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { HistoryView } from "./views/HistoryView";
import { NameView } from "./views/NameView";
import { NameData } from "./models/nameData.models";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootStore } from "./store4";
import { addName, clear, loadData } from "./store4/actions/HistoryActions";

export const App = () => {
  const dispatch = useDispatch();
  const historyState = useSelector((state: RootStore) => state.history);

  const [historyList, setHistoryList] = useState<NameData[]>([]);

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
    if(name === '') return
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