import { NameData } from "../models/nameData.models";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const HistoryPreview = ({ nameData }: { nameData: NameData }) => {
  let className = "name-info__dot";
  className += nameData.gender === "male" ? " male" : "";

  const data = {
    labels: nameData.countries.map((c) => c.country_id),
    datasets: [
      {
        label: "",
        data: nameData.countries.map((c) => c.probability),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Probability In Different Countries",
      },
    },
  };

  return (
    <section className="name-info">
      <div className={className}></div>
      <div className="name-info__name">{nameData.name} </div>
      <div className="name-info__count">count : {nameData.count} </div>
      <div className="name-info__prob">probability : {nameData.probability} </div>
      <Bar options={options} data={data} />
    </section>
  );
};
