
import { NameData } from "../models/nameData.models";
import { HistoryPreview } from "./HistoryPreview";

export const HistoryList = ({ historyList, onClear }: { historyList: NameData[], onClear: any }) => {

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
