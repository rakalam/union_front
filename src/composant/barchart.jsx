import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
];

const MyBarChart = () => {
  const radius = 5; // Ajuste le rayon des coins ici

  return (
    <div style={{ width: "100%", height: 160 , fontSize:'11px'}}>
      <ResponsiveContainer>
        <BarChart data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" /> */}
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="pv"
            fill="#c7c7c6b9"
            radius={[15, 15, 0, 0]} // Coins arrondis pour la barre pv
          />
          <Bar
            dataKey="uv"
            fill="rgb(74, 197, 228)"
            radius={[15, 15, 0, 0]} // Coins arrondis pour la barre uv
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;
