import React, { useState, useEffect } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CpuUsageChart = () => {
  const [dataFromApi, setDataFromApi] = useState([]);

  const dataPoints = dataFromApi.map((item) => ({
    x: new Date(item.created_at),
    y: parseFloat(item.cpu_usage),
  }));

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token"); 

      try {
        const response = await fetch(
          "http://10.150.0.31:3002/api/user/all-docker-stats",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setDataFromApi(result.data.rows);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    fetchData();
  }, []);


  

  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "CPU Usage Over Time",
    },
    axisX: {
      valueFormatString: "DD MMM HH:mm",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    axisY: {
      title: "CPU Usage (%)",
      valueFormatString: "##0.00",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    data: [
      {
        type: "line",
        xValueFormatString: "DD MMM HH:mm",
        yValueFormatString: "##0.00",
        dataPoints: dataPoints,
      },
    ],
  };

  return (
    <div className="chart-container h-[200px] w-full">
    <CanvasJSChart
      options={options}
      style={{ height: '300%', width: '100%' }} // Ensure the chart takes full height and width
    />
  </div>
  );
};

export default CpuUsageChart;
