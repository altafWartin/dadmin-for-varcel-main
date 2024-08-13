import React, { useState, useEffect } from "react";
import CanvasJSReact from "@canvasjs/react-charts";


const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const MemoryUsageChart = () => {
  // Format the data for CanvasJS
  const [dataFromApi, setDataFromApi] = useState([]);

  const dataPoints = dataFromApi.map((item) => ({
    x: new Date(item.created_at),
    y: parseFloat(item.memory_usage),
  }));

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token"); // Get the token from localStorage

      try {
        const response = await fetch(
          "http://10.150.0.31:3002/api/user/all-docker-stats",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // Include the Authorization header
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
  }, []); // Empty dependency array means this effect runs once on mount

  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Memory Usage Over Time",
    },
    axisX: {
      valueFormatString: "DD MMM HH:mm",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    axisY: {
      title: "Memory Usage (MB)",
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
    <div className="">

      <CanvasJSChart options={options} /* onRef={ref => this.chart = ref} */ />
    </div>
  );
};

export default MemoryUsageChart;
