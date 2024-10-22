import React, { useEffect, useState } from "react";
import { FaMoon, FaSearch, FaSun, FaUser, FaUserAlt } from "react-icons/fa";
import { FaBell, FaServer } from "react-icons/fa6";
import { RiEqualizerFill } from "react-icons/ri";
import $ from "jquery"
const Hedear = () => {
  const [theme, setTheme] = useState("light")
  const [miseho, setMiseho] = useState(false)


  const click_sun = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (theme === "dark") {
      $('.anim_button').animate({ left: "24px" }, 200)
    } else {
      $('.anim_button').animate({ left: "-12px" }, 200)
    }
    localStorage.setItem("theme", theme);
  };
  const hover_entrer_sun = () => {
    setMiseho(true)
  }
  const hover_sortir_sun = () => {
    setMiseho(false)
  }
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      $('.anim_button').animate({ left: "24px" }, 300)
    } else {
      document.documentElement.classList.remove("dark");
      $('.anim_button').animate({ left: "-12px" }, 300)
    }
  
  }, [theme]);
  return (
    <div
      className="flex items-center justify-between p-2 px-4 space-x-4 text-gray-500 bg-white w-full dark:bg-[#42424232] shadow"
      style={{ borderRadius: "0 0 1em 1em" }}
    >
      <div className="relative flex items-center justify-center px-1 py-1 space-x-4 border rounded-full">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center z-10 ${localStorage.getItem('theme') === "light" ? "text-white" : "dark:bg-[#42424232] text-[#42424232]"}`}>
          <FaSun />
        </div>
        <div className={`flex items-center justify-center w-5 h-5 rounded-full z-10  ${localStorage.getItem('theme') === "dark" ? "text-white" : "bg-white text-white"}`}>
          <FaMoon />
        </div>
        <div className="absolute w-5 h-5 rounded-full -left-3 top-1 bg-orange_union -z-0 anim_button"></div>

      </div>

      <div className="font-bold text-[1.3em]">
        <p>Gestion des Pointages</p>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="recherche..."
            className="border rounded-full text-[13px] px-10 h-8 outline-none dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
          />
          <FaSearch className="absolute  top-[8.5px] left-3" />
        </div>

        <FaSearch className="flex items-center justify-center w-6 h-6 py-1 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-100 md:hidden" />


        <div className="flex items-center justify-center w-6 h-6 pt-0.5 bg-gray-100 rounded-full fon1t-bold text-[13px] dark:bg-gray-700 dark:text-gray-100">
          <font>AD</font>
        </div>
        <div className="relative">
          <FaBell className="w-6 h-6 px-1 py-1 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-100" />
          <div className="absolute w-4 h-4 text-white bg-red_union_500 rounded-full text-[10px] flex items-center justify-center -top-1 left-4">
            5
          </div>
        </div>
        <div className="relative">
          <RiEqualizerFill
            className="block w-6 h-6 px-1 py-1 duration-200 bg-gray-100 rounded-full cursor-pointer dark:bg-gray-700 dark:text-gray-100"
            onClick={click_sun}
            onMouseEnter={hover_entrer_sun}
            onMouseLeave={hover_sortir_sun}
          />


          <div className={`absolute px-4 py-1 font-semibold text-gray-900 duration-700 bg-gray-100 rounded shadow-sm top-8 -left-20 text-[11px] w-28 ${miseho ? "bloc" : "hidden"}`}>
            changer thème
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hedear;
