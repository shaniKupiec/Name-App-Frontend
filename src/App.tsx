import { HistoryList } from "./components/HistoryList";
import { NameData } from "./models/nameData.models";


export const App = () => {
  const historyList: NameData[] = [
    {
      name: 'shani'
    },
    {
      name: 'tamar'
    },
    {
      name: 'rotem'
    },
  ]
  return (
    <div className="">
     <HistoryList historyList={historyList} />
    </div>
  );
}

