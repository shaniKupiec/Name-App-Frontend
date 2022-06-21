
import { NameData } from "../models/nameData.models";
import { HistoryPreview } from "./HistoryPreview";

export const HistoryList = ({ historyList }: { historyList: NameData[] }) => {

  return (
    <section className="color-list">
      <div>History List: </div>
      {historyList.map((nameData: NameData) => (
        <HistoryPreview key={nameData.name} nameData={nameData} />
      ))}
    </section>
  );
};
