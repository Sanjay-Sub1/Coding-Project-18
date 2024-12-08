import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    }

    const chart = new ChartJS(chartRef.current, {
      type: type,
      data: data,
      options: options
    });

    chartRef.current.chart = chart;

    return () => {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, [data, options, type]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;

