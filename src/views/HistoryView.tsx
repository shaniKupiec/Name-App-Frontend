import { NameData } from "../models/nameData.models";
import { HistoryPreview } from "../components/HistoryPreview";

export const HistoryView = ({ historyList, onClear }: { historyList: NameData[]; onClear: Function }) => {
  return (
    <section className="history">
      <div className="history__title">History List: </div>
      <section className="history__list">
        {historyList.map((nameData: NameData) => (
          <HistoryPreview key={nameData.id} nameData={nameData} />
        ))}
      </section>
      <button className="history__clear" onClick={() => onClear()}>
        clear history
      </button>
    </section>
  );
};
