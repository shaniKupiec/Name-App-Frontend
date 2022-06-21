import { AddName } from "./components/AddName";
import { HistoryList } from "./components/HistoryList";
import { NameData } from "./models/nameData.models";

export const App = () => {
  const historyList: NameData[] = [
    {
      name: "shani",
    },
    {
      name: "tamar",
    },
    {
      name: "rotem",
    },
  ];
  return (
    <section className="app">
      <header className="app__header"></header>
      <main className="app__main">
        {/* <HistoryList historyList={historyList} /> */}
        <AddName />
      </main>
    </section>
  );
};
