import { useEffect } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { HistoryView } from "./views/HistoryView";
import { NameView } from "./views/NameView";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addName, clear, loadData } from "./store/actions/nameActions";
import { NameData } from "./models/nameData.models";

export const App = () => {
  const { historyList }: { historyList: NameData[] } = useAppSelector((state) => {
    console.log("state", state);
    console.log("state.nameModule.historyList", state.nameModule);
    return state.nameModule;
  });
  console.log("historyList", historyList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(loadData());
  }, []);

  const onSubmit = async (name: string) => {
    // dispatch(addName(name));
  };

  const onClear = async () => {
    // dispatch(clear());
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
