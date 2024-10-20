import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaUserTie, FaArrowLeft, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoMdAlarm } from "react-icons/io";
import { MdWorkHistory } from "react-icons/md";
import $ from "jquery";
import { FaArrowRight } from "react-icons/fa6";

const Sidebar = () => {
  const [activelink, setActivelink] = useState(0);

  const clic_lien = (index) => {
    setActivelink(index);
  };

  const entrer = (id) => {
    const id_show = "#id" + id;
    $(id_show).css({ left: "8vw", opacity: "1" });
  };
  const leave = (id) => {
    const id_show = "#id" + id;
    $(id_show).css({ left: "15vw", opacity: "0" });
  };

  const entrer_dec = () => {
    $('.deconnexion').css({ left: "15vw", opacity: "1" });
  };
  const sortir_dec = () => {
    $('.deconnexion').css({ left: "25vw", opacity: "0" });
  };




  const SIDEBAR_LINK = [
    { id: 1, path: "/", name: "Dashboard", icon: BsFillBarChartLineFill },
    { id: 2, path: "/personnel", name: "Personnel", icon: FaUserTie },
    { id: 3, path: "/compte", name: "Compte", icon: RiAccountPinCircleFill },
    { id: 4, path: "/planning", name: "Planning", icon: AiOutlineSchedule },
    { id: 5, path: "/retard", name: "Retard", icon: IoMdAlarm },
    { id: 6, path: "/presence", name: "Absence", icon: MdWorkHistory },
  ];

  return (
    <div className="fixed top-0 left-0 z-10 w-16 px-3 pt-4 duration-100 bg-white h-[100%] lg:w-56 dark:bg-[#42424232] dark:text-white">
      {/* logo */}
      <div className="flex items-end w-full mb-3 lg:px-5">
        <div className="rounded">
          <img src="image_union/logo_union.svg" alt="logo" className="w-8" />
        </div>
        <div className="hidden ml-4 lg:block">
          <p className="font-bold">Union</p>
        </div>
      </div>
      {/* <hr /> */}

      {/* link  */}

      <ul className="mt-10 space-y-5">
        {SIDEBAR_LINK.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded lg:px-5 py-2 hover:border-l-orange_union hover:border-l-4 hover:bg-white dark:hover:bg-gray-700 hover:md:px-7 duration-100
           ${activelink === index ? 'bg-white dark:bg-gray-700' : ''
              }`}
          >
            <Link
              to={link.path}
              onClick={() => clic_lien(index)}
              className="relative flex items-center justify-center lg:justify-start md:space-x-5"
            >
              <span
                className="text-gray-500 dark:text-gray-100"
                onMouseEnter={() => entrer(link.id)}
                onMouseLeave={() => leave(link.id)}
              >
                {link.icon()}
              </span>
              <span className="hidden text-[13px] text-gray-950 lg:flex dark:text-gray-100">
                {link.name}
              </span>

              <span
                id={"id" + link.id}
                style={{
                  left: "15vw",
                  opacity: "0",
                }}
                className="absolute z-50 px-4 py-1 font-semibold text-gray-900 duration-200 bg-gray-100 rounded shadow-sm lg:hidden"
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div onMouseEnter={entrer_dec} onMouseLeave={sortir_dec} className="absolute left-0 flex items-center justify-center w-full py-2 space-x-4 text-white cursor-pointer bg-bleue_union_500 bottom-4">
        <FaArrowLeft />
        <span className="hidden lg:flex" >Deconnexion</span>
        <span className="absolute z-50 px-4 py-1 font-semibold text-gray-900 duration-200 bg-gray-100 rounded shadow-sm lg:hidden deconnexion"
          style={{
            left: "25vw",
            opacity: "0",
          }}
        >Deconnexion</span>
      </div>
    </div>
  );
};

export default Sidebar;