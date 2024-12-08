import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = () => {
  const data = {
    datasets: [
      {
        label: 'Expenses vs. Profits',
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 25 },
          { x: 20, y: 30 },
          { x: 25, y: 35 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      x: { title: { display: true, text: 'Expenses' } },
      y: { title: { display: true, text: 'Profits' } },
    },
  };

  return <ChartComponent type="scatter" data={data} options={options} />;
};

export default ScatterChart;
