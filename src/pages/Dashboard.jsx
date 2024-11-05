import React, { useState, useEffect } from "react";
import MyAreaChart from "../composant/line";
import MyBarChart from "../composant/barchart";
import {
  FaAmazon,
  FaAnchor,
  FaDotCircle,
  FaGoogleDrive,
  FaPrint,
  FaSearch,
  FaSnapchat,
  FaTwitter,
  FaUserTie,
} from "react-icons/fa";
import { ImSpinner11 } from "react-icons/im";
import { RiAccountPinCircleFill, RiBarChartGroupedLine } from "react-icons/ri";

import { AiOutlineSchedule } from "react-icons/ai";
import { IoMdAlarm } from "react-icons/io";
import { MdWorkHistory } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const Dashboard = () => {


  const [activite, setActivite] = useState([])
  const [sanction, setSanction] = useState([])
  const [load_activite, setLoad_activite] = useState(false)
  const [load_tbl, setLoad_table] = useState(false)

  const [masculin_total, setMasculin_total] = useState('');
  const [feminin_total, setFeminin_total] = useState('');
  const [pourcentage_masculin, setPourcentage_masculin] = useState('');
  const [pourcentage_feminin, setPourcentage_feminin] = useState('');

  //select des activité recent
  const select_activite = () => {
    setLoad_activite(true)
    axios
      .get("http://localhost:8000/api/select_activite")
      .then(response => {
        setActivite(response.data.donnes);
        setLoad_activite(false)


      })
      .catch(error => {
        console.error(error);
      });
  };

  //select des personnel en acces les retard et les absent
  const select_sanction = () => {
    setLoad_table(true)
    axios
      .get("http://localhost:8000/api/select_sanction")
      .then(response => {
        setSanction(response.data.donnes);
        setLoad_table(false)
      })
      .catch(error => {
        console.error(error);
      });
  };

   // Requête pour statistiques personnels 
   const select_statistique_personnels = () => {

    axios
      .get("http://localhost:8000/api/statistique_personnel")
      .then(response => {
        setMasculin_total(response.data.masculin_total)
        setFeminin_total(response.data.feminin_total)
        setPourcentage_masculin(parseInt(response.data.pourcentage_masculin))
        setPourcentage_feminin(parseInt(response.data.pourcentage_feminin))
        console.log(parseInt(response.data.pourcentage_feminin));
        console.log(parseInt(response.data.pourcentage_masculin));
        

      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    select_activite()
    select_sanction()
    select_statistique_personnels()
  }, [])

  return (
    <div className="text-gray-900 h-[100%] p-3 dark:text-gray-100">
      <div className="grid gap-3 mt-3 sm:grid-cols-12">
        {/* Premier line dashboard */}

        <div className="h-auto rounded-[1em] bg-white  sm:col-span-8 dark:bg-[#42424232] shadow">
          {" "}
          {/* ilay div lava lava  */}
          <div className="grid gap-1 sm:grid-cols-12 ">
            {" "}
            {/* ilay soratra milahatra mitsangana misy button actualise   */}
            <div className="flex justify-between px-6 py-3 sm:px-4 text-start sm:justify-between sm:flex-col sm:flex sm:col-span-3  rounded rounded-tl-[1em]">
              <div>
                <p className="font-bold sm:text-[12px] text-[1.5em]">
                  Statistique
                </p>
                <p className="text-[11px] text-gray-400">
                  Ceci motre le stati du mois{" "}
                </p>
              </div>

              <div>
                <p className="font-bold sm:text-[19px] text-[1.5em]">12</p>
                <p className="text-[11px] text-gray-400">Total Retard </p>
              </div>

              <div>
                <p className="font-bold sm:text-[19px] text-[1.5em]">10</p>
                <p className="text-[11px] text-gray-400">Total Absence </p>
              </div>

              <div>
                <button className="flex items-center justify-center space-x-3 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded">
                  <ImSpinner11 />
                  <span className="hidden md:flex sm:hidden">Actualiser</span>
                </button>
              </div>
            </div>
            <div className="py-1 h-60 sm:col-span-9 ">
              {" "}
              {/* hisy  bar Line  */}
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center justify-center space-x-4 text-[10px] font-extrabold">
                  <span>PRIMARY</span>
                  <span className="border-b-2 border-b-orange_union">
                    SECONDARY
                  </span>
                  <span>TERTIARY</span>
                  <span>QUADRY</span>
                </div>

                <div className="flex items-center justify-center space-x-4 text-[11px] ">
                  <span className="flex items-center justify-center space-x-2">
                    <FaDotCircle className="text-bleue_union_500" />
                    <p className="hidden lg:flex">Absence</p>
                  </span>

                  <span className="flex items-center justify-center space-x-2">
                    <FaDotCircle className="text-red_union_500" />
                    <p className="hidden lg:flex">Retard</p>
                  </span>
                </div>
              </div>
              <MyAreaChart />
            </div>
          </div>
          {/* ilay cadre 4 milahatra flex flex-direction-coloum  */}
          <div className="grid grid-cols-2 gap-1 mt-1 md:grid-cols-4">
            {" "}
            {/* ilay 4 milahatra kely  */}
            <div className="flex items-center justify-center space-x-3 h-14">
              <div className="flex items-center justify-center p-1 text-white rounded-full bg-orange_union">
                <FaSnapchat />
              </div>
              <div className="font-medium">
                <p className="text-[11px] text-gray-400">Moins Janv</p>
                <p className="text-[13px] font-bold ">$30144</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 h-14">
              <div className="flex items-center justify-center p-1 text-bleue_union_500 roubleue_union_500nded-full bg-">
                <FaGoogleDrive />
              </div>
              <div className="font-medium">
                <p className="text-[11px] text-gray-400">Moins Fev</p>
                <p className="text-[13px] font-bold ">$45200</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 h-14">
              <div className="flex items-center justify-center p-1 text-white rounded-full bg-orange_union">
                <FaAmazon />
              </div>
              <div className="font-medium">
                <p className="text-[11px] text-gray-400">Moins Mars</p>
                <p className="text-[13px] font-bold ">$895200</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 h-14">
              <div className="flex items-center justify-center p-1 text-white bg-gray-600 rounded-full">
                <FaTwitter />
              </div>
              <div className="font-medium">
                <p className="text-[11px] text-gray-400">Moins Avril</p>
                <p className="text-[13px] font-bold ">$32600</p>
              </div>
            </div>
          </div>
        </div>

        {/* place circulaire  */}
        <div className="h-auto rounded-[1em] bg-white px-4 py-5 sm:col-span-4 flex flex-col shadow justify-between dark:bg-[#42424232]">
          <div>
            <p className="font-extrabold text-[12px]">
              Statistique Personnels
            </p>

            <p className="text-[12px] text-gray-400">
              Le poucentage des peronneles suivant leur sexe.
              Combinant avec leur total chaqun
            </p>

            <div className="border-l">
              <div className="w-full bg-gray-50 dark:bg-[#292929] h-8 my-4 dark:bg-transparent rounded-tr-[10px] rounded-br-[10px]">
                <div className="h-[100%] bg-bleue_union_500 border-l-[3px] border-l-blue-500 flex items-center justify-start px-2 text-white space-x-4 text-[11px] rounded-tr-[10px] rounded-br-[10px]" style={{ width: pourcentage_masculin+"%" }}>
                  <font>Masculin</font>
                  <p className="font-bold text-[15px]">{masculin_total}</p>
                </div>
              </div>

              <div className="w-full bg-gray-50 dark:bg-[#292929] h-8 my-4 rounded-tr-[10px] rounded-br-[10px] dark:bg-transparent">
                <div className="h-[100%] bg-orange_union border-l-[3px] border-l-orange-500  flex items-center justify-start px-2 text-white space-x-4 text-[11px] rounded-tr-[10px] rounded-br-[10px]" style={{ width: pourcentage_feminin+"%" }}>
                  <font>Feminin</font>
                   <p className="font-bold text-[15px]">{feminin_total}</p>
                </div>
              </div>

              <div className="w-full bg-gray-50 h-8 my-4 rounded-tr-[10px] rounded-br-[10px] dark:bg-transparent dark:shadow">
                <div className="h-[100%] bg-gray-100 flex items-center justify-start px-2 text-gray-950 space-x-4 text-[11px] dark:bg-[#1b1b1b] dark:text-white rounded-tr-[10px] rounded-br-[10px]" style={{ width: "100%" }}>
                  <font>TOTAL</font>
                  <p>{masculin_total + feminin_total} personnels</p>
                </div>
              </div>

            </div>

          </div>
          <div className="bg-red-400">{/* <MyPieChart /> */}</div>

          <div className="grid grid-cols-3 gap-1">
            <div className="flex flex-col items-start">
              <span className="font-bold">{pourcentage_masculin}%</span>
              <span className="flex items-center justify-center space-x-2 text-[11px]">
                <FaDotCircle className="text-bleue_union_500" />
                <p className="">Masculin</p>
              </span>
            </div>

            <div className="flex flex-col items-start ">
              <span className="font-bold">{pourcentage_feminin}%</span>
              <span className="flex items-center justify-center space-x-2 text-[11px]">
                <FaDotCircle className="text-orange_union" />
                <p className="">Feminin</p>
              </span>
            </div>

            <div className="flex flex-col items-start ">
              <span className="font-bold">{masculin_total + feminin_total}</span>
              <span className="flex items-center justify-center space-x-2 text-[11px]">
                <FaDotCircle className="text-gray-600" />
                <p className="">Total Personnel</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2eme line  */}

 

      {/* 3eme line  */}

      <div className="grid gap-3 mt-3 text-gray-900 sm:grid-cols-12 dark:text-gray-100">
        <div className="h-auto rounded-[1em] bg-white sm:col-span-5 p-3 dark:bg-[#42424232] shadow ">
          <p className="font-bold text-[13px] mb-2">Activité recent</p>
          <hr className="mb-1" />

          {/* activité recent  */}
          {activite.map((a, index) => (
            <div className="flex flex-row items-center justify-between px-2 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-[black] sm:items-start sm:flex-col sm:space-y-2 md:flex-row md:items-center md:justify-between dark:border-b-[#1f1e1e]">
              <div
                className={`flex items-center justify-center w-8 h-8 px-2 text-white rounded-full 
            
               ${a.status === "Personnel"
                    ? "bg-gray-600"
                    : a.status === "Planning"
                      ? "bg-bleue_union_500"
                      : a.status === "Retard"
                        ? "bg-jaune_union_500"
                        : "bg-orange_union"
                  } `}
              >
                {/* test pour les icon  */}

                {a.status === "Personnel" ? (
                  <FaUserTie />
                ) : a.status === "Planning" ? (
                  <AiOutlineSchedule />
                ) : a.status === "Retard" ? (
                  <IoMdAlarm />
                ) : (
                  <MdWorkHistory />
                )}
              </div>
              <div className="text-[11px]">
                <p>{a.created_at}</p>
              </div>
              <div className="text-[12px]" style={{ lineHeight: "27px" }}>
                <div className="text-center sm:text-start">
                  <p className="font-bold">{a.titre_activite}</p>
                  <p className="text-[11px]">{a.description}</p>
                </div>
              </div>
            </div>
          ))}

          <div className={`w-full place-content-center pt-4 ${load_activite ? "grid" : "hidden"} `}>
            <ClipLoader size={25} color="#e6631f" />
          </div>


        </div>

        <div className="h-auto shadow rounded-[1em] bg-white sm:col-span-7 px-4 py-2 dark:bg-[#42424232]">
          <p className="font-bold text-[14px]">Table de Sanction</p>

          <div className="">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center justify-start space-x-4">
                <button className="flex items-center justify-center space-x-3 text-white bg-bleue_union_500 text-[14px] px-3 rounded py-1">
                  <ImSpinner11 />
                  <p>Desordre</p>
                </button>
                <div className="flex items-center justify-center w-8 text-white bg-gray-500 rounded h-7">
                  <FaPrint />
                </div>

              </div>

              <div className="flex items-center justify-center space-x-2">
                <input
                  type="text"
                  placeholder="recherche..."
                  className="rounded-full tailwind-form"
                />

                <div className="flex items-center justify-center w-8 text-white bg-gray-500 rounded-full h-7">
                  <FaSearch className="" />
                </div>
              </div>

            </div>

            <div className="py-2 ">
              <table className="text-center w-[100%]">
                <thead className="px-2 py-4 h-8 text-white bg-bleue_union_500 text-[12px] border-b-[1px] border-b-orange_union">
                  <th style={{ borderRadius: '1em 0 0 0' }}>Photos</th>
                  <th>Identifiant</th>
                  <th>Nom Prenom</th>
                  <th>Nb retard</th>
                  <th>Nb absent</th>
                  <th style={{ borderRadius: '0 1em 0 0' }}>Status</th>
                </thead>
                <tbody className="text-[11px] md:text-[13px]">
                  {
                    sanction.map((s, index) => (

                      <tr key={index} className="border-b border-b-gray-200 dark:border-b-[#1f1e1e]">
                        <td>
                          {" "}
                          <div className="flex items-center justify-center w-full my-1">
                            <div className={`flex items-center justify-center w-8 h-8 px-2 font-bold
                             border-[2px]  rounded-full  ${s.sexe === "masculin" ? "text-white bg-blue-300 border-blue-500"
                                : "border-orange-500 text-white bg-orange-300"}`}>
                              {s.avatar}
                            </div>
                          </div>
                        </td>
                        <td>{s.identifiant}</td>
                        <td>{s.nom}{" "}{s.prenom}</td>
                        <td>
                          <div className="flex items-center justify-center w-8 h-8 font-bold bg-gray-200 rounded-full dark:bg-[#282828a2] dark:text-white">
                            {s.nb_retard}
                          </div>

                        </td>
                        <td>
                          <div className="flex items-center justify-center w-8 h-8 font-bold bg-gray-100 rounded-full text-orange_union dark:bg-[#282828a2]">
                            {s.nb_absent}
                          </div>

                        </td>
                        <td>

                          {
                            (s.nb_retard || s.nb_absent) >= 3 ?
                              <>
                                <font className="text-orange_union">sanctione</font>
                              </>

                              :

                              <>
                                pas encore
                              </>


                          }

                        </td>
                      </tr>

                    ))
                  }



                </tbody>

              </table>
              <div className={`w-full place-content-center pt-4 ${load_tbl ? "grid" : "hidden"} `}>
                <ClipLoader size={25} color="#e6631f" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
