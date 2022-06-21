import { AddName } from "../components/AddName";
import { HistoryPreview } from "../components/HistoryPreview";
import { NameData } from "../models/nameData.models";

export const NameView = ({ onSubmit, nameData }: { onSubmit: any; nameData: NameData | null }) => {
  return (
    <section className="app">
      <AddName onSubmit={onSubmit} />
      {nameData && <HistoryPreview nameData={nameData} />}
    </section>
  );
};
