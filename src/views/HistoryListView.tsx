
import { NameData } from "../models/nameData.models";
import { HistoryPreview } from "../components/HistoryPreview";

export const HistoryListView = ({ historyList, onClear }: { historyList: NameData[], onClear: any }) => {

  return (
    <section className="color-list">
      <div>History List: </div>
      {historyList.map((nameData: NameData) => (
        <HistoryPreview key={nameData.id} nameData={nameData} />
      ))}
      <button onClick={onClear}>clear history</button>
    </section>
  );
};
