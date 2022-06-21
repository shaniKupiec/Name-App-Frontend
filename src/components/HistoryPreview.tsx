import { NameData } from "../models/nameData.models";

export const HistoryPreview = ({ nameData }: { nameData: NameData }) => {
  return (
    <section className="name-info">
      <div className="name-info__name">{nameData.name} </div>
    </section>
  );
};
