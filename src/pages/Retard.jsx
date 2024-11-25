import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Clock from "../composant/pointage/Clock";
import MonCalendrier from "../composant/calendrier";
import ListeRetard from "../composant/pointage/ListeRetard";
import ListeAbsent from "../composant/pointage/ListeAbsent";
import { IoMdAlarm, IoMdAlert, IoMdClose, IoMdSave } from "react-icons/io";
import { FaSave, FaInfo } from "react-icons/fa";
import { enqueueSnackbar, SnackbarProvider, useSnackbar } from "notistack";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import $ from "jquery"
import { RegEx_retard } from "../composant/retard/RegEx_retard";
import { ClipLoader } from "react-spinners";

const Retard = () => {

  const [miseho_ajout, setMiseho_ajout] = useState(false)
  const [miseho_modif, setMiseho_modif] = useState(false)
  const [miseho_image, setMiseho_image] = useState(true)
  const [blur, setBlur] = useState(false)
  const [pseudo, setPseudo] = useState('')
  const [donne_line, setDonne_lines] = useState('')
  const [var_id, setVar_id] = useState('')
  const [listePersonnel, setListPersonnel] = useState([])
  const [listeRetard, setListeRetard] = useState([])
  const [listeRetardTrans, setListeRetardTrans] = useState([])
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

  const show_modif = (tous_donnes, pseudoo, date_retardd) => {
    setDonne_lines(tous_donnes)
    document.getElementById('date_retard').value = date_retardd
    setPseudo(pseudoo)
    setMiseho_ajout(false)
    setMiseho_image(false)
    setMiseho_modif(true)
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

  const select_retard = () => {
    setLoading(true)
    axios
      .get("http://localhost:8000/api/select_retard_simplement")
      .then(response => {
        setListeRetard(response.data.donnes);
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
      date_retard: item.date_retard,
      jour: item.jour,
      nb_heure_retard: item.nb_heure_retard,
      // Données de `personnel`
      id_personnel: item.personnel?.id || 'N/A',
      avatar: item.personnel?.avatar || 'N/A',
      identifiant: item.personnel?.identifiant || 'N/A',
      prenom: item.personnel?.prenom || 'N/A',
      sexe: item.personnel?.sexe || 'N/A',
      photos: item.personnel?.photos,

    }));
  };
  // Charger les données au montage du composant
  useEffect(() => {
    // Fonction pour exécuter toutes les requêtes en parallèle
    const fetchData = async () => {
      try {
        // Attendre que toutes les requêtes soient complétées en parallèle
        await Promise.all([
          select_retard(),
          select_personnel()
        ]);
      } catch (error) {
        console.error("Une erreur s'est produite lors du chargement des données :", error);
      }
    };
    // Appel de la fonction fetchData au chargement du composant
    fetchData();
  }, []);
  // Transformer `donne` dès qu’il est mis à jour
  useEffect(
    () => {
      setListeRetardTrans(transforme_donner(listeRetard));
    },
    [listeRetard]
  );

  const soumettre_modif = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("id_pointage", donne_line.id);
    formData.append("id_personnel", donne_line.id_personnel);
    formData.append("date_retard", document.getElementById('date_retard').value);
    formData.append("heure_arrive", document.getElementById('heure_arrive').value);

    axios
      .post("http://localhost:8000/api/modifier_pointage_retard", formData)
      .then(response => {
        enqueueSnackbar(response.data.message, { variant: "success" });
        select_retard();
        setListeRetardTrans(transforme_donner(listeRetard));

        document.getElementById('date_retard').value = ""
        document.getElementById('heure_arrive').value = ""
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

  const supression_retard = () => {

    axios
      .get("http://localhost:8000/api/suprimer_retard/" + var_id)
      .then(response => {
        hide_blur()
        enqueueSnackbar(response.data.message, { variant: "success" });
        select_retard();
        setListeRetardTrans(transforme_donner(listeRetard));
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
            <font className="text-[12px] ">Supression d'un Retard</font>
          </div>
          <img src="../image_union/logo_union.svg" alt="logo" className="w-8" />
        </div>

        <p className=" text-[13px] pl-4">Voulez-vous vraiment suprimer ?</p>
        <div className="relative flex items-center justify-start space-x-2 top-1 lg:left-[16vw] xl:left-[18vw] text-[14px]">
          <button onClick={supression_retard} className="px-2 text-white rounded bg-red_union_500">
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
          <div className="grid md:gap-4 md:grid-cols-12">

            <div className="md:col-span-8 rounded-[1em]">
            
              <div className="w-[77vw] sm:w-full p-4 bg-white rounded-lg shadow dark:bg-[#42424232]">
                <ListeRetard
                  show_ajout={show_ajout}
                  listeDesRetards={listeRetardTrans}
                  show_modif={show_modif}
                  show_div_supression={show_div_supression}
                />

                <div className={`w-full place-content-center py-8 ${loading ? "grid" : "hidden"} `}>
                  <ClipLoader size={30} color="#e6631f" />
                </div>
              </div>


            </div>

            <div className="md:col-span-4  rounded-[1em]">
              {/* juste clock  */}
              <div className="p-4 bg-white rounded-lg shadow dark:bg-[#42424232] hidden sm:block">
                <MonCalendrier />
              </div>

              <div className={`w-full my-4 rounded-lg shadow xl:h-[14em] 
               ${miseho_image ? "block" : "hidden"}
               `}>
                <div className="bg-white rounded-lg  dark:bg-[#42424232] dark:text-gray-300 ">
                   <Clock page={"retard"} />
                </div> 
                <hr />
                <div className="w-full p-2 my-1 rounde-lg ">
                    <font className="text-[11px] text-gray-900 dark:text-gray-200">Petite information </font>
                    <p className="text-gray-400 text-[11px]">
                    Cliquer sur le bouton bleu pour pointer un retard, 
                    et utiliser les icônes de la table pour
                     les autres actions
                      </p>
                </div>

              </div>

              <div className={`w-full px-3 py-2 my-4 rounded-lg shadow  bg-white dark:bg-[#42424232] dark:text-gray-300 
               ${miseho_ajout ? "block" : "hidden"}
              `}>

                <div className='flex items-center justify-between py-1'>
                  <font className="text-[13px]"> Pointage Retard</font>
                  <div
                    onClick={hide_ajout}
                    className="flex items-center justify-center w-6 h-6 text-white rounded cursor-pointer bg-orange_union">
                    <IoMdClose className='text-[12px]' />
                  </div>
                </div>

                <Formik
                  initialValues={{
                    id_personnel: "",
                    date_retard: "",
                    heure_arrive: "",
                  }}
                  validationSchema={RegEx_retard}
                  onSubmit={(values, { resetForm }) => {
                    const formData = new FormData();
                    formData.append("id_personnel", values.id_personnel);
                    formData.append("date_retard", values.date_retard);
                    formData.append("heure_arrive", values.heure_arrive);
                    axios
                      .post("http://localhost:8000/api/pointer_retard", formData)
                      .then(response => {
                        resetForm()
                        enqueueSnackbar(response.data.message, { variant: "success" });
                        select_retard();
                        setListeRetardTrans(transforme_donner(listeRetard));

                      })
                      .catch(er => {
                        console.log(er);
                        enqueueSnackbar("Connexion n'est pas encore établie", {
                          variant: "error"
                        });
                      });
                  }}
                >

                  {({ errors, touched }) =>


                    <Form className="" >

                      {/* Champ Sexe (Select) */}
                      <div className="block">
                        <div className="grid w-full grid-cols-2 gap-y-2 ">
                          <label htmlFor="personnel" className="text-[12px]">Personnel</label>
                          <Field
                            name="id_personnel"
                            as="select"
                            className={`tailwind-form ${errors.id_personnel && touched.id_personnel
                              ? "border-red-500"
                              : ""} `}
                          >
                            <option value="" selected disabled>
                              Liste des Personnels
                            </option>
                            {
                              listePersonnel.map((l, index) => (
                                <option key={index} value={l.id}>[{l.identifiant}] {" "} {l.prenom}</option>
                              ))
                            }

                          </Field>
                        </div>

                        <ErrorMessage
                          name="id_personnel"
                          component="div"
                          className="mt-1 text-[11px] text-[red] text-end"
                        />
                      </div>


                      <div className="block my-2">
                        <div className="grid w-full grid-cols-2 gap-y-2 ">
                          <label htmlFor="personnel" className="text-[12px]">Date</label>
                          <Field
                            name="date_retard"
                            type="date"
                            className={`tailwind-form ${errors.date_retard && touched.date_retard
                              ? "border-red-500"
                              : ""} `}
                          />
                        </div>

                        <ErrorMessage
                          name="date_retard"
                          component="div"
                          className="mt-1 text-[11px] text-[red] text-end "
                        />
                      </div>


                      <div className="block my-2">
                        <div className="grid w-full grid-cols-2 gap-y-2 ">
                          <label htmlFor="personnel" className="text-[12px]">Heure arrive</label>
                          <Field
                            name="heure_arrive"
                            type="time"
                            className={`tailwind-form ${errors.heure_arrive && touched.heure_arrive
                              ? "border-red-500"
                              : ""} `}
                          />
                        </div>

                        <ErrorMessage
                          name="heure_arrive"
                          component="div"
                          className="mt-1 text-[11px] text-[red] text-end"
                        />
                      </div>

                      <button
                        type="submit"
                        className="flex items-center justify-center my-1 space-x-3 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded">
                        <FaSave />
                        <span className="">Enregistrer</span>
                      </button>
                    </Form>
                  }
                </Formik>

              </div>


              <div className={`w-full px-3 py-2 my-4 rounded-lg shadow  bg-white dark:bg-[#42424232] dark:text-gray-300 
               ${miseho_modif ? "block" : "hidden"}
              `}>

                <div className='flex items-center justify-between py-1'>
                  <font className="text-[13px]"> Modification Pointage Retard</font>
                  <div
                    onClick={hide_ajout}
                    className="flex items-center justify-center w-6 h-6 text-white rounded cursor-pointer bg-orange_union">
                    <IoMdClose className='text-[12px]' />
                  </div>
                </div>


                <form onSubmit={soumettre_modif}>

                  <div className="px-4 py-1 mb-2 bg-gray-100 rounded dark:bg-[#42424232]">
                    <font className='text-[12px] text-orange_union'>Personnel : {pseudo}</font>
                  </div>

                  <div className="grid grid-cols-2 text-[13px] gap-y-4">
                    <label htmlFor="date_retard">Date retard</label>
                    <input type="date" id="date_retard" className="tailwind-form" required />

                    <label htmlFor="date_retard">Heure d'arrivé</label>
                    <input type="time" id="heure_arrive" className="tailwind-form" required />
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

export default Retard;
