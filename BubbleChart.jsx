import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = () => {
  const data = {
    datasets: [
      {
        label: 'Sales, Profits, and Expenses',
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 15, y: 25, r: 10 },
          { x: 20, y: 30, r: 20 },
          { x: 25, y: 35, r: 25 },
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      x: { title: { display: true, text: 'Sales' } },
      y: { title: { display: true, text: 'Profits' } },
    },
  };

  return <ChartComponent type="bubble" data={data} options={options} />;
};

export default BubbleChart;
