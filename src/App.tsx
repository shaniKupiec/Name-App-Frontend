import axios from "axios";
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

  const onSubmit = async (name: string) => {
    console.log("name", name);
    await axios
      .get("try")
      .then((res) => res.data)
      .then((res) => console.log("res", res));
    // await axios
    //   .get(`/nameInfo/${name}`)
    //   .then((res) => res.data)
    //   .then((res) => console.log('res',res));
  };

  return (
    <section className="app">
      <header className="app__header"></header>
      <main className="app__main">
        {/* <HistoryList historyList={historyList} /> */}
        <AddName onSubmit={onSubmit} />
      </main>
    </section>
  );
};
