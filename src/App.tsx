import axios from "axios";
import { useEffect, useState } from "react";
import { NameData } from "./models/nameData.models";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HistoryView } from "./views/HistoryView";
import { NameView } from "./views/NameView";

export const App = () => {
  const [historyList, setHistoryList] = useState<NameData[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios
      .get("/historyList")
      .then((res) => res.data)
      .then((data) => setHistoryList(data));
  };

  const onSubmit = async (name: string) => {
    const data: NameData = await axios.get(`/nameInfo/${name}`).then((res) => res.data);
    setHistoryList((prevState) => [...prevState, data]);
    // .then((res) => console.log('res',res));
  };

  const onClear = async () => {
    await axios.delete("/historyList");
    setHistoryList([]);
  };

  const lastName = historyList.length ? historyList[historyList.length - 1] : null

  return (
    <BrowserRouter>
      <section className="app">
        <header className="app__header">
          <Link to="/history">History </Link>
          <Link to="/"> one</Link>
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
