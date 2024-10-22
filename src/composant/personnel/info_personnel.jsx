import React, { useEffect, useState } from "react";
import { FaCamera, FaCheckCircle, FaGlobeAfrica, FaPause, FaSchool, FaStop, FaSun, FaUpload } from "react-icons/fa";
import { FaAngleLeft, FaCameraRetro, FaGlobe, FaMoon, FaPagelines, FaSchoolCircleCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Info_personnel = ({ misehoInfo_personnel, showListePersonnel }) => {
  return (
    <>
    
      <div className={`bg-white rounded-[1em] p-4 flex md:items-center justify-center relative h-auto  ${misehoInfo_personnel ? '' : 'hidden'}`}>

        {/* ilay fond absolute manga manga  */}
        <div className="absolute top-0 left-0 w-full h-[28vh] bg-gradient-to-t from-white via-[#51c3d7b4]  to-bleue_union_500 z-0 hidden md:block p-8" style={{ borderRadius: '1em 1em 0 0' }}>
          <div className="flex items-start justify-between ">
            <div>
              <p className="text-[1.5em] font-bold text-gray-50 ">Information Personnel</p>
            </div>

            <div className="text-[#ffffff42] text-[3em] font-extrabold">
              <p> JH U-8 </p>
            </div>
            <div title="Retour à la liste" onClick={showListePersonnel} className="flex items-center cursor-pointer justify-center w-8 h-8 bg-[#09aac632]  rounded-full text-white border-[2px] border-bleue_union_500">
              <FaAngleLeft />
            </div>
          </div>
        </div>

        {/* ilay div grand pisy anireo div kely roa izay cols-sapn-3 et col-span-9  */}
        <div className="grid gap-4 md:grid-cols-12 w-[98%] z-10 md:mt-[5em]">

          {/* ilay misy profile col-span-3  */}
          <div className="md:col-span-4 xl:col-span-3 h-auto bg-white rounded-[1em] shadow relative -z-20">

            <div className="flex items-center justify-between">
              <font className="mx-2 mb-4 md:hidden">Information Personnel</font>
              <div title="Retour à la liste" onClick={showListePersonnel} className="flex cursor-pointer items-center justify-center w-8 h-8   rounded-full text-gray-900 border-[2px] border-gray-900 md:hidden">
                <IoMdClose />
              </div>
            </div>

            <div className="absolute  w-full h-[12vh] bg-gradient-to-br from-blue-200 via-[#58ddf4]  to-bleue_union_500 -z-10" style={{ borderRadius: '1em 1em 0 0' }}> </div>
            <div className="z-50 flex items-center justify-center w-full mt-4">

              <div className="flex items-center relative justify-center w-28 h-28 bg-gradient-to-br from-blue-200 via-[#58ddf4]  to-bleue_union_500  rounded-full text-white text-[3em] font-bold shadow border-[2px] border-white">
                <p>JH</p>
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-jaune_union_500 via-orange_union_100  to-orange_union  text-white rounded-full absolute top-[65%] right-0 text-[14px] shadow border border-white">
                  <FaCamera />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-2 text-center">
              <div>
                <p className="font-bold">Josoa Hajanaval</p>
                <p className="text-gray-500 text-[12px]">Identifiant : U-8</p>
              </div>
            </div>

            <div className="text-[14px] px-3 py-2" style={{ lineHeight: '2.5em' }}>
              <span> <font>Date de Naissance</font> : 11/06/2002</span> <br />
              <span className="flex items-center justify-between">
                <p><font>Etablissement</font> : EMIT</p>
                <div className="text-orange_union  bg-[#ffa60064] rounded-full w-6 h-6 flex items-center justify-center border-[2px] border-orange_union"> <FaSchool /></div>
              </span>

              <span className="flex items-center justify-between">
                <p><font>Filière</font> : Gestion</p>
                <div className="text-bleue_union_500 bg-[#09aac632] rounded-full w-6 h-6 flex items-center justify-center border-[2px] border-bleue_union_500"> <FaPagelines /></div>
              </span>
              <span className="flex items-center justify-between">
                <p><font>Age</font> : 26 ans</p>
                <div className="text-jaune_union_500 bg-[#f4c20f4e] rounded-full w-6 h-6 flex items-center justify-center border-[2px] border-jaune_union_500"> <FaGlobeAfrica /></div>
              </span>

            </div>
            <hr className="" />
            <hr className="mt-4" />
            <div className="px-3 py-2 my-2 cursor-pointer">
              <span className="flex items-center justify-between">
                <p className=""><font>Modifier Profile</font></p>
                <button className="text-white bg-gradient-to-br from-jaune_union_500 via-orange_union_100  to-orange_union  cursor-pointer rounded-full w-6 h-6 flex items-center justify-center border-[2px] border-jaune_union_500"> <FaUpload /></button>
              </span>
            </div>


          </div>


          {/* ilay misy planning sy historique des pointage  col-span-9 */}
          <div className="md:col-span-8 xl:col-span-9 h-auto bg-white rounded-[1em] shadow p-3">
            <div className="flex items-center justify-between text-gray-900">
              <font className="px-1">Planning</font>
            </div>

            {/* liste des planning*/}
            <div className="grid grid-cols-2 m-4 mx-4 xl:grid-cols-4 gap-x-1 gap-y-4 ">


              {/* lundi  */}
              <div className="px-4 py-1 rounded-[10px] border-[2px] bg-white border-gray-300 h-auto relative text-gray-900">
                <span className="flex items-center justify-center w-6 h-6 bg-white  text-gray-900 rounded-full absolute -top-4 -left-4 text-[14px] shadow border-[2px] border-gray-300">
                  <font>1</font>
                </span>

                <span className="flex items-center justify-between text-[12px] ">
                  <font>LUNDI</font>
                  <p>OFF</p>
                </span>

                <span className="flex items-center justify-between">
                  <div>
                    <font>07:00</font>
                    <font>-</font>
                    <font>15:00</font>
                  </div>
                  <div className="flex items-center justify-center px-1 py-1 border border-gray-900 rounded-full text-[11px]">
                    <FaPause />
                  </div>
                </span>
              </div>
              {/* mardi  */}    {/* shift jours  */}
              <div className="px-4 py-1 rounded-[10px] border-[2px] bg-jaune_union_500 border-gray-300 h-auto relative text-white">
                <span className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-jaune_union_500 via-orange_union_100  to-orange_union  text-white rounded-full absolute -top-4 -left-4 text-[14px] shadow border border-white">
                  <font>2</font>
                </span>

                <span className="flex items-center justify-between text-[12px] ">
                  <font>MARDI</font>
                  <p>Shift</p>
                </span>

                <span className="flex items-center justify-between">
                  <div>
                    <font>09:00</font>
                    <font>-</font>
                    <font>17:00</font>
                  </div>
                  <div>
                    <FaSun />
                  </div>
                </span>
              </div>

              {/* mercredi  */}  {/* shift night  */}
              <div className="px-4 py-1 rounded-[10px] border-[2px] bg-gray-700 border-gray-300 h-auto relative text-white">
                <span className="flex items-center justify-center w-6 h-6 bg-gray-900  text-white rounded-full absolute -top-4 -left-4 text-[14px] shadow border border-white">
                  <font>3</font>
                </span>

                <span className="flex items-center justify-between text-[12px] ">
                  <font>MERCREDI</font>
                  <p>Shift</p>
                </span>

                <span className="flex items-center justify-between">
                  <div>
                    <font>17:00</font>
                    <font>-</font>
                    <font>22:00</font>
                  </div>
                  <div>
                    <FaMoon />
                  </div>
                </span>
              </div>

              {/* jeudi  */}
              <div className="px-4 py-1 rounded-[10px] border-[2px] bg-jaune_union_500 border-gray-300 h-auto relative text-white">
                <span className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-jaune_union_500 via-orange_union_100  to-orange_union  text-white rounded-full absolute -top-4 -left-4 text-[14px] shadow border border-white">
                  <font>4</font>
                </span>

                <span className="flex items-center justify-between text-[12px] ">
                  <font>JEUDI</font>
                  <p>Shift</p>
                </span>

                <span className="flex items-center justify-between">
                  <div>
                    <font>09:00</font>
                    <font>-</font>
                    <font>17:00</font>
                  </div>
                  <div>
                    <FaSun />
                  </div>
                </span>
              </div>


              {/* vendredi  */}
              <div className="px-4 py-1 rounded-[10px] border-[2px] bg-gray-700 border-gray-300 h-auto relative text-white">
                <span className="flex items-center justify-center w-6 h-6 bg-gray-900  text-white rounded-full absolute -top-4 -left-4 text-[14px] shadow border border-white">
                  <font>5</font>
                </span>

                <span className="flex items-center justify-between text-[12px] ">
                  <font>VENDREDI</font>
                  <p>Shift</p>
                </span>

                <span className="flex items-center justify-between">
                  <div>
                    <font>17:00</font>
                    <font>-</font>
                    <font>22:00</font>
                  </div>
                  <div>
                    <FaMoon />
                  </div>
                </span>
              </div>

              {/* samedi  */} {/* OFF  */}
              <div className="px-4 py-1 rounded-[10px] border-[2px] bg-white border-gray-300 h-auto relative text-gray-900">
                <span className="flex items-center justify-center w-6 h-6 bg-white  text-gray-900 rounded-full absolute -top-4 -left-4 text-[14px] shadow border-[2px] border-gray-300">
                  <font>6</font>
                </span>

                <span className="flex items-center justify-between text-[12px] ">
                  <font>SAMEDI</font>
                  <p>OFF</p>
                </span>

                <span className="flex items-center justify-between">
                  <div>
                    <font>07:00</font>
                    <font>-</font>
                    <font>15:00</font>
                  </div>
                  <div className="flex items-center justify-center px-1 py-1 border border-gray-900 rounded-full text-[11px]">
                    <FaPause />
                  </div>
                </span>
              </div>


              {/* dimanche  */}
              <div className="px-4 py-1 rounded-[10px] border-[2px] bg-jaune_union_500 border-gray-300 h-auto relative text-white">
                <span className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-jaune_union_500 via-orange_union_100  to-orange_union  text-white rounded-full absolute -top-4 -left-4 text-[14px] shadow border border-white">
                  <font>7</font>
                </span>

                <span className="flex items-center justify-between text-[12px] ">
                  <font>DIMANCHE</font>
                  <p>Shift</p>
                </span>

                <span className="flex items-center justify-between">
                  <div>
                    <font>08:00</font>
                    <font>-</font>
                    <font>16:00</font>
                  </div>
                  <div>
                    <FaSun />
                  </div>
                </span>
              </div>

              {/* total  */}
              <div className="px-4 py-1 rounded-[10px] border-[2px]  border-gray-300 h-auto  text-gray-900">


                <span className="flex items-center justify-between text-[12px] ">
                  <font>Shift Jour</font>
                  <font>3</font>
                </span>

                <span className="flex items-center justify-between text-[12px] ">
                  <font>Shift Nuit</font>
                  <font>2</font>
                </span>


              </div>

            </div>


            <font className="mx-1 my-4">Historique du Pointage</font>

            <div className="grid mt-2 gap-y-4 sm:gap-x-3 sm:grid-cols-2">


              {/* pointage retard  */}
              <div className="min-h-20 ">
                <div className="flex items-center justify-between">
                  <font className="py-1 text-[13px]">Pointage Retard</font>
                  <font>Total : 2</font>
                </div>
                <table className="text-center w-[100%]">
                  <thead className="px-2 py-4 h-8 rounded-full text-white bg-gray-500 text-[12px]">
                    <th style={{ borderRadius: '4px 0 0 4px' }}>Photos</th>
                    <th>
                      <p className="hidden lg:block">Identifiant</p>
                      <p className="lg:hidden">ID</p>
                    </th>
                    <th>
                      <p className="hidden lg:block">Date Reatrd</p>
                      <p className="lg:hidden">Retard</p>
                    </th>
                    <th style={{ borderRadius: '0 4px 4px 0' }}>
                      <p className="hidden lg:block">Nb heure retard</p>
                      <p className="lg:hidden">H Retard</p>
                    </th>

                  </thead>
                  <tbody className="text-[11px] md:text-[13px]">
                    <tr>
                      <td className="flex items-center justify-center">
                        {" "}
                        <div className="flex items-center justify-center w-8 h-8 my-1 font-bold text-purple-500 bg-gray-100 rounded-full">
                          JH
                        </div>
                      </td>
                      <td>U-078</td>
                      <td>02 Oct 2024</td>
                      <td>2 h</td>
                    </tr>

                    <tr>
                      <td className="flex items-center justify-center">
                        {" "}
                        <div className="flex items-center justify-center w-8 h-8 my-1 font-bold text-purple-500 bg-gray-100 rounded-full">
                          JH
                        </div>
                      </td>
                      <td>U-078</td>
                      <td>08 Oct 2024</td>
                      <td>30 mn</td>
                    </tr>
                  </tbody>
                </table>

              </div>

              {/* pointage absent  */}
              <div className="min-h-20">

                <div className="flex items-center justify-between">
                  <font className="py-1 text-[13px]">Pointage Absent</font>
                  <font>Total : 3</font>
                </div>


                <table className="text-center w-[100%]">
                  <thead className="px-2 py-4 h-8 rounded-full text-white bg-gray-500 text-[12px]">
                    <th style={{ borderRadius: '4px 0 0 4px' }}>Photos</th>
                    <th>
                      <p className="hidden md:block">Identifiant</p>
                      <p className="md:hidden">ID</p>

                    </th>
                    <th style={{ borderRadius: '0 4px 4px 0' }}>date d'Absent</th>

                  </thead>
                  <tbody className="text-[11px] md:text-[13px]">

                    <tr>
                      <td className="flex items-center justify-center">
                        {" "}
                        <div className="flex items-center justify-center w-8 h-8 my-1 font-bold text-purple-500 bg-gray-100 rounded-full">
                          JH
                        </div>
                      </td>
                      <td>U-078</td>
                      <td>02 Setp 2024</td>

                    </tr>
                    <tr>
                      <td className="flex items-center justify-center">
                        {" "}
                        <div className="flex items-center justify-center w-8 h-8 my-1 font-bold text-purple-500 bg-gray-100 rounded-full">
                          JH
                        </div>
                      </td>
                      <td>U-078</td>
                      <td>12 Oct 2024</td>

                    </tr>

                    <tr>
                      <td className="flex items-center justify-center">
                        {" "}
                        <div className="flex items-center justify-center w-8 h-8 my-1 font-bold text-purple-500 bg-gray-100 rounded-full">
                          JH
                        </div>
                      </td>
                      <td>U-078</td>
                      <td>19 Oct 2024</td>

                    </tr>
                  </tbody>
                </table>

              </div>


            </div>


          </div>


        </div>
      </div>
      
    </>
  )
}

export default Info_personnel
