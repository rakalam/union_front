import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Données du graphique
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

// Composant du graphique
const MyPieChart = () => {
  return (
    <div style={{ width: "100%", height: 200, fontSize: "11px" }}>
      <ResponsiveContainer>
        <PieChart >
          <defs>
            {/* Dégradé pour Group A (orange) */}
            <linearGradient id="gradGroupA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffcc80" /> {/* Orange clair */}
              <stop offset="100%" stopColor="#ff6f00" /> {/* Orange vif */}
            </linearGradient>
            
            {/* Dégradé pour Group B (vert) */}
            <linearGradient id="gradGroupB" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#81e5d9" /> {/* Vert clair */}
              <stop offset="100%" stopColor="#008b5b" /> {/* Vert foncé */}
            </linearGradient>
            
            {/* Dégradé pour Group C (bleu) */}
            <linearGradient id="gradGroupC" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#81c3f6" /> {/* Bleu clair */}
              <stop offset="100%" stopColor="#003366" /> {/* Bleu foncé */}
            </linearGradient>
            
            {/* Dégradé pour Group D (rouge) */}
            <linearGradient id="gradGroupD" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff8a8a" /> {/* Rouge clair */}
              <stop offset="100%" stopColor="#c0392b" /> {/* Rouge foncé */}
            </linearGradient>
          </defs>

          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={(entry) => entry.name}
            innerRadius={70} // Rayon intérieur pour l'effet "donut"
            outerRadius={100} // Rayon extérieur
            paddingAngle={5} // Espacement entre les segments
            cornerRadius={10} // Rayon pour arrondir les coins
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#gradGroup${String.fromCharCode(65 + index)})`} // Utilisation des dégradés
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyPieChart;
