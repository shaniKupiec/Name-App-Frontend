import { AddName } from "../components/AddName";
import { HistoryPreview } from "../components/HistoryPreview";
import { NameData } from "../models/nameData.models";
import moon from "../assets/images/moon.jpg";

export const NameView = ({ onSubmit, nameData }: { onSubmit: any; nameData: NameData | null }) => {
  return (
    <section className="name">
      <div className="name__quote">
        "words have meaning and names have 
        <span className="name__quote__word"> power"</span>
      </div>
      <AddName onSubmit={onSubmit} />
      {nameData && <HistoryPreview nameData={nameData} />}
      <img className="name__img" src={moon} alt="" />
    </section>
  );
};
