import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Clock from "../composant/pointage/Clock";
import MonCalendrier from "../composant/calendrier";
import ListeAbsent from "../composant/pointage/ListeAbsent";
import { IoMdAlarm, IoMdAlert, IoMdSave } from "react-icons/io";
import { FaSave } from "react-icons/fa";




const Absent = () => {


  return (
    <div className="px-2 pt-4 text-gray-900 dark:bg-black">

      <div className="bg-white rounded-[1em] dark:bg-[#131313] p-2 w-full">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-8 rounded-[1em] dark:bg-[#131313] bg-white ">
            <div className="grid w-full grid-cols-2 gap-4">

              {/* juste clock  */}
              <div className="bg-white rounded-lg shadow dark:bg-[#42424232] dark:text-gray-300 ">
                <Clock />
              </div>

              {/* style  */}
              <div className="bg-white rounded-lg shadow dark:bg-[#42424232] dark:text-gray-300">
              </div>
            </div>

            <div className="w-full px-3 py-2 my-4 bg-white rounded-lg shadow dark:bg-[#42424232]">
              <ListeAbsent />
            </div>


          </div>

          <div className="md:col-span-4 h-auto rounded-[1em]">
            {/* juste clock  */}
            <div className="p-4 bg-white rounded-lg shadow">
              <MonCalendrier />
            </div>
            <div className="w-full px-3 py-2 my-4 rounded-lg shadow h-[14em] bg-white dark:bg-[#42424232] dark:text-gray-300">

              <div className='flex items-center justify-between py-1'>
                <font className="text-[13px]"> Pointage Absent</font>
                <div className="flex items-center justify-center w-6 h-6 text-white rounded bg-orange_union">
                  <IoMdAlarm className='text-[12px]' />
                </div>
              </div>

              <form className="my-2">

                <div className="grid grid-cols-2 gap-y-2 ">
                  <label htmlFor="personnel" className="text-[12px]">Personnel</label>
                  <select name="" id="personnel" className="tailwind-form">
                    <option selected disabled>Selectionner personnel</option>
                    <option value="">Rakalam</option>
                    <option value="">Rakalam</option>
                    <option value="">Rakalam</option>
                    <option value="">Rakalam</option>
                  </select>
                  <label htmlFor="personnel" className="text-[12px]">Date</label>
                  <input type="date" name="" id="" className="tailwind-form" />
                  

                </div>

                <button className="flex items-center justify-center my-3 space-x-3 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded">
                  <FaSave />
                  <span className="hidden md:flex sm:hidden">Enregistrer</span>
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Absent;
