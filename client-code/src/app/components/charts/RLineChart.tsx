import React from "react";
import ReactApexChart from "react-apexcharts";

const RLineChart = () => {
  const options = {
    chart: {
      animations: {
        enabled: true,
      },
      height: 350,
      zoom: {
        enabled: true,
      },
    },
  };

  const series = [
    {
      name: "All Tasks",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "My Tasks",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        width={380}
      />
    </div>
  );
};

export default RLineChart;
