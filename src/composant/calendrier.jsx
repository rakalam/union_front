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
    <div className='w-[15em] h-[6rem]'>
      <h1>Calendrier</h1>
      <Calendar onChange={onChange} value={date} />
      <p>Date sélectionnée : {date.toDateString()}</p>
    </div>
  );
};

export default MonCalendrier;
