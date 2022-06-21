import { HistoryList } from "../components/HistoryList";
import { NameData } from "../models/nameData.models";

export const HistoryView = ({ historyList, onClear }: { historyList: NameData[]; onClear: any }) => {
  return (
    <section className="history">
      <HistoryList historyList={historyList} onClear={onClear} />
    </section>
  );
};
