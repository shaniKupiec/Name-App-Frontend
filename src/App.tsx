import axios from "axios";
import { useEffect, useState } from "react";
import { AddName } from "./components/AddName";
import { HistoryList } from "./components/HistoryList";
import { NameData } from "./models/nameData.models";

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
    setHistoryList([])
  };

  return (
    <section className="app">
      <header className="app__header"></header>
      <main className="app__main">
        <HistoryList historyList={historyList} onClear={onClear} />
        <AddName onSubmit={onSubmit} />
      </main>
    </section>
  );
};
