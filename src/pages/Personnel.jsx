import React, { useEffect, useState } from "react";
import { FaAd, FaArrowLeft, FaBars, FaCamera, FaChartLine, FaCheckCircle, FaCommentDots, FaDAndD, FaDonate, FaDotCircle, FaGlobeAfrica, FaPause, FaSchool, FaStop, FaSun, FaUpload } from "react-icons/fa";
import { FaAngleLeft, FaArrowsToDot, FaCameraRetro, FaGlobe, FaMoon, FaPagelines, FaSchoolCircleCheck } from "react-icons/fa6";
import { FcCompactCamera } from "react-icons/fc";
import { TiUserAdd } from "react-icons/ti";
import $ from "jquery";
import Info_personnel from "../composant/personnel/info_personnel";
import TableExample from "../composant/ExempleTable";




const Personnel = () => {
  const [misehoInfo_personnel, setFisehoanaPersonnel] = useState(false)
  const [miseholiste_personnel, setFisehoanaListePersonel] = useState(true)
  const [blur, setBlur] = useState(false)

  const [pourcentage_feminin, setPourcentage_feminin] = useState(30)
  const [pourcentage_masculin, setPourcentage_masculin] = useState(70)

  const show_infoPersonnel = () => {
    setFisehoanaListePersonel(false)
    setFisehoanaPersonnel(true)
  }
  const showListePersonnel = () => {
    setFisehoanaListePersonel(true)
    setFisehoanaPersonnel(false)
  }
  const hide_blur = () => {
  
    $('.form_ajout_personnel').animate({ top :"-50%" }, 100)
    setTimeout(()=>{
      setBlur(false)
    }, [100])
  }
  const show_blur = () => {
    setBlur(true)
  }
  
  const show_form_ajout = () =>{
   show_blur()
   $('.form_ajout_personnel').animate({ top :"50%" }, 500)
  }

  return (
    <div className="px-2 pt-4 text-gray-900 dark:bg-black">

      <div onClick={hide_blur} className={`fixed top-0 left-0 z-30 w-full h-[100vh] bg-[#000000a4] dark:bg-[#ffffff0a] cursor-pointer ${blur ? "block" : "hidden"
        }`} style={{
          backdropFilter: 'blur(3px)'
        }}></div>


      {/* formulaire d'ajout employer  */}
      <div className=" w-[90vw] md:w-[70vw] lg:w-[50vw] h-auto bg-white rounded-[1em] fixed z-50 px-4 py-4 dark:bg-[#121212] dark:text-gray-100 form_ajout_personnel" style={{
        top: '-50%', left: '50%', transform: 'translate(-50%, -50%)'
      }}>

        <div className="flex items-center justify-between mt-1 mb-4">
          <font>Ajout Nouvelle Personnels</font>
          <div className="rounded">
            <img src="image_union/logo_union.svg" alt="logo" className="w-8" />
          </div>
        </div>


        <form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input type="text" placeholder="Nom" className="mb-4 tailwind-form" />
              <input type="text" placeholder="Prenom" className="mb-4 tailwind-form" />
              <div className="flex items-start justify-between space-x-2">
                <label htmlFor="naissance" className="mr-2 text-[11px]">Date de Naissance</label>
                <input type="date" id="naissance" placeholder="Prenom" className="mb-4 tailwind-form" />
                <input type="text" placeholder="Lieu" className="mb-4 tailwind-form" />
              </div>
              <input type="text" placeholder="Num CIN" className="mb-4 tailwind-form" />
              <select name="" id="" className="tailwind-form">
                <option selected disabled>Compte</option>
                <option >MH-1258</option>
                <option >MH-Tolo-UN</option>
                <option >MH-Tolo-UN</option>
                <option >MH-Tolo-UN</option>
                <option >MH-Tolo-UN</option>
                <option >MH-Tolo-UN</option>
              </select>
            </div>

            <div>
              <input type="text" placeholder="Etablissement" className="mb-4 tailwind-form" />
              <input type="text" placeholder="Filière" className="mb-4 tailwind-form" />
              <input type="tel" placeholder="Téléphone" className="mb-4 tailwind-form" />
              <input type="text" placeholder="Adresse" className="mb-4 tailwind-form" />

              <select name="" id="" className="tailwind-form">
                <option selected disabled>Sexe</option>
                <option >Masculin</option>
                <option >Feminin</option>
              </select>
            </div>
          </div>
          <button  className="flex items-center justify-center px-4 py-1 my-3 space-x-3 text-white rounded bg-bleue_union_500">
            <FaDAndD />
            <p>Ajouter</p>
          </button>

        </form>

      </div>



      <div className={`bg-white rounded-[1em] md:p-4 px-1 pt-2 pb-4 ${miseholiste_personnel ? '' : 'hidden'}`}>

        {/* ilay div en grid mapizara ho col span 9 sy col span 3  */}
        <div className="grid w-full gap-4 md:grid-cols-12">



          {/* ilay div col span 3  */} {/* misy ilay div kely roa en flex flex-col*/}
          <div className="flex flex-col items-center justify-start space-y-4 md:col-span-3 sm:flex-row sm:space-x-2 md:flex-col">
            {/* ilay div misy bar masculin  */}
            <div className="shadow rounded-[1em] h-auto w-full bg-white py-2 px-4">
              <div className="text-[13px] flex items-center justify-between">
                <font>Comparaison</font>
                <FaChartLine className="text-orange_union" />
              </div>
              <p className="text-[11px] text-gray-400 mt-4">Ceci montre les totalités des Personneles suivant leur sexe</p>
              {/* ilay personnel boribory  */}
              <div className="mt-2 mb-7">
                <div className="flex -space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 px-2 font-bold text-purple-500 bg-purple-300 border-[2px]  rounded-full border-purple-500">
                    NG
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 px-2 font-bold text-orange-500 bg-orange-300 border-[2px]  rounded-full border-orange-500">
                    RT
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 px-2 font-bold text-blue-500 bg-blue-300 border-[2px]  rounded-full border-blue-500">
                    RT
                  </div>

                  <div className="flex items-center justify-center w-8 h-8 px-2 font-bold text-yellow-400 bg-yellow-50 border-[2px]  rounded-full border-yellow-400">
                    RT
                  </div>

                  <div className="flex items-center justify-center w-8 h-8 px-2 font-bold text-orange-500 bg-orange-300 border-[2px]  rounded-full border-orange-500">
                    RT
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 px-2 font-bold text-blue-500 bg-blue-300 border-[2px]  rounded-full border-blue-500">
                    RT
                  </div>

                  <div className="flex items-center justify-center w-8 h-8 px-2 font-bold text-yellow-400 bg-yellow-50 border-[2px]  rounded-full border-yellow-400">
                    RT
                  </div>

                  <div className="flex items-center justify-center w-8 h-8  text-gray-500 bg-gray-50 border-[2px]  rounded-full border-gray-300 text-[12px]">
                    +16
                  </div>

                </div>
                <div className="my-4">
                  <div className="flex items-center justify-between">
                    <font className="text-[12px]">Masculin</font>
                    <font className="text-[12px]">70%</font>
                  </div>
                  <div className="w-full bg-gray-300 my1">
                    <div className={`w-[70%] h-1 rounded-full bg-bleue_union_500`} style={{ width: pourcentage_masculin + "%" }}>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="text-[13px] flex items-center justify-between my-4">
                <button className="flex items-center justify-center px-2 py-0 text-white rounded bg-bleue_union_500 text-[11px]">
                  bar masculin
                </button>

                <div className="flex space-x-2 text-bleue_union_500">
                  <FaArrowLeft />
                  <FaDotCircle />
                </div>
              </div>
            </div>
            {/* ilay div misy bar feminin */}
            <div className="shadow rounded-[1em] h-auto w-full bg-white py-2 px-4">
              <div className="text-[13px] flex items-center justify-between">
                <font>Comparaison</font>
                <FaChartLine className="text-orange_union" />
              </div>
              <p className="text-[11px] text-gray-400 mt-4">Ceci montre les totalités des Personneles suivant leur sexe</p>
              {/* ilay personnel boribory  */}
              <div className="mt-2 mb-7">
                <div className="flex -space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 px-2 font-bold text-purple-500 bg-purple-300 border-[2px]  rounded-full border-purple-500">
                    NG
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 px-2 font-bold text-orange-500 bg-orange-300 border-[2px]  rounded-full border-orange-500">
                    RT
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 px-2 font-bold text-blue-500 bg-blue-300 border-[2px]  rounded-full border-blue-500">
                    RT
                  </div>

                  <div className="flex items-center justify-center w-8 h-8 px-2 font-bold text-yellow-400 bg-yellow-50 border-[2px]  rounded-full border-yellow-400">
                    RT
                  </div>

                  <div className="flex items-center justify-center w-8 h-8  text-gray-500 bg-gray-50 border-[2px]  rounded-full border-gray-300 text-[12px]">
                    +8
                  </div>

                </div>


                <div className="my-4">
                  <div className="flex items-center justify-between">
                    <font className="text-[12px]">Feminin</font>
                    <font className="text-[12px]">30%</font>
                  </div>
                  <div className="w-full my-1 bg-gray-300">
                    <div className={` h-1 rounded-full bg-orange_union`} style={{ width: pourcentage_feminin + "%" }}>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="text-[13px] flex items-center justify-between my-4">
                <button className="flex items-center justify-center px-2 py-0 text-white rounded bg-orange_union_100 text-[11px]">
                  bar feminin
                </button>

                <div className="flex space-x-2 text-orange_union_100">
                  <FaArrowLeft />
                  <FaDotCircle />
                </div>
              </div>


            </div>
          </div>



          <div className="md:col-span-9 md:shadow md:rounded-[1em] px-1 md:px-2 py-2 bg-white w-[75vw] sm:w-[80vw] md:w-full">
            <TableExample show_infoPersonnel={show_infoPersonnel} show_form_ajout={show_form_ajout} />

          </div>

        </div>

      </div>






      {/* info personnel  */}
      <Info_personnel misehoInfo_personnel={misehoInfo_personnel} showListePersonnel={showListePersonnel} />


    </div>
  );
};

export default Personnel;