import React, { useEffect, useState } from 'react'
import { FaClock, FaLock, FaMoon, FaPen, FaPrint, FaSave, FaSearch, FaSun } from 'react-icons/fa';
import { ClipLoader } from "react-spinners";
import { FaTrash } from 'react-icons/fa6';
import $ from "jquery"
import ReactPaginate from 'react-paginate';
import PaginationKalam from '../Pagination';


const ListePlanning = ({ listePlanning, planningPerPage, totalPlanning, paginate, pageCourrant, show_form_modifier, show_div_supression_planning, loading }) => {
  // transforme date string en heure 
  const transforme_heure = (time) => {
    // Calculer l'heure de fin en ajoutant 8 heures
    const [hours, minutes] = time.split(':').map(Number);
    let day = ''
    if (hours >= 14) {
      day = 'nuit'
    } else {
      day = 'jour'
    }
    return day
  }
  return (
    <>
      <table className='min-w-full'>
        <thead className='border-b-2 border-gray-300 dark:border-b-[#2c2b2b] '>

          <th className='w-[9em]'>
            <div className='flex items-center justify-center py-[20px] space-y-2 font-bold rounded bg-bleue_union_500 text-white text-[12px]'>
              Personnel
            </div>
          </th>

          <th className='w-[7em]'>
            <div className='flex flex-col items-center justify-center pb-1 space-y-2 font-bold rounded bg-gray-50 dark:bg-[#42424232] dark:text-gray-300'>
              <font className="pt-1 text-[12px]">Lundi</font>
              <font className="flex flex-col items-center justify-center w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-bleue_union_500">1</font>
            </div>
          </th>

          <th className='w-[7em]'>
            <div className='flex flex-col items-center justify-center pb-1 dark:bg-[#42424232] dark:text-gray-300 space-y-2 font-bold rounded bg-gray-50'>
              <font className="pt-1 text-[12px]">Mardi</font>
              <font className="flex flex-col items-center justify-center w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-bleue_union_500">2</font>
            </div>
          </th>

          <th className='w-[7em]'>
            <div className='flex flex-col items-center justify-center pb-1 dark:bg-[#42424232] dark:text-gray-300 space-y-2 font-bold rounded bg-gray-50'>
              <font className="pt-1 text-[12px]">Mercredi</font>
              <font className="flex flex-col items-center justify-center w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-bleue_union_500">3</font>
            </div>
          </th>

          <th className='w-[7em]'>
            <div className='flex flex-col items-center justify-center pb-1 dark:bg-[#42424232] dark:text-gray-300 space-y-2 font-bold rounded bg-gray-50'>
              <font className="pt-1 text-[12px]">Jeudi</font>
              <font className="flex flex-col items-center justify-center w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-bleue_union_500">4</font>
            </div>
          </th>

          <th className='w-[7em]'>
            <div className='flex flex-col items-center justify-center pb-1 dark:bg-[#42424232] dark:text-gray-300 space-y-2 font-bold rounded bg-gray-50'>
              <font className="pt-1 text-[12px]">Vendredi</font>
              <font className="flex flex-col items-center justify-center w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-bleue_union_500">5</font>
            </div>
          </th>

          <th className='w-[7em]'>
            <div className='flex flex-col items-center justify-center pb-1 dark:bg-[#42424232] dark:text-gray-300 space-y-2 font-bold rounded bg-gray-50'>
              <font className="pt-1 text-[12px]">Samedi</font>
              <font className="flex flex-col items-center justify-center w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-bleue_union_500">6</font>
            </div>
          </th>

          <th className='w-[7em]'>
            <div className='flex flex-col items-center justify-center pb-1 dark:bg-[#42424232] dark:text-gray-300 space-y-2 font-bold rounded bg-gray-50'>
              <font className="pt-1 text-[12px]">Dimanche</font>
              <font className="flex flex-col items-center justify-center w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-bleue_union_500">7</font>
            </div>
          </th>

          <th className='w-[7em]'>
            <div className='flex items-center justify-center py-[20px] space-y-2 font-bold rounded text-gray-900 text-[12px] dark:text-gray-300'>
              Action
            </div>
          </th>

        </thead>

        <tbody>
          {
            listePlanning.map((l, index) => {
              return (

                <tr className='border-b border-gray-300 dark:border-b-[#2c2b2b]' key={index}>
                  <td>
                    <div className='flex items-center justify-between px-3 py-2 rounded'>
                      <div className={`flex items-center justify-center w-8 h-8 px-2 font-bold  border-[2px]  rounded-full 
                           ${l.personnel.sexe === "masculin" ? "text-white bg-blue-300 border-blue-500"
                          : "border-orange-500 text-white bg-orange-300"}`}>
                        {l.personnel.avatar}
                      </div>
                      <div className='flex flex-col items-end justify-center -space-y-1'>
                        <font>{l.personnel.identifiant}</font>
                        <p className='text-[11px]'>{l.personnel.nom}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    {
                      l.lundi_deb === 'off' ?
                        <div className='flex dark:bg-[#42424232] dark:text-gray-300 items-center justify-center px-2 text-gray-900 bg-gray-100 rounded py-[14px]'>
                          <font>OFF</font>
                        </div>
                        :

                        <div className={` flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded bg-bleue_union_500
                             ${transforme_heure(l.lundi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                        
                        `}>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div>
                              {
                                transforme_heure(l.lundi_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {l.lundi_deb} - {l.lundi_fin}
                          </div>
                        </div>

                    }
                  </td>

                  <td>
                    {
                      l.mardi_deb === 'off' ?
                        <div className='flex dark:bg-[#42424232] dark:text-gray-300 items-center justify-center px-2 text-gray-900 bg-gray-100 rounded py-[14px] '>
                          <font>OFF</font>
                        </div>
                        :

                        <div className={` flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded bg-bleue_union_500
                             ${transforme_heure(l.mardi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                        
                        `}>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div>
                              {
                                transforme_heure(l.mardi_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {l.mardi_deb} - {l.mardi_fin}
                          </div>
                        </div>

                    }
                  </td>

                  <td>
                    {
                      l.mercredi_deb === 'off' ?
                        <div className='flex dark:bg-[#42424232] dark:text-gray-300 items-center justify-center px-2 text-gray-900 bg-gray-100 rounded py-[14px] '>
                          <font>OFF</font>
                        </div>
                        :

                        <div className={` flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded bg-bleue_union_500
                             ${transforme_heure(l.mercredi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                        
                        `}>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div>
                              {
                                transforme_heure(l.mercredi_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {l.mercredi_deb} - {l.mercredi_fin}
                          </div>
                        </div>

                    }
                  </td>

                  <td>
                    {
                      l.jeudi_deb === 'off' ?
                        <div className='flex dark:bg-[#42424232] dark:text-gray-300 items-center justify-center px-2 text-gray-900 bg-gray-100 rounded py-[14px] '>
                          <font>OFF</font>
                        </div>
                        :

                        <div className={` flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded bg-bleue_union_500
                             ${transforme_heure(l.jeudi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                        
                        `}>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div>
                              {
                                transforme_heure(l.jeudi_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {l.jeudi_deb} - {l.jeudi_fin}
                          </div>
                        </div>

                    }
                  </td>

                  <td>
                    {
                      l.vendredi_deb === 'off' ?
                        <div className='flex dark:bg-[#42424232] dark:text-gray-300 items-center justify-center px-2 text-gray-900 bg-gray-100 rounded py-[14px] '>
                          <font>OFF</font>
                        </div>
                        :

                        <div className={` flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded bg-bleue_union_500
                             ${transforme_heure(l.vendredi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                        
                        `}>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div>
                              {
                                transforme_heure(l.vendredi_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {l.vendredi_deb} - {l.vendedi_fin}
                          </div>
                        </div>

                    }
                  </td>

                  <td>
                    {
                      l.samedi_deb === 'off' ?
                        <div className='flex dark:bg-[#42424232] dark:text-gray-300 items-center justify-center px-2 text-gray-900 bg-gray-100 rounded py-[14px] '>
                          <font>OFF</font>
                        </div>
                        :

                        <div className={` flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded bg-bleue_union_500
                             ${transforme_heure(l.samedi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                        
                        `}>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div>
                              {
                                transforme_heure(l.samedi_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {l.samedi_deb} - {l.samedi_fin}
                          </div>
                        </div>

                    }
                  </td>

                  <td>
                    {
                      l.dimanche_deb === 'off' ?
                        <div className='flex dark:bg-[#42424232] dark:text-gray-300 items-center justify-center px-2 text-gray-900 bg-gray-100 rounded py-[14px] '>
                          <font>OFF</font>
                        </div>
                        :

                        <div className={` flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded bg-bleue_union_500
                             ${transforme_heure(l.dimanche_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                        
                        `}>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div>
                              {
                                transforme_heure(l.dimanche_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {l.dimanche_deb} - {l.dimanche_fin}
                          </div>
                        </div>

                    }
                  </td>

                  <td>
                    <div className="flex items-center justify-center space-x-2">
                      <div
                        onClick={() => show_form_modifier(
                          l.id,
                          l.personnel.id,
                          l.personnel.identifiant,
                          l.personnel.prenom,
                        )}
                        className="flex items-center justify-center w-6 h-6 font-bold text-gray-400 border-gray-400 rounded-full border-[1px] cursor-pointernter cursor-pointer" title="modifier">
                        <FaPen />
                      </div>

                      <div
                        onClick={() => show_div_supression_planning(
                          l.id,
                          l.personnel.prenom,
                        )}
                        className="flex items-center justify-center w-6 h-6 font-bold text-gray-400 border-gray-400 rounded-full border-[1px] cursor-pointernter cursor-pointer" title="suprimer">
                        <FaTrash />
                      </div>
                    </div>
                  </td>
                </tr>
              )
            })
          }



        </tbody>
      </table>
      <div className={`w-full place-content-center py-8 ${loading ? "grid" : "hidden"} `}>
        <ClipLoader size={30} color="#e6631f" />
      </div>
      <div className='flex items-center justify-between px-4'>
        <font>Pagination</font>
        <PaginationKalam planningPerPage={planningPerPage} totalPlanning={totalPlanning} paginate={paginate} pageCourrant={pageCourrant} />
      </div>
    </>
  )
}

export default ListePlanning
