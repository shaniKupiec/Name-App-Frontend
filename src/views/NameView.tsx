import { AddName } from "../components/AddName";
import { HistoryPreview } from "../components/HistoryPreview";
import { NameData } from "../models/nameData.models";
import moon from "../assets/images/moon.jpg";

export const NameView = ({ onSubmit, nameData }: { onSubmit: any; nameData: NameData | null }) => {
  return (
    <section className="name">
      <AddName onSubmit={onSubmit} />
      {nameData && <HistoryPreview nameData={nameData} />}
      <img className="name__img" src={moon} alt="" />
    </section>
  );
};
