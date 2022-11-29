import React, { lazy } from "react";
import Chart from "react-apexcharts";

const RPieChart = () => {
  const options = {
    chart: {
      animations: {
        enabled: true,
      },
    },
    labels: ["Comedy", "Action", "Romance", "Drama", "SciFi"],
  };
  const series = [4, 5, 6, 1, 5]; //our data

  return (
    <div className="donut">
      <Chart options={options} series={series} type="pie" width="380" />
    </div>
  );
};

export default RPieChart;
