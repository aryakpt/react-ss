import React from "react";
import { ChartBar } from "../";
import "./Chart.css";
const Chart = ({ dataPoints }) => {
  const totalValues = dataPoints.reduce((acc, dataPoint) => acc + dataPoint.value, 0);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint, index) => {
        return <ChartBar key={index} value={dataPoint.value} maxValue={totalValues} label={dataPoint.label} />;
      })}
    </div>
  );
};

export default Chart;
