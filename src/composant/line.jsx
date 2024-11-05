import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Données du graphique
const data = [
  { name: "Jan", uv: 45, pv: 44, amt: 294 },
  { name: "Feb", uv: 49, pv: 53, amt: 22 },
  { name: "Mar", uv: 39, pv: 78, amt: 22 },
  { name: "Apr", uv: 47, pv: 58, amt: 20 },
  { name: "May", uv: 58, pv: 48, amt: 21 },
  { name: "Jun", uv: 23, pv: 38, amt: 25 },
  { name: "Jun", uv: 33, pv: 58, amt: 25 },

  
  // { name: "Jun", uv: 23, pv: 48, amt: 25 },
  // { name: "Jun", uv: 33, pv: 38, amt: 25 },
  // { name: "Jun", uv: 43, pv: 68, amt: 25 },
  // { name: "Jun", uv: 53, pv: 40, amt: 25 },
  // { name: "Jun", uv: 23, pv: 30, amt: 25 },


];

// Composant du chart
const MyAreaChart = () => {
  return (
    <div style={{ width: "95%", height: 160 }} className="mt-10 text-[11px]">
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            {/* Dégradé pour la courbe UV (purple/rose) */}
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff9f43" stopOpacity={0.8} />{" "}
              {/* Orange clair */}
              <stop offset="95%" stopColor="#ff6f" stopOpacity={0} />{" "}
              {/* Orange plus foncé */}
            </linearGradient>

            {/* Dégradé pour la courbe PV (orange) */}
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#09aac6" stopOpacity={0.8} />{" "}
              {/* Rose vif */}
              <stop offset="95%" stopColor="rgb(128, 187, 238)" stopOpacity={0} />{" "} 
              {/* Purple plus foncé */}
            </linearGradient>
          </defs>

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          {/* Courbe PV (orange) */}
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#09aac6" // Couleur de la ligne orange
            fillOpacity={1}
            fill="url(#colorPv)" // Remplissage avec le dégradé orange
            strokeWidth={3} // Largeur de la ligne
            // dot={{ r: 3, stroke: '#ff6f', strokeWidth: 2 }} 
            activeDot={{ r: 3 }} // Point agrandi sur hover
          />

          {/* Courbe UV (purple/rose) */}
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#ff6f" // Couleur de la ligne purple/rose
            fillOpacity={1}
            fill="url(#colorUv)" // Remplissage avec le dégradé purple/rose
            strokeWidth={3} // Largeur de la ligne
            // dot={{ r: 1, stroke: '#c94bdb', strokeWidth: 1 }} 
            activeDot={{ r: 3 }} // Point agrandi sur hover
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyAreaChart;
