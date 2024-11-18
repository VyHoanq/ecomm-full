'use client'

import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);


export default function BestBookProductsChart() {
  // <block:setup:1>
  const data = {
    labels: [
      'Green Leaf Lettuce',
      'Rainbow Chard',
      'Clementine',
      'Parsley'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100, 200],
      backgroundColor: [
        '#fc9840',
        '#ff6361',
        '#6200ff',
        '#516395'
      ],
      borderColor: [
        '#ffcc70',
        '#86a8e7',
        '#eece13',
        '#516395'
      ],
      borderWidth: 1
    }]
  };
  // Cấu hình tùy chỉnh
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Vô hiệu hóa tỷ lệ mặc định
    plugins: {
      legend: {
        position: 'top', // Điều chỉnh vị trí legend

      },
    },
  };

  return (
    <div className='dark:bg-black bg-slate-50 p-8 rounded-lg shadow-sm flex justify-center items-center min-h-[400px]'>
      <div>
        <h2 className='text-xl font-bold  text-slate-800 dark:text-slate-100 left-6 '>
          Best Selling Products
        </h2>
        {/* Chart */}
        <div className='p-4' style={{ 'height': '350px', width: '350px' }} >
          <Pie data={data} width={100} height={100} options={options} />
        </div>
      </div>
    </div>
  )
}
