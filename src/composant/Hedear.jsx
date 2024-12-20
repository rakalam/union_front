import React, { useEffect, useState } from "react";
import { FaInfo, FaMoon, FaSearch, FaSun, FaUser, FaUserAlt } from "react-icons/fa";
import { FaBell, FaServer } from "react-icons/fa6";
import { RiEqualizerFill } from "react-icons/ri";
import $ from "jquery"
import { useLocation, useNavigate } from "react-router-dom";
import { FiRefreshCcw } from "react-icons/fi";
import { useSnackbar } from "notistack";
import axios from "axios";
const Hedear = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [theme, setTheme] = useState("light")
  const [miseho, setMiseho] = useState(false)
  const [blur, setBlur] = useState(false)
  const ary = useNavigate()
  const location = useLocation()

  const show_blur = () => {
    setBlur(true)
  }
  const hide_blur = () => {
    $('.div_reinitialise').animate({ left: "-50%" }, 100)
    setTimeout(() => {
      setBlur(false)
    }, [100])
  }
  const affiche_div_reinitialise = () => {
    show_blur()
    $('.div_reinitialise').animate({ left: "50%" }, 500)
  }

  const reinitialisation = () => {
    axios
      .get("http://localhost:8000/api/reinitialistion")
      .then(response => {
        hide_blur()
        enqueueSnackbar(response.data.message, {
          variant: "success"
        });
        ary('/logic/mis_a_jour')
      })
      .catch(er => {
        console.log(er);
        enqueueSnackbar("Connexion n'est pas encore établie", {
          variant: "error"
        });
      });
  }

  const click_sun = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (theme === "dark") {
      $('.anim_button').animate({ left: "24px" }, 200)
    } else {
      $('.anim_button').animate({ left: "-12px" }, 200)
    }
    localStorage.setItem("theme", theme);
    ary("/logic/change_mode", { state: { from: location.pathname } });

  };

  const allez_recherche = () => {
    ary('/logic/recherche')
  }

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
      className="flex items-center justify-between p-2 px-4 space-x-4 text-gray-500 bg-white w-full dark:bg-[#42424232] shadow "
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

      <div className="font-bold hidden text-[0.8em] md:flex">
        <p>Gestion des Pointages</p>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <div className="relative hidden md:block">
          <input
            onFocus={allez_recherche}
            type="text"
            placeholder="recherche..."
            className="border rounded-full text-[13px] px-10 h-8 outline-none dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
          />
          <FaSearch className="absolute  top-[8.5px] left-3" />
        </div>

        <FaSearch
         onClick={allez_recherche}
         className="flex items-center justify-center w-6 h-6 py-1 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-100 md:hidden" />


        <div
          onClick={affiche_div_reinitialise}
          title="réinitialisés les pointages"
          className="flex items-center justify-center w-6 h-6 cursor-pointer bg-gray-100 rounded-full fon1t-bold text-[13px] dark:bg-gray-700 dark:text-gray-100">
          <FiRefreshCcw />
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





      <div onClick={hide_blur}
        className={`fixed top-0 -left-4 z-30 w-full h-[100vh] bg-[#000000a4] dark:bg-[#ffffff0a] cursor-pointer ${blur ? "block" : "hidden"}`}
        style={{
          backdropFilter: 'blur(3px)'
        }}></div>






      <div
        className="w-[60vw] md:w-[40vw] lg:w-[30vw] h-auto bg-white rounded-[1em] fixed z-50 px-4 py-4 dark:bg-[#121212] dark:text-gray-100 div_reinitialise "
        style={{
          top: "50%",
          left: "-50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <div className="flex items-center justify-between mt-1 mb-4">
          <div className="flex items-center justify-start space-x-2 rounded">
            <div
              className="flex items-center justify-center w-6 h-6 font-bold text-gray-400 border-gray-400 rounded-full border-[1px] cursor-pointernter cursor-pointer"
              title="modifier"
            >
              <FaInfo />
            </div>
            <font className="text-[12px] ">Réinitialisation </font>
          </div>
          <img src="../image_union/logo_union.svg" alt="logo" className="w-8" />
        </div>

        <p className=" text-[13px] pl-4">Voulez-vous vraiment réinitialisé ?</p>
        <div className="relative flex items-center justify-start space-x-2 top-1 lg:left-[16vw] xl:left-[18vw] text-[14px]">
          <button
            onClick={reinitialisation} 
            className="px-2 text-white rounded bg-red_union_500">
            OK
          </button>
          <button
            className="px-2 text-white rounded bg-bleue_union_500"
            onClick={hide_blur}
          >
            Annuler
          </button>
        </div>
      </div>













    </div>
  );
};

export default Hedear;
