import React, { useState } from "react";
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
import MyPieChart from "../composant/Pichart";
import MonCalendrier from "../composant/calendrier";
import { FaMessage } from "react-icons/fa6";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoMdAlarm } from "react-icons/io";
import { MdWorkHistory } from "react-icons/md";

const Dashboard = () => {
  const activite = [
    {
      id: 1,
      andro: "12/06/2024",
      titre: "Info Personnel",
      text_activite: "Ajout d'un personnel",
      identification: "Personnel",
    },
    {
      id: 1,
      andro: "16/06/2024",
      titre: "Pointage Retard",
      text_activite: "Un personnel en retard",
      identification: "Retard",
    },
    {
      id: 1,
      andro: "26/06/2024",
      titre: "Pointage Absent",
      text_activite: "Un personnel est absent",
      identification: "Absent",
    },
    {
      id: 1,
      andro: "22/06/2024",
      titre: "Concernant Planning",
      text_activite: "Un planing a été changé",
      identification: "Planning",
    },
    {
      id: 1,
      andro: "30/06/2024",
      titre: "Pointage Retard",
      text_activite: "Un personnel en retard",
      identification: "Retard",
    },
  ];

  return (
    <div className="text-gray-900 h-[100%] p-3">
      <div className="grid gap-3 mt-3 sm:grid-cols-12">
        {/* Premier line dashboard */}

        <div className="h-auto rounded-[1em] bg-white  sm:col-span-8">
          {" "}
          {/* ilay div lava lava  */}
          <div className="grid gap-1 sm:grid-cols-12">
            {" "}
            {/* ilay soratra milahatra mitsangana misy button actualise   */}
            <div className="flex justify-between px-6 py-3 sm:px-4 text-start sm:justify-between sm:flex-col sm:flex sm:col-span-3">
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
              <div className="flex items-center justify-center p-1 text-white roubleue_union_500nded-full bg-">
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
        <div className="h-auto rounded-[1em] bg-white px-4 py-5 sm:col-span-4 flex flex-col justify-between">
          <div>
            <p className="font-extrabold text-[12px]">
              Visualisation Circulaire
            </p>
          </div>
          <div className="bg-red-400">{/* <MyPieChart /> */}</div>

          <div className="grid grid-cols-3 gap-1">
            <div className="flex flex-col items-start">
              <span className="font-bold">86%</span>
              <span className="flex items-center justify-center space-x-2 text-[11px]">
                <FaDotCircle className="text-bleue_union_500" />
                <p className="">Absence</p>
              </span>
            </div>

            <div className="flex flex-col items-start ">
              <span className="font-bold">2%</span>
              <span className="flex items-center justify-center space-x-2 text-[11px]">
                <FaDotCircle className="text-orange_union" />
                <p className="">Retard</p>
              </span>
            </div>

            <div className="flex flex-col items-start ">
              <span className="font-bold">74%</span>
              <span className="flex items-center justify-center space-x-2 text-[11px]">
                <FaDotCircle className="text-red_union_500" />
                <p className="">Evaluation</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2eme line  */}

      <div className="grid gap-3 mt-3 sm:grid-cols-4">
        {/* 1ere cadre  */}
        <div className="h-24 rounded-[1em] bg-gradient-to-br from-blue-200 via-[#58ddf4]  to-bleue_union_500 relative overflow-hidden flex flex-col justify-between py-2">
          <div className="text-[11px] font-extrabold text-white px-4">
            Play Status
          </div>

          <div className="flex items-end justify-between px-4 text-white">
            <div className="text-[3em]">
              <RiBarChartGroupedLine />
            </div>
            <div className="">
              <p className="text-[19px] sm:text-[12px] lg:text-[19px] font-extrabold">
                $ 89750
              </p>
              <p className="text-[11px]">Stat view</p>
            </div>
          </div>

          <img
            src="image_union/sar1.png"
            className="absolute right-0 -top-0 h-[100%] w-[30em]"
          />
        </div>

        <div className="h-24 rounded-[1em] bg-gradient-to-br from-jaune_union_500 via-orange_union_100  to-orange_union relative overflow-hidden flex flex-col justify-between py-2">
          <div className="text-[11px] font-extrabold text-white px-4">
            Play Status
          </div>

          <div className="flex items-end justify-between px-4 text-white">
            <div className="">
              <p className="text-[19px] sm:text-[12px] lg:text-[19px] font-extrabold">
                $ 89750
              </p>
              <p className="text-[11px]">Stat view</p>
            </div>
            <div className="text-[3em]">
              <RiBarChartGroupedLine />
            </div>
          </div>
        </div>

        {/* 2eme cadre  */}
        <div className="h-24 rounded-[1em] bg-jaune_union_500 relative overflow-hidden flex flex-col justify-start py-2">
          <div className="text-[11px] font-extrabold text-white px-4">
            Fictif Macth
          </div>

          <div className="px-4 text-white ">
            <div className="flex items-start justify-between">
              <p className="text-[19px] sm:text-[12px] lg:text-[19px] font-extrabold">
                12
              </p>
              <p className="text-[11px]">Stat view</p>
            </div>
          </div>

          <img
            src="image_union/sar3.png"
            className="absolute right-0  h-[100%] w-[20em]"
          />
        </div>

        {/* 3eme cadre  */}

        {/* 4eme cadre  */}
        <div className="h-24 rounded-[1em] bg-bleue_union_500 relative overflow-hidden flex flex-col justify-between py-2">
          <div className="text-[11px] font-extrabold text-white px-4">
            Play Status
          </div>

          <div className="flex items-end justify-between px-4 text-white">
            <div className="text-[3em]">
              <RiBarChartGroupedLine />
            </div>
            <div className="">
              <p className="text-[19px] sm:text-[12px] lg:text-[19px] font-extrabold">
                $ 89750
              </p>
              <p className="text-[11px]">Stat view</p>
            </div>
          </div>

          <img
            src="image_union/sar2.png"
            className="absolute right-0  h-[100%] w-[20em]"
          />
        </div>
      </div>

      {/* 3eme line  */}

      <div className="grid gap-3 mt-3 text-gray-900 sm:grid-cols-12">
        <div className="h-auto rounded-[1em] bg-white sm:col-span-4 p-3">
          <p className="font-bold text-[13px] mb-2">Activité recent</p>
          <hr className="mb-1" />

          {/* activité recent  */}

          {activite.map((a, index) => (
            <div className="flex flex-row items-center justify-between px-2 border-b cursor-pointer hover:bg-gray-100 sm:items-start sm:flex-col sm:space-y-2 md:flex-row md:items-center md:justify-between">
              <div
                className={`flex items-center justify-center w-8 h-8 px-2 text-white rounded-full 
            
               ${a.identification === "Personnel"
                    ? "bg-gray-600"
                    : a.identification === "Compte"
                      ? "bg-jaune_union_500"
                      : a.identification === "Planning"
                        ? "bg-bleue_union_500"
                        : a.identification === "Retard"
                          ? "bg-jaune_union_500"
                          : "bg-orange_union"
                  } `}
              >
                {/* test pour les icon  */}

                {a.identification === "Personnel" ? (
                  <FaUserTie />
                ) : a.identification === "Compte" ? (
                  <RiAccountPinCircleFill />
                ) : a.identification === "Planning" ? (
                  <AiOutlineSchedule />
                ) : a.identification === "Retard" ? (
                  <IoMdAlarm />
                ) : (
                  <MdWorkHistory />
                )}
              </div>
              <div className="text-[11px]">
                <p>{a.andro}</p>
              </div>
              <div className="text-[12px]" style={{ lineHeight: "27px" }}>
                <div className="text-center sm:text-start">
                  <p className="font-bold">{a.titre}</p>
                  <p className="text-[11px]">{a.text_activite}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-auto rounded-[1em] bg-white sm:col-span-8 px-4 py-2">
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
                  className="border rounded-full text-[13px] px-4 h-8 hidden md:flex"
                />

                <div className="flex items-center justify-center w-8 text-white bg-gray-500 rounded-full h-7">
                  <FaSearch className="" />
                </div>
              </div>

            </div>

            <div className="py-2 ">
              <table className="text-center w-[100%]">
                <thead className="px-2 py-4 h-8 rounded-full text-white bg-gray-500 text-[12px]">
                  <th style={{borderRadius :'4px 0 0 4px'}}>Photos</th>
                  <th>Identifiant</th>
                  <th>Nom Prenom</th>
                  <th>Nb retard</th>
                  <th>Nb absent</th>
                  <th style={{borderRadius :'0 4px 4px 0'}}>Status</th>
                </thead>
                <tbody className="text-[11px] md:text-[13px]">
                  <tr className="border-b">
                    <td>
                      {" "}
                      <div className="flex items-center justify-center w-8 h-8 my-1 font-bold text-purple-500 bg-gray-100 rounded-full">
                        MP
                      </div>
                    </td>
                    <td>U-078</td>
                    <td>MIHA MAminandrasana</td>
                    <td>15</td>
                    <td>7</td>
                    <td>Normale</td>
                  </tr>

                  <tr className="border-b">
                    <td>
                      {" "}
                      <div className="flex items-center justify-center w-8 h-8 my-1 font-bold bg-gray-100 rounded-full">
                        MP
                      </div>
                    </td>
                    <td>U-078</td>
                    <td>MIHA MAminandrasana</td>
                    <td>15</td>
                    <td>7</td>
                    <td>Normale</td>
                  </tr>

                  <tr className="border-b">
                    <td>
                      {" "}
                      <div className="flex items-center justify-center w-8 h-8 my-1 font-bold bg-gray-100 rounded-full">
                        MP
                      </div>
                    </td>
                    <td>U-078</td>
                    <td>MIHA MAminandrasana</td>
                    <td>15</td>
                    <td>7</td>
                    <td>Normale</td>
                  </tr>

                  <tr className="border-b">
                    <td>
                      {" "}
                      <div className="flex items-center justify-center w-8 h-8 my-1 font-bold bg-gray-100 rounded-full">
                        MP
                      </div>
                    </td>
                    <td>U-078</td>
                    <td>MIHA MAminandrasana</td>
                    <td>15</td>
                    <td>7</td>
                    <td>Normale</td>
                  </tr>

                  <tr className="border-b">
                    <td>
                      {" "}
                      <div className="flex items-center justify-center w-8 h-8 my-1 font-bold bg-gray-100 rounded-full">
                        MP
                      </div>
                    </td>
                    <td>U-078</td>
                    <td>MIHA MAminandrasana</td>
                    <td>15</td>
                    <td>7</td>
                    <td>Normale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
