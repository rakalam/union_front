import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importer les styles

const MonCalendrier = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
    console.log(date); // Afficher la date sélectionnée
  };

  return (
    <>
      <Calendar
        onChange={onChange}
        value={date}
      />

<style jsx>{`
      
    .react-calendar {
      width: 100%;
      border: none;
      font-family: 'myFont';
      border-radius: 0.5rem;
      ${
        localStorage.getItem('theme') === "dark" ?
        'background: transparent;'
         :
        'background: white;'
      }
     
    }
    .react-calendar__navigation{
      /* background: #09aac6; */
      border-radius: 5px;
      
    }
    .react-calendar__navigation button {
      font-weight: bold;
      font-size: 11px;
      border: none;
      border-radius: 999px;
      /* background-color: red; */
      padding: -5px;
         ${
        localStorage.getItem('theme') === "dark" ?
        'color: white;'
         :
        'color: #111827;'
      }
     
    }
    
    .react-calendar__navigation button:hover {
      border-radius: 999px;
    }
    
    .react-calendar__tile {
      text-align: center;
      padding: 10px;
      
      border-radius: 999px;
      font-weight: bold;
      color: #111827;
      font-size: 10px;

      ${
        localStorage.getItem('theme') === "dark" ?
        'color: white;background: transparent'
         :
        'color: #111827;background: white;'
        
        
      }
    }
    
    .react-calendar__tile--active {
     
      color: white;
      font-weight: bold;
      border-radius: 999px;
     ${
        localStorage.getItem('theme') === "dark" ?
        'background: transparent;'
         :
        ' background: #c1c1c1;'
      }
    }
    
    .react-calendar__tile--active:enabled:hover {
      background: #c1c1c1;
    }
    
    .react-calendar__tile--now {
      background: #e5e7eb;
      color: #111827;
      border-radius: 999px;
    }
    
    .react-calendar__month-view__weekdays {
      text-transform: capitalize;
      font-weight: 800;
      font-size: 11px;
      text-decoration: none;
       ${
        localStorage.getItem('theme') === "dark" ?
        'color: #e6631f;'
         :
        'color: #09aac6;'
      }
    }
    
    .react-calendar__month-view__days__day--weekend {
    
      font-weight: 800;
      font-size: 15px;
        ${
        localStorage.getItem('theme') === "dark" ?
        'color: #e6631f;'
         :
        'color: #09aac6;'
      }
    }
    
        
        `}
        </style>

    </>
  );
};

export default MonCalendrier;
