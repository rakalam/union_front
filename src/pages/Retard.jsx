import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useQuery} from '@tanstack/react-query'
import ResponsiveDateTimePickers from "../composant/blur";

// Composant Horloge
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-gray-700 text-xl font-bold mb-2">Horloge</h2>
      <div className="text-3xl font-semibold text-gray-800 mb-4">
        {currentTime}
      </div>
      <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Commencer la journée
      </button>
    </div>
  );
};

const Retard = () => {


  return (
    <div className="text-gray-900 bg-white p-4 mx-2 my-4 rounded-[1em]">
      <div className="grid grid-cols-12 gap-4">
        {/* Première colonne - Horloge et Calendrier */}
        <div className="col-span-3 space-y-4">
          {/* Horloge */}
          <div className="shadow-lg rounded-lg p-4 bg-white">
            <Clock />
          </div>
          {/* Calendrier */}
          <div className="shadow-lg rounded-lg p-4 bg-white">
         

          </div>
        </div>

        {/* Deuxième colonne */}
        <div className="col-span-4 shadow-lg rounded-lg bg-white p-4">
          {/* Contenu ici */}
        </div>

        {/* Troisième colonne */}
        <div className="col-span-5 shadow-lg rounded-lg bg-white p-4">
         

                  <ResponsiveDateTimePickers />


        </div>
      </div>
    </div>
  );
};

export default Retard;
