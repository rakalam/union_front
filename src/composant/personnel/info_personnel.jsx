import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCamera, FaCheckCircle, FaClock, FaGlobeAfrica, FaPause, FaSchool, FaStop, FaSun, FaUpload } from "react-icons/fa";
import { FaAngleLeft, FaCameraRetro, FaGlobe, FaMoon, FaPagelines, FaSchoolCircleCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { VscCallIncoming, VscCodeOss  } from "react-icons/vsc";
import { PiGenderIntersexBold, PiHouseLight  } from "react-icons/pi";
const Info_personnel = ({ }) => {

  const ary = useNavigate()

  const location = useLocation()
  const id = location.state || ''
  const [pointage_retard, setPointage_retard] = useState([]);
  const [pointage_absent, setPointage_absent] = useState([]);
  const [pl, setPlanning_personnel] = useState('');
  const [nb_pl, setNb_planning] = useState('');
  const [donne_unique_personnel, setDonne_unique_personel] = useState('');



  const showListePersonnel = () => {
    ary('/logic/personnel')
  };

  const transforme_heure = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    let day = ''
    if (hours >= 14) {
      day = 'nuit'
    } else {
      day = 'jour'
    }
    return day
  }

  const select_absent_planning_retard_personnel = () => {
    axios
      .get("http://localhost:8000/api/planning_retard_absent_personnel/" + id)
      .then(response => {
        setPlanning_personnel(response.data.plannings);
        setNb_planning(response.data.nb_planning);
        setPointage_retard(response.data.retards);
        setPointage_absent(response.data.absents);
        setDonne_unique_personel(response.data.personnels)

        console.log(response.data);

      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    select_absent_planning_retard_personnel()
    console.log(id);
  }, [])

  return (
    <>

      <div className="px-2 pt-4">
        <div className="bg-white rounded-[1em] p-4 flex md:items-center justify-center relative h-auto dark:bg-sombre_bg dark:text-gray-300">

          {/* ilay fond absolute manga manga  */}
          <div className="absolute top-0 left-0 w-full h-[28vh] bg-gradient-to-t from-white via-[#51c3d7b4]  to-bleue_union_500 z-0 hidden md:block p-8 dark:bg-gradient-to-t dark:from-sombre_bg dark:via-sombre_bg  dark:to-sombre_bg" style={{ borderRadius: '1em 1em 0 0' }}>
            <div className="flex items-start justify-between ">
              <div>
                <p className="text-[1.5em] font-bold text-gray-50 ">Information Personnel</p>
              </div>

              <div className="text-[#ffffff42] text-[3em] font-extrabold">
                <p>
                  {donne_unique_personnel.avatar}
                  {" "}
                  {donne_unique_personnel.identifiant}
                </p>
              </div>
              <div title="Retour à la liste"
                onClick={showListePersonnel}
                className="flex items-center cursor-pointer justify-center w-8 h-8 bg-[#09aac632]  rounded-full text-white border-[2px] border-bleue_union_500">
                <FaAngleLeft />
              </div>
            </div>
          </div>

          {/* ilay div grand pisy anireo div kely roa izay cols-sapn-3 et col-span-9  */}
          <div className="grid gap-4 md:grid-cols-12 w-[98%] z-10 md:mt-[5em] ">

            {/* ilay misy profile col-span-3  */}
            <div className="md:col-span-4 xl:col-span-3 h-auto bg-white rounded-[1em] shadow relative -z-20 dark:bg-sombre_bg">

              <div className="flex items-center justify-between">
                <font className="mx-2 mb-4 md:hidden">Information Personnel</font>
                <div title="Retour à la liste"
                  onClick={showListePersonnel}
                  className="flex cursor-pointer items-center justify-center w-8 h-8   rounded-full text-gray-900 border-[2px] border-gray-900 md:hidden dark:text-gray-200 dark:border-gray-200">
                  <IoMdClose />
                </div>
              </div>

              <div className="absolute  w-full h-[13.1vh] bg-gradient-to-br from-blue-200 via-[#58ddf4]  to-bleue_union_500 -z-10" style={{ borderRadius: '1em 1em 0 0' }}> </div>
              <div className="z-50 flex items-center justify-center w-full mt-4">

                <div className="flex items-center relative justify-center w-28 h-28 bg-gradient-to-br from-blue-200 via-[#58ddf4]  to-bleue_union_500  rounded-full text-white text-[3em] font-bold shadow border-[2px] border-white">

                  {
                    donne_unique_personnel.photos ?
                      <img src={`http://127.0.0.1:8000/storage/${donne_unique_personnel.photos}`} className="rounded-full w-28 h-28" />
                      :
                      <p>
                        {donne_unique_personnel.avatar}
                      </p>
                  }

                </div>
              </div>

              <div className="flex items-center justify-center w-full mt-2 text-center">
                <div>
                  <p className="font-bold">{donne_unique_personnel.prenom}</p>
                  <p className="text-gray-500 text-[12px]">Identifiant : {donne_unique_personnel.identifiant}</p>
                </div>
              </div>

              <div className="text-[14px] px-3 py-2" style={{ lineHeight: '2.5em' }}>
                <span> <font>Nom</font> : {donne_unique_personnel.nom}</span> <br />
                <span> <font>Prenom</font> : {donne_unique_personnel.prenom}</span> <br />

                <span className="flex items-center justify-between">
                  <p> <font>Naissance</font> : {donne_unique_personnel.date_naissance}</p> <br />
                  <div
                    className="text-bleue_union_500  bg-[#09aac632] rounded-full w-6 h-6 flex items-center justify-center border-[2px] border-bleue_union_500">
                    <FaSchool />
                  </div>
                </span>

                <span className="flex items-center justify-between">
                  <p><font>Adresse</font> : {donne_unique_personnel.adresse}</p>
                  <div
                    className="text-bleue_union_500 bg-[#09aac632] rounded-full w-6 h-6 flex items-center justify-center border-[2px] border-bleue_union_500">
                    <PiHouseLight />
                  </div>
                </span>

                <span className="flex items-center justify-between">
                  <p><font>Contact</font> : {donne_unique_personnel.contact}</p>
                  <div className="text-bleue_union_500 bg-[#09aac632] rounded-full w-6 h-6 flex items-center justify-center border-[2px] border-bleue_union_500">
                    <VscCallIncoming />
                  </div>
                </span>

                <span className="flex items-center justify-between">
                  <p><font>CIN</font> : {donne_unique_personnel.cin}</p>
                  <div className="text-bleue_union_500 bg-[#09aac632] rounded-full w-6 h-6 flex items-center justify-center border-[2px] border-bleue_union_500">
                    <VscCodeOss />
                  </div>
                </span>

                <span className="flex items-center justify-between">
                  <p><font>Sexe</font> : {donne_unique_personnel.sexe}</p>
                  <div className="text-bleue_union_500 bg-[#09aac632] rounded-full w-6 h-6 flex items-center justify-center border-[2px] border-bleue_union_500">
                    <PiGenderIntersexBold />
                  </div>
                </span>



              </div>


            </div>


            {/* ilay misy planning sy historique des pointage  col-span-9 */}
            <div className="md:col-span-8 xl:col-span-9 h-auto bg-white rounded-[1em] shadow p-3 dark:bg-sombre_bg">
              <div className="flex items-center justify-between text-gray-900 dark:text-gray-300">
                <font className="px-1">Planning</font>
              </div>

              {/* liste des planning*/}
              {

                nb_pl != 0 ?

                  <div className="grid grid-cols-2 m-4 mx-4 xl:grid-cols-4 gap-x-1 gap-y-4 ">

                    {/* lundi  */}

                    {
                      pl.lundi_deb === 'off' ?
                        <div
                          className='relative flex flex-col dark:bg-[#1b1b1bfd] dark:text-gray-300 items-center border-[2px] dark:border-[#303030] border-gray-300 justify-center px-2 text-gray-900 bg-gray-50 rounded-[10px] py-[14px]'>
                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>LUNDI</font></div>
                            <div>
                              <FaPause />
                            </div>
                          </div>

                          <div className='font-bold'>
                            OFF
                          </div>
                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border dark:bg-[#222222] dark:border-[#303030] bg-white
                        place-content-center rounded-full text-gray-900 dark:text-white `}>
                            1
                          </div>
                        </div>
                        :

                        <div className={`relative flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded-[10px] bg-bleue_union_500
                       ${transforme_heure(pl.lundi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                
                       `}>

                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border 
                            place-content-center rounded-full text-white  ${transforme_heure(pl.lundi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"} `}>
                            1
                          </div>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>LUNDI</font></div>
                            <div>
                              {
                                transforme_heure(pl.lundi_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {pl.lundi_deb} - {pl.lundi_fin}
                          </div>
                        </div>

                    }


                    {/* mardi  */}
                    {
                      pl.mardi_deb === 'off' ?
                        <div
                          className='relative flex flex-col dark:bg-[#1b1b1bfd] dark:text-gray-300 items-center border-[2px] dark:border-[#303030] border-gray-300 justify-center px-2 text-gray-900 bg-gray-50 rounded-[10px] py-[14px]'>
                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>MARDI</font></div>
                            <div>
                              <FaPause />
                            </div>
                          </div>

                          <div className='font-bold'>
                            OFF
                          </div>
                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border dark:bg-[#222222] dark:border-[#303030] bg-white
                        place-content-center rounded-full text-gray-900 dark:text-white `}>
                            7
                          </div>
                        </div>
                        :

                        <div className={`relative flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded-[10px] bg-bleue_union_500
                       ${transforme_heure(pl.mardi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                
                       `}>

                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border dark:border-[#303030]
                            place-content-center rounded-full text-white  ${transforme_heure(pl.mardi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"} `}>
                            2
                          </div>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>MARDI</font></div>
                            <div>
                              {
                                transforme_heure(pl.mardi_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {pl.mardi_deb} - {pl.mardi_fin}
                          </div>
                        </div>

                    }


                    {/* mercredi  */}
                    {
                      pl.mercredi_deb === 'off' ?
                        <div
                          className='relative flex flex-col dark:bg-[#1b1b1bfd] dark:text-gray-300 items-center border-[2px] dark:border-[#303030] border-gray-300 justify-center px-2 text-gray-900 bg-gray-50 rounded-[10px] py-[14px]'>
                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>MERCREDI</font></div>
                            <div>
                              <FaPause />
                            </div>
                          </div>

                          <div className='font-bold'>
                            OFF
                          </div>
                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border dark:bg-[#222222] dark:border-[#303030] bg-white
                            place-content-center rounded-full text-gray-900 dark:text-white `}>
                            3
                          </div>
                        </div>
                        :

                        <div className={`relative flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded-[10px] bg-bleue_union_500
                       ${transforme_heure(pl.mercredi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                
                       `}>

                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border dark:border-[#303030]
                            place-content-center rounded-full text-white  ${transforme_heure(pl.mercredi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"} `}>
                            3
                          </div>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>MERCREDI</font></div>
                            <div>
                              {
                                transforme_heure(pl.mercredi_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {pl.mercredi_deb} - {pl.mercredi_fin}
                          </div>
                        </div>

                    }

                    {/* jeudi  */}
                    {
                      pl.jeudi_deb === 'off' ?
                        <div
                          className='relative flex flex-col dark:bg-[#1b1b1bfd] dark:text-gray-300 items-center border-[2px] dark:border-[#303030] border-gray-300 justify-center px-2 text-gray-900 bg-gray-50 rounded-[10px] py-[14px]'>
                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>JEUDI</font></div>
                            <div>
                              <FaPause />
                            </div>
                          </div>

                          <div className='font-bold'>
                            OFF
                          </div>
                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border dark:bg-[#222222] dark:border-[#303030] bg-white
                        place-content-center rounded-full text-gray-900 dark:text-white `}>
                            4
                          </div>
                        </div>
                        :

                        <div className={`relative flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded-[10px] bg-bleue_union_500
                       ${transforme_heure(pl.jeudi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                
                       `}>

                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border dark:border-[#303030]
                            place-content-center rounded-full text-white  ${transforme_heure(pl.jeudi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"} `}>
                            4
                          </div>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>JEUDI</font></div>
                            <div>
                              {
                                transforme_heure(pl.jeudi_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {pl.jeudi_deb} - {pl.jeudi_fin}
                          </div>
                        </div>

                    }

                    {/* vendredi  */}
                    {
                      pl.vendredi_deb === 'off' ?
                        <div
                          className='relative flex flex-col dark:bg-[#1b1b1bfd] dark:text-gray-300 items-center border-[2px] dark:border-[#303030] border-gray-300 justify-center px-2 text-gray-900 bg-gray-50 rounded-[10px] py-[14px]'>
                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>VENDREDI</font></div>
                            <div>
                              <FaPause />
                            </div>
                          </div>

                          <div className='font-bold'>
                            OFF
                          </div>
                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border dark:bg-[#222222] dark:border-[#303030] bg-white
                        place-content-center rounded-full text-gray-900 dark:text-white `}>
                            5
                          </div>
                        </div>
                        :

                        <div className={`relative flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded-[10px] bg-bleue_union_500
                       ${transforme_heure(pl.vendredi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                
                       `}>

                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border dark:border-[#303030]
                            place-content-center rounded-full text-white  ${transforme_heure(pl.vendredi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"} `}>
                            5
                          </div>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>VENDREDI</font></div>
                            <div>
                              {
                                transforme_heure(pl.vendredi_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {pl.vendredi_deb} - {pl.vendedi_fin}
                          </div>
                        </div>

                    }


                    {/* samedi  */}
                    {
                      pl.samedi_deb === 'off' ?
                        <div
                          className='relative flex flex-col dark:bg-[#1b1b1bfd] dark:text-gray-300 items-center border-[2px] dark:border-[#303030] border-gray-300 justify-center px-2 text-gray-900 bg-gray-50 rounded-[10px] py-[14px]'>
                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>SAMEDI</font></div>
                            <div>
                              <FaPause />
                            </div>
                          </div>

                          <div className='font-bold'>
                            OFF
                          </div>
                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border dark:bg-[#222222] dark:border-[#303030] bg-white
                        place-content-center rounded-full text-gray-900 dark:text-white `}>
                            6
                          </div>
                        </div>
                        :

                        <div className={`relative flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded-[10px] bg-bleue_union_500
                       ${transforme_heure(pl.samedi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                
                       `}>

                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border dark:border-[#303030]
                            place-content-center rounded-full text-white  ${transforme_heure(pl.samedi_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"} `}>
                            6
                          </div>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>SAMEDI</font></div>
                            <div>
                              {
                                transforme_heure(pl.samedi_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {pl.samedi_deb} - {pl.samedi_fin}
                          </div>
                        </div>

                    }



                    {/* dimanche  */}
                    {
                      pl.dimanche_deb === 'off' ?
                        <div
                          className='relative flex flex-col dark:bg-[#1b1b1bfd] dark:text-gray-300 items-center border-[2px] dark:border-[#303030] border-gray-300 justify-center px-2 text-gray-900 bg-gray-50 rounded-[10px] py-[14px]'>
                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>DIMANCHE</font></div>
                            <div>
                              <FaPause />
                            </div>
                          </div>

                          <div className='font-bold'>
                            OFF
                          </div>
                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border dark:bg-[#222222] dark:border-[#303030] bg-white
                            place-content-center rounded-full text-gray-900 dark:text-white `}>
                            7
                          </div>
                        </div>
                        :

                        <div className={`relative flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded-[10px] bg-bleue_union_500
                       ${transforme_heure(pl.dimanche_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"}
                
                       `}>

                          <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 grid border dark:border-[#303030]
                            place-content-center rounded-full text-white  ${transforme_heure(pl.dimanche_deb) === "jour" ? "bg-bleue_union_500" : "bg-gray-800"} `}>
                            7
                          </div>

                          <div className='flex items-center justify-between w-full text-[11px]'>
                            <div> <FaClock /></div>
                            <div><font>DIMANCHE</font></div>
                            <div>
                              {
                                transforme_heure(pl.dimanche_deb) === "jour" ? <FaSun /> : <FaMoon />
                              }
                            </div>
                          </div>

                          <div className='font-bold'>
                            {pl.dimanche_deb} - {pl.dimanche_fin}
                          </div>
                        </div>

                    }

                  </div>

                  :

                  <div className="grid w-full py-4 place-content-center ">
                    <font>Pas de planning</font>
                  </div>

              }


              <font className="mx-1 my-4">Historique du Pointage</font>

              <div className="grid mt-2 gap-y-4 sm:gap-x-3 sm:grid-cols-2">


                {/* pointage retard  */}
                <div className={`lg:h-[30vh] ${pointage_retard.length > 3 ? "lg:overflow-y-scroll" : ""}`}>
                  <div className="flex items-center justify-between">
                    <font className="py-1 text-[13px]">Pointage Retard</font>
                    <font>Total : {pointage_retard.length}</font>
                  </div>
                  <table className="text-center w-[100%]">
                    <thead className="px-2 py-4 h-8 rounded-full text-white bg-gray-500 text-[12px]">
                      <th style={{ borderRadius: '4px 0 0 4px' }}>avatar</th>
                      <th>
                        <p className="hidden lg:block">Jour</p>
                        <p className="lg:hidden">Jour</p>
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
                      {
                        pointage_retard.map((p, index) => (
                          <tr key={index} className="border-b border-b-gray-200 dark:border-b-[#1f1e1e]">
                            <td className="flex items-center justify-center">

                              {
                                p.personnel.photos ?
                                  <div className="flex items-center justify-center w-full">
                                    <img src={`http://127.0.0.1:8000/storage/${p.personnel.photos}`} className="w-8 h-8 rounded-full border-[2px] my-1" />
                                  </div>
                                  :
                                  <div className="flex items-center justify-center w-full">
                                    <div className={`flex items-center justify-center w-8 h-8 px-2 font-bold my-1
                                    border-[2px]  rounded-full  ${p.personnel.sexe === "masculin" ? "text-white bg-blue-300 border-blue-500"
                                        : "border-orange-500 text-white bg-orange-300"}`}>
                                      {p.personnel.avatar}
                                    </div>
                                  </div>
                              }

                            </td>
                            <td>{p.jour}</td>
                            <td>{
                              format(new Date(p.date_retard), 'd MMM yyyy', { locale: fr })


                            }</td>
                            <td>{p.nb_heure_retard}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>

                </div>

                {/* pointage absent  */}
                <div className={`lg:h-[30vh] ${pointage_absent.length > 3 ? "lg:overflow-y-scroll" : ""}`}>

                  <div className="flex items-center justify-between">
                    <font className="py-1 text-[13px]">Pointage Absent</font>
                    <font>Total : {pointage_absent.length}</font>
                  </div>


                  <table className="text-center w-[100%]">
                    <thead className="px-2 py-4 h-8 rounded-full text-white bg-gray-500 text-[12px]">
                      <th style={{ borderRadius: '4px 0 0 4px' }}>Photos</th>
                      <th>
                        <p className="hidden md:block">Identifiant</p>
                        <p className="md:hidden">ID</p>

                      </th>
                      <th>Jour</th>
                      <th style={{ borderRadius: '0 4px 4px 0' }}>date d'Absent</th>

                    </thead>
                    <tbody className="text-[11px] md:text-[13px]">

                      {

                        pointage_absent.map((p, index) => (
                          <tr key={index} className="border-b border-b-gray-200 dark:border-b-[#1f1e1e]">
                            <td className="flex items-center justify-center">

                              {
                                p.personnel.photos ?
                                  <div className="flex items-center justify-center w-full">
                                    <img src={`http://127.0.0.1:8000/storage/${p.personnel.photos}`} className="w-8 h-8 rounded-full border-[2px] my-1" />
                                  </div>
                                  :
                                  <div className="flex items-center justify-center w-full">
                                    <div className={`flex items-center justify-center w-8 h-8 px-2 font-bold my-1
                                    border-[2px]  rounded-full  ${p.personnel.sexe === "masculin" ? "text-white bg-blue-300 border-blue-500"
                                        : "border-orange-500 text-white bg-orange-300"}`}>
                                      {p.personnel.avatar}
                                    </div>
                                  </div>
                              }
                            </td>
                            <td>{p.personnel.identifiant}</td>
                            <td>{p.jour}</td>
                            <td>{
                              format(new Date(p.date_absent), 'd MMM yyyy', { locale: fr })

                            }</td>
                          </tr>
                        ))
                      }


                    </tbody>
                  </table>

                </div>


              </div>


            </div>


          </div>
        </div>
      </div>

    </>
  )
}

export default Info_personnel
