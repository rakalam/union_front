import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importer les styles
import '../composant/CalendarStyles.css'

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
    </>
  );
};

export default MonCalendrier;
