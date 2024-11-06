import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Données du graphique


// Composant du chart
const MyAreaChart = () => {

  const [data, setData] = useState([]);

  // Fonction pour récupérer les données du backend
  const get_satat = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/donne_statistique');
      // Met à jour le state avec les données reçues
      setData(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données de statistiques : ", error);
    }
  };

  useEffect(() => {

    get_satat();

  }, []);


  return (
    <div style={{ width: "95%", height: 160 }} className="mt-10 text-[11px]">
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            {/* Dégradé pour la courbe UV (retards) */}
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff9f43" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff6f" stopOpacity={0} />
            </linearGradient>

            {/* Dégradé pour la courbe PV (absences) */}
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#09aac6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="rgb(128, 187, 238)" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Axe X avec les dates */}
          <XAxis dataKey="date" />

          {/* Axe Y pour les valeurs */}
          <YAxis />

          {/* Tooltip pour afficher les détails */}
          <Tooltip
            contentStyle={{ backgroundColor: "#333", border: "none" }} // Fond sombre
            labelStyle={{ color: "#fff" }} // Couleur du texte du label
            itemStyle={{ color: "#ff9f43" }} // Couleur des valeurs de `uv` (orange clair)
            cursor={{ stroke: "rgba(255,255,255,0.2)", strokeWidth: 2 }} // Indicateur de curseur plus visible
          />

          {/* Courbe PV (absences) */}
          <Area
            type="monotone"
            dataKey="absences"
            stroke="#09aac6"
            fillOpacity={1}
            fill="url(#colorPv)"
            strokeWidth={3}
            activeDot={{ r: 3 }}
          />

          {/* Courbe UV (retards) */}
          <Area
            type="monotone"
            dataKey="retards"
            stroke="#ff6f"
            fillOpacity={1}
            fill="url(#colorUv)"
            strokeWidth={3}
            activeDot={{ r: 3 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyAreaChart;
