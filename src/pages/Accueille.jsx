import React, { useEffect } from 'react'
import "../composant/acceuille.css"
import { FaChartLine, FaDotCircle, FaHeartbeat, FaSearch, FaStar } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa6'
import { TbActivityHeartbeat, TbActivity } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

const Accueille = () => {

  const ary = useNavigate()

  const commencer = () => {
    ary('/logic')
  }

  useEffect(() => {

    ScrollReveal({
      reset: true,
      distance: '60px',
      duration: 2000,
      deley: 400
    });

    ScrollReveal().reveal('.bb button', { deley: 100, origin: 'top', interval: 300 });

    ScrollReveal().reveal('.aa h6', { deley: 100, origin: 'top', interval: 300 });
    ScrollReveal().reveal('.aa p', { deley: 100, origin: 'top', interval: 300 });

  }, [])

  return (
    <div className=''>
      <div
        className='flex flex-col items-center justify-center h-screen overflow-hidden sm:items-start sm:justify-start entrourage'>

        <img src="../image_union/saturne.png" alt="" srcset="" className='absolute z-10 rounded-full top-[8rem] left-6' />
        <FaStar className='absolute z-10 text-gray-200 top-[10rem] left-[33vw]' />
        <FaStar className='absolute z-10 text-gray-200 top-[9rem] left-[29vw]' />
        <FaStar className='absolute z-10 text-gray-200 top-[6.5rem] left-[32vw]' />
        <FaStar className='absolute z-10 text-gray-200 top-[12rem] left-[25vw]' />

        <FaDotCircle className='absolute z-10 text-gray-200 bottom-[4rem] left-[2vw]' />
        <FaDotCircle className='absolute z-10 text-gray-200 bottom-[6rem] left-[3vw]' />
        <FaDotCircle className='absolute z-10 text-gray-300 bottom-[5rem] left-[5vw]' />


        <div className='mx-[6vw] m-[4rem] z-30'>
          <div className="flex items-center justify-center w-full -mb-8 sm:mb-3">
            <div className="rounded">
              <img src="../image_union/logo_union.svg" alt="logo" className="w-8" />
            </div>
            <div className="ml-2">
              <p className="font-bold">Union</p>
            </div>
          </div>

          <div>

          </div>
        </div>

        <div className='w-[28rem] sm:w-[30rem] z-30 rounded mx-[6vw] text-center sm:text-start text-gray-900 aa'>
          <h6 className="text-[3em] font-extrabold c1">Gestion des personnels</h6>
          <h6 className="text-[3em] font-extrabold c2">Suivi des pointages</h6>
          <p className='text-gray-600 c3'>
            Optimisez la gestion des présences et absences avec des outils d'analyse avancés. Simplifiez les tâches administratives !
          </p>

          <div className='grid grid-cols-2 gap-4 mt-5 w-full sm:w-[70%] bb'>
            <button
              onClick={commencer}
              className='flex b1 items-center justify-center px-3 py-2 space-x-3 shadow-xl shadow-gray-300 bg-gray-900 text-gray-200 rounded-lg border border-[transparent] font-[500] hover:bg-gray-950 duration-100 hover:border-gray-200'>
              <FaChartLine />
              <p>Graphisme</p>
            </button>

            <button
              onClick={commencer}
              className='flex b2 items-center justify-center px-3 py-2 space-x-3 text-gray-200 rounded-lg shadow-2xl shadow-gray-300 bg-orange_union border border-[transparent] hover:bg-orange_union_100 hover:border-gray-200'>
              <TbActivity />
              <p>Activité</p>
            </button>

            <button
              onClick={commencer}
              className='flex b3 items-center justify-center px-3 py-2 shadow-xl shadow-gray-300 space-x-3 text-gray-500 rounded-lg border-[3px] border-gray-500 hover:border-gray-900 hover:text-gray-950'>
              <FaSearch />
              <p>Analyse</p>
            </button>

            <button
              onClick={commencer}
              className='flex b4 items-center justify-center px-3 py-2 shadow-xl shadow-gray-300 space-x-3 text-gray-500 rounded-lg border-[3px] border-gray-500 hover:border-gray-900 hover:text-gray-950'>
              <FaPlay />
              <p>Commencer</p>
            </button>
          </div>
        </div>




      </div>
    </div>
  )
}

export default Accueille