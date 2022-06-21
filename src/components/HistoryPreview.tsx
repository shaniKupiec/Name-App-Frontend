import { NameData } from "../models/nameData.models";

export const HistoryPreview = ({ nameData }: { nameData: NameData }) => {
  let className = 'name-info__dot'
  className += nameData.gender === 'male' ? ' male' : ''
  return (
    <section className="name-info">
      <div className={className}></div>
      <div className="name-info__name">{nameData.name} </div>
      <div className="name-info__count">count : {nameData.count} </div>
      <div className="name-info__prob">probability : {nameData.probability} </div>
      <div>chart!</div>
    </section>
  );
};
