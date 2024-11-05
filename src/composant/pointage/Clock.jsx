import React, { useEffect, useState } from 'react'
import { FaClock, FaClosedCaptioning, FaPlay } from 'react-icons/fa';
import { FaClockRotateLeft } from 'react-icons/fa6';

const Clock = ({page}) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>

      <div className="bg-[#ffffff] rounded-lg dark:bg-[#00000000] ">
        <div className='flex items-center justify-between px-3 py-1'>
          <font className="mb-2 text-[13px]  text-gray-900 dark:text-gray-300">Horloge</font>
          <div className="flex items-center justify-center w-6 h-6 text-white rounded bg-orange_union">
            <FaClockRotateLeft className='text-[12px]' />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <div className='flex flex-col items-start justify-start p-2'>
            <div className="mb-4 text-3xl sm:text-[17px] lg:text-3xl font-semibold text-gray-800 dark:text-gray-300">
              {currentTime}
            </div>
            <button className="px-4 py-2 text-white bg-bleue_union_500 rounded text-[12px] flex items-center justify-center space-x-2">
              <FaPlay />
              <p>Heure Auto</p>
            </button>
          </div>

          <div>
              <font>Pointage {page}</font>
              <p className='text-gray-400 text-[0.8rem]'>
                 Bien regler l'heure avant de pointer un(e) {page} {" "}
                 pour evité les conflis
              </p>
          </div>
        </div>
      </div>


    </>
  )
}

export default Clock
