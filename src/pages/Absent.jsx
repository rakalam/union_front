import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Clock from "../composant/pointage/Clock";
import MonCalendrier from "../composant/calendrier";
import ListeAbsent from "../composant/pointage/ListeAbsent";
import { IoMdAlarm, IoMdAlert, IoMdClose, IoMdSave } from "react-icons/io";
import { FaInfo, FaSave } from "react-icons/fa";
import { useSnackbar } from "notistack";
import axios from "axios";
import $ from "jquery"

const Absent = () => {

  const [miseho_ajout, setMiseho_ajout] = useState(false)
  const [miseho_modif, setMiseho_modif] = useState(false)
  const [miseho_image, setMiseho_image] = useState(true)
  const [blur, setBlur] = useState(false)
  const [pseudo, setPseudo] = useState('')
  const [donne_line, setDonne_lines] = useState('')
  const [var_id, setVar_id] = useState('')
  const [listePersonnel, setListPersonnel] = useState([])
  const [listeAbsent, setListeAbsent] = useState([])
  const [listeAbsentTrans, setListeAbsentTrans] = useState([])
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false)

  const show_ajout = () => {
    setMiseho_ajout(true)
    setMiseho_image(false)
    setMiseho_modif(false)

  }
  const hide_ajout = () => {
    setMiseho_ajout(false)
    setMiseho_image(true)
    setMiseho_modif(false)
  }

  const show_modif = (tous_donnes, date_absentt) => {
    setDonne_lines(tous_donnes)
    document.getElementById('date_absent_modif').value = tous_donnes.date_absent
    setMiseho_ajout(false)
    setMiseho_image(false)
    setMiseho_modif(true)
  }

  const soumettre_ajout = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("id_personnel", document.getElementById('id_personnel').value);
    formData.append("date_absent", document.getElementById('date_absent').value);

    axios
      .post("http://localhost:8000/api/pointer_absent", formData)
      .then(response => {
        document.getElementById('date_absent').value = ""
        document.getElementById('id_personnel').value = ""
        enqueueSnackbar(response.data.message, { variant: "success" });
        select_absent();
        setListeAbsentTrans(transforme_donner(listeAbsent));

      })
      .catch(er => {
        console.log(er);
        enqueueSnackbar("Connexion n'est pas encore établie", {
          variant: "error"
        });
      });
  }

  // Requête pour récupérer les liste des  personnels
  const select_personnel = () => {
    axios
      .get("http://localhost:8000/api/select_personnel_simplement")
      .then(response => {
        setListPersonnel(response.data.donnes);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const select_absent = () => {
    setLoading(true)
    axios
      .get("http://localhost:8000/api/select_absent_simplement")
      .then(response => {
        setListeAbsent(response.data.donnes);
        setLoading(false)
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Fonction pour transformer les données avant affichage
  const transforme_donner = donne_a_transformer => {
    return donne_a_transformer.map(item => ({
      id: item.id,
      date_absent: item.date_absent,
      jour: item.jour,

      // Données de `personnel`
      id_personnel: item.personnel?.id || 'N/A',
      avatar: item.personnel?.avatar || 'N/A',
      identifiant: item.personnel?.identifiant || 'N/A',
      prenom: item.personnel?.prenom || 'N/A',
      sexe: item.personnel?.sexe || 'N/A',

    }));
  };
  // Charger les données au montage du composant
  useEffect(() => {
    select_absent();
    select_personnel()
  }, []);
  // Transformer `donne` dès qu’il est mis à jour
  useEffect(
    () => {
      setListeAbsentTrans(transforme_donner(listeAbsent));
    },
    [listeAbsent]
  );

  const soumettre_modif = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("id_pointage", donne_line.id);
    formData.append("id_personnel", donne_line.id_personnel);
    formData.append("date_absent", document.getElementById('date_absent_modif').value);
    axios
      .post("http://localhost:8000/api/modifier_pointage_absent", formData)
      .then(response => {

        document.getElementById('date_absent_modif').value = ""
        enqueueSnackbar(response.data.message, { variant: "success" });
        select_absent();
        setListeAbsentTrans(transforme_donner(listeAbsent));
      })
      .catch(er => {
        console.log(er);
        enqueueSnackbar("Connexion n'est pas encore établie", {
          variant: "error"
        });
      });
  }


  const show_blur = () => {
    setBlur(true)
  }
  const hide_blur = () => {
    $('.div_suprimer').animate({ left: "-50%" }, 100)
    setTimeout(() => {
      setBlur(false)
    }, [100])
  }

  const supression_absent = () => {

    axios
      .get("http://localhost:8000/api/suprimer_absent/" + var_id)
      .then(response => {
        hide_blur()
        enqueueSnackbar(response.data.message, { variant: "success" });
        select_absent();
        setListeAbsentTrans(transforme_donner(listeAbsent));
      })
      .catch(error => {
        console.error(error);
      });

  }

  //pour apparaitre le div de suppression
  const show_div_supression = (id) => {
    setVar_id(id)
    show_blur();
    $(".div_suprimer").animate({ left: "50%" }, 500);
  };




  return (
    <>
      {/* div blur  */}
      <div onClick={hide_blur}
        className={`fixed top-0 left-0 z-30 w-full h-[100vh] bg-[#000000a4] dark:bg-[#ffffff0a] cursor-pointer ${blur ? "block" : "hidden"}`}
        style={{
          backdropFilter: 'blur(3px)'
        }}></div>


      {/* div pour suprimer les Planning  */}
      <div
        className="w-[60vw] md:w-[40vw] lg:w-[30vw] h-auto bg-white rounded-[1em] fixed z-50 px-4 py-4 dark:bg-[#121212] dark:text-gray-100 div_suprimer "
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
            <font className="text-[12px] ">Supression d'un Absent</font>
          </div>
          <img src="../image_union/logo_union.svg" alt="logo" className="w-8" />
        </div>

        <p className=" text-[13px] pl-4">Voulez-vous vraiment suprimer ?</p>
        <div className="relative flex items-center justify-start space-x-2 top-1 lg:left-[16vw] xl:left-[18vw] text-[14px]">
          <button
            onClick={supression_absent}
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


      <div className="px-2 pt-4 text-gray-900 dark:bg-black">

        <div className="bg-white rounded-[1em] dark:bg-[#131313] p-2 w-full">
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-8 rounded-[1em] dark:bg-[#131313] bg-white ">
              
              <div className="w-[77vw] sm:w-full p-2 bg-white rounded-lg shadow dark:bg-[#42424232]">
                <ListeAbsent
                  show_ajout={show_ajout}
                  listeAbsentTrans={listeAbsentTrans}
                  show_modif={show_modif}
                  show_div_supression={show_div_supression}
                />
                <div className={`w-full place-content-center py-8 ${loading ? "grid" : "hidden"} `}>
                  <ClipLoader size={30} color="#e6631f" />
                </div>
              </div>


            </div>

            <div className="md:col-span-4 h-auto rounded-[1em]">
              {/* juste clock  */}
              <div className="p-4 bg-white rounded-lg shadow dark:bg-[#42424232] hidden sm:block">
                <MonCalendrier />
              </div>

              <div className={`w-full my-4 rounded-lg shadow xl:h-[14em] 
               ${miseho_image ? "block" : "hidden"}
               `}>
                <div className="bg-white rounded-lg  dark:bg-[#42424232] dark:text-gray-300 ">
                  <Clock page={"Absence"} />
                </div>
                <hr />
                <div className="w-full p-2 my-1 rounde-lg ">
                  <font className="text-[11px] text-gray-900 dark:text-gray-200">Petit information </font>
                  <p className="text-gray-400 text-[11px]">
                    On cliquant sur le boutton bleu pour pointer une absence.
                    Et utiliser les icons de la table pour autre action
                  </p>
                </div>

              </div>


              {/* formulaire d'ajout  */}
              <div className={`w-full px-3 py-2 my-4 rounded-lg shadow  bg-white dark:bg-[#42424232] dark:text-gray-300 
               ${miseho_ajout ? "block" : "hidden"}
              `}>
                <div className='flex items-center justify-between py-1'>
                  <font className="text-[13px]"> Pointage Absent</font>
                  <div
                    onClick={hide_ajout}
                    className="flex items-center justify-center w-6 h-6 text-white rounded cursor-pointer cur bg-orange_union">
                    <IoMdClose className='text-[12px]' />
                  </div>
                </div>

                <form className="my-2" onSubmit={soumettre_ajout}>

                  <div className="grid grid-cols-2 gap-y-2 ">
                    <label htmlFor="personnel" className="text-[12px]">Personnel</label>
                    <select name="" id="id_personnel" className="tailwind-form" required >
                      <option value="" selected disabled>Selectionner personnel</option>
                      {
                        listePersonnel.map((l, index) => (
                          <option key={index} value={l.id}>[{l.identifiant}] {" "} {l.prenom}</option>
                        ))
                      }
                    </select>
                    <label htmlFor="personnel" className="text-[12px]">Date Absent</label>
                    <input type="date" name="" id="date_absent" className="tailwind-form" required />


                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center my-3 space-x-3 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded">
                    <FaSave />
                    <span className="">Enregistrer</span>
                  </button>

                </form>

              </div>


              {/* formulaire de Modification  */}
              <div className={`w-full px-3 py-2 my-4 rounded-lg shadow  bg-white dark:bg-[#42424232] dark:text-gray-300 
               ${miseho_modif ? "block" : "hidden"}
              `}>

                <div className='flex items-center justify-between py-1'>
                  <font className="text-[13px]"> Modification Pointage Absent</font>
                  <div
                    onClick={hide_ajout}
                    className="flex items-center justify-center w-6 h-6 text-white rounded cursor-pointer bg-orange_union">
                    <IoMdClose className='text-[12px]' />
                  </div>
                </div>


                <form
                  onSubmit={soumettre_modif}
                >

                  <div className="px-4 py-1 mb-2 bg-gray-100 rounded dark:bg-[#42424232]">
                    <font className='text-[12px] text-orange_union'>Personnel : {donne_line.prenom}</font>
                  </div>


                  <div className="grid grid-cols-2 text-[13px] gap-y-4 mt-8">
                    <label htmlFor="date_Absent">Date Absent</label>
                    <input type="date" id="date_absent_modif" className="tailwind-form" required />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center my-1 space-x-3 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded">
                    <FaSave />
                    <span className="">Modifier</span>
                  </button>


                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  );
};

export default Absent;
