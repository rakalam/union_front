import React, { useEffect, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import { GiFemale, GiMale } from "react-icons/gi";
import {
  FaAd,
  FaArrowLeft,
  FaBars,
  FaCamera,
  FaChartLine,
  FaCheckCircle,
  FaCommentDots,
  FaDAndD,
  FaDonate,
  FaDotCircle,
  FaFemale,
  FaGlobeAfrica,
  FaMale,
  FaPause,
  FaSave,
  FaSchool,
  FaStop,
  FaSun,
  FaUpload,
  FaUser
} from "react-icons/fa";
import {
  FaAngleLeft,
  FaArrowsToDot,
  FaCameraRetro,
  FaGlobe,
  FaInfo,
  FaMoon,
  FaPagelines,
  FaSchoolCircleCheck
} from "react-icons/fa6";
import { DotLoader } from "react-spinners";
import { FcCompactCamera } from "react-icons/fc";
import { TiUserAdd } from "react-icons/ti";
import $ from "jquery";
import Info_personnel from "../composant/personnel/info_personnel";
import TableExample from "../composant/personnel/ListePersonnel";
import { SnackbarProvider, useSnackbar } from "notistack";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegEx_personnel } from "../composant/personnel/RegEx_personnel";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdCamera } from "react-icons/io";

const Personnel = () => {

  const ary = useNavigate()
  const [loading, setLoading] = useState(false)
  const [donne_table, setDonne_table] = useState([]);


  const [donne_table_trans, setDonne_table_trans] = useState([]);
  const [avatar_masculin, setAvatarMasculin] = useState([]);
  const [avatar_feminin, setAvatarFeminin] = useState([]);
  const [masculin_total, setMasculin_total] = useState('');
  const [feminin_total, setFeminin_total] = useState('');
  const [pourcentage_masculin, setPourcentage_masculin] = useState('');
  const [pourcentage_feminin, setPourcentage_feminin] = useState('');

  const [donne_lines, setDonne_lines] = useState(null);
  const [id_suprimer, setId_suprimer] = useState("");
  const [pseudo, setPseudo] = useState("");

  const [blur, setBlur] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  //pour les photos
  const inputRef = useRef(null);
  const modifinputRef = useRef(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoPreviewModif, setPhotoPreviewModif] = useState(null);
  const handleImageChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    setFieldValue("photos", file || null);
    setPhotoPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleImageChangeModif = (event, setFieldValue) => {
    const file = event.target.files[0];
    setFieldValue("photos", file || null);
    setPhotoPreviewModif(file ? URL.createObjectURL(file) : null);
  };


  const handleFormReset = (resetForm, setFieldValue) => {
    resetForm();
    setPhotoPreview(null);
    setFieldValue("photos", null);
    if (inputRef.current) inputRef.current.value = ""; // Réinitialise l'input file
  };

  //pour aller au information de chaque personnel
  const show_infoPersonnel = (id) => {

    ary('/logic/info_personnel', { state: id })


  };

  // pour disparaitre le fond floux
  const hide_blur = () => {
    $(".form_modification_personnel").animate({ top: "-50%" }, 100);
    $(".form_ajout_personnel").animate({ top: "-50%" }, 100);
    $(".div_suprimer_personnel").animate({ left: "-50%" }, 100);
    setTimeout(
      () => {
        setBlur(false);
      },
      [100]
    );
  };



  //pour apparaitre le fond floux
  const show_blur = () => {
    setBlur(true);
  };
  //pour apparaitre le formulaire d'ajout
  const show_form_ajout = () => {
    show_blur();
    $(".form_ajout_personnel").animate({ top: "50%" }, 500);
  };

  //pour apparaitre le formulaire d'ajout
  const show_form_modif = (tout_donnes, prenom_affiche) => {
    setDonne_lines(tout_donnes)
    setPseudo(prenom_affiche)
    show_blur();
    if (tout_donnes && tout_donnes.photos) {
      setPhotoPreviewModif(`http://127.0.0.1:8000/storage/${tout_donnes.photos}`);
    } else {
      setPhotoPreviewModif(null); // Si pas d'image, réinitialise l'aperçu
    }
    $(".form_modification_personnel").animate({ top: "50%" }, 500);
  };

  //pour apparaitre le div de suppression
  const show_div_supression_personnel = (id, pseudo) => {
    setId_suprimer(id)
    setPseudo(pseudo)
    show_blur();
    $(".div_suprimer_personnel").animate({ left: "50%" }, 500);
  };

  // Requête pour suprimer des  personnels
  const supression_personnel = () => {
    axios
      .get("http://localhost:8000/api/suprimer_personnel/" + id_suprimer)
      .then(response => {
        hide_blur()
        enqueueSnackbar(response.data.message, { variant: "success" });
        select_personnel()
        setDonne_table_trans(transforme_donner(donne_table))
        select_statistique_personnels()
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
        setMasculin_total(response.data.masculin_total);
        setFeminin_total(response.data.feminin_total);
        setAvatarMasculin(response.data.avatar_masculin)
        setAvatarFeminin(response.data.avatar_feminin)
        setPourcentage_masculin(parseInt(response.data.pourcentage_masculin))
        setPourcentage_feminin(parseInt(response.data.pourcentage_feminin))

      })
      .catch(error => {
        console.error(error);
      });
  };

  // Requête pour récupérer les liste des  personnels
  const select_personnel = () => {
    setLoading(true)
    axios
      .get("http://localhost:8000/api/select_personnel_simplement")
      .then(response => {
        setDonne_table(response.data.donnes);
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
      identifiant: item.identifiant,
      avatar: item.avatar,
      nom: item.nom,
      prenom: item.prenom,
      date_naissance: item.date_naissance,
      sexe: item.sexe,
      adresse: item.adresse,
      contact: item.contact,
      cin: item.cin,
      photos: item.photos,
      nb_retard: item.nb_retard,
      nb_absent: item.nb_absent

    }));
  };

  // Charger les données au montage du composant
  useEffect(() => {
    // Fonction pour exécuter toutes les requêtes en parallèle
    const fetchData = async () => {
      try {
        // Attendre que toutes les requêtes soient complétées en parallèle
        await Promise.all([
          select_personnel(),
          select_statistique_personnels()
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
      setDonne_table_trans(transforme_donner(donne_table));
    },
    [donne_table]
  );

  return (
    <div className="px-2 pt-4 text-gray-900 dark:bg-black">
      {/* div blur  */}
      <div
        onClick={hide_blur}
        className={`fixed top-0 left-0 z-30 w-full h-[100vh] bg-[#000000a4] dark:bg-[#ffffff0a] cursor-pointer ${blur
          ? "block"
          : "hidden"}`}
        style={{
          backdropFilter: "blur(3px)"
        }}
      />

      {/* formulaire d'ajout employer  */}
      <div
        className=" w-[90vw] md:w-[50vw] lg:w-[30vw] h-auto bg-white rounded-[1em] fixed z-50 px-4 py-4 dark:bg-[#121212] dark:text-gray-100 form_ajout_personnel"
        style={{
          top: "-50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <div className="flex items-center justify-between mt-1 mb-4">
          <font>Ajout Nouvelle Personnels</font>
          <div className="rounded">
            <img src="../image_union/logo_union.svg" alt="logo" className="w-8" />
          </div>
        </div>

        <Formik
          initialValues={{
            nom: "",
            prenom: "",
            date_naissance: "",
            sexe: "",
            adresse: "",
            contact: "",
            cin: "",
            photos: null,
          }}
          validationSchema={RegEx_personnel}
          onSubmit={(values, { resetForm, setFieldValue }) => {

          
            const formData = new FormData();
            formData.append("nom", values.nom);
            formData.append("prenom", values.prenom);
            formData.append("date_naissance", values.date_naissance);
            formData.append("sexe", values.sexe);
            formData.append("adresse", values.adresse); // Ajouter les champs supplémentaires
            formData.append("contact", values.contact);
            formData.append("cin", values.cin);
            // Ajouter la photo au FormData si elle est fournie
            if (values.photos) {
              formData.append("photos", values.photos);
            }
            axios
              .post("http://localhost:8000/api/ajout_personnel", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .then(response => {
                if(response.data.message === "Une image avec ce nom existe déjà."){
                  enqueueSnackbar(response.data.message, { variant: "error" });
                }else{
                  handleFormReset(resetForm, setFieldValue);
                  hide_blur();
                  enqueueSnackbar(response.data.message, { variant: "success" });
                  select_personnel();
                  setDonne_table_trans(transforme_donner(donne_table));
                  select_statistique_personnels()//polling
                }


              })
              .catch(er => {
                console.log(er);
                enqueueSnackbar("Connexion n'est pas encore établie", {
                  variant: "error"
                });
              });

          }}
        >
          {({ errors, touched, setFieldValue }) =>
            <Form className="p-4 space-y-4">

              {/* Photo avec avatar */}
              <div className="grid w-full py-2 rounded-lg place-content-center bg-gray-100 dark:bg-[#202020ab]">
                <div
                  onClick={() => inputRef.current.click()}
                  className='flex relative flex-col items-center justify-center w-32 h-32 text-white border-[4px] rounded-full cursor-pointer'
                >
                  <div className="absolute border-gray-400 border-[2px] bg-white dark:bg-[#202020] text-gray-400 rounded-full grid place-content-center bottom-0 px-1 py-1 -right-0">
                    <IoMdCamera className=" text-[20px]" />
                  </div>

                  {photoPreview ? (
                    <div className='w-32 h-32 overflow-hidden rounded-full'>
                      <img src={photoPreview} className='object-cover w-full h-full' alt="Aperçu" />
                    </div>
                  ) : (
                    <div className="grid w-32 h-32 text-gray-400 bg-white rounded-full place-content-center dark:bg-[#202020ab]">
                      <FaUser className='text-[4em]' />
                    </div>
                  )}
                  <input
                    type="file"
                    name="photos"
                    ref={inputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={(event) => handleImageChange(event, setFieldValue)}
                  />
                  <ErrorMessage
                    name="photos"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

              </div>
              <div className="grid w-full grid-cols-2 gap-2">

                {/* Champ Nom */}
                <div>
                  <Field
                    name="nom"
                    type="text"
                    placeholder="Nom"
                    className={`tailwind-form ${errors.nom && touched.nom
                      ? "border-red-500"
                      : ""} `}
                  />
                  <ErrorMessage
                    name="nom"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Champ Prénom */}
                <div>
                  <Field
                    name="prenom"
                    type="text"
                    placeholder="Prenom"
                    className={`tailwind-form ${errors.prenom && touched.prenom
                      ? "border-red-500"
                      : ""} `}
                  />
                  <ErrorMessage
                    name="prenom"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Champ adresse */}
                <div>
                  <Field
                    name="adresse"
                    type="text"
                    placeholder="Adresse"
                    className={`tailwind-form ${errors.adresse && touched.adresse
                      ? "border-red-500"
                      : ""} `}
                  />
                  <ErrorMessage
                    name="adresse"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Champ contact */}
                <div>
                  <Field
                    name="contact"
                    type="text"
                    placeholder="Contact"
                    className={`tailwind-form ${errors.contact && touched.contact
                      ? "border-red-500"
                      : ""} `}
                  />
                  <ErrorMessage
                    name="contact"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Champ CIN */}
                <div>
                  <Field
                    name="cin"
                    type="text"
                    placeholder="CIN"
                    className={`tailwind-form ${errors.cin && touched.cin
                      ? "border-red-500"
                      : ""} `}
                  />
                  <ErrorMessage
                    name="cin"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Champ date de naissance */}
                <div>
                  <Field
                    title="date de naissance"
                    name="date_naissance"
                    type="date"
                    className={`tailwind-form ${errors.date_naissance &&
                      touched.date_naissance
                      ? "border-red-500"
                      : ""} `}
                  />
                  <ErrorMessage
                    name="date_naissance"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Champ Sexe (Select) */}
                <div>
                  <Field
                    name="sexe"
                    as="select"
                    className={`tailwind-form ${errors.sexe && touched.sexe
                      ? "border-red-500"
                      : ""} `}
                  >
                    <option value="" selected disabled>
                      Selectionner le sexe
                    </option>
                    <option value="masculin">Masculin</option>
                    <option value="feminin">Feminin</option>
                  </Field>
                  <ErrorMessage
                    name="sexe"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

              </div>

              {/* Bouton de soumission */}
              <button
                className="flex items-center justify-center space-x-3 my-4 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded"
              >
                <FaSave />
                <span className="text-[13px]">Enregistrer</span>
              </button>
            </Form>}
        </Formik>
      </div>

      {/* formulaire de modification employer  */}
      <div
        className=" w-[90vw] md:w-[50vw] lg:w-[30vw] h-auto bg-white rounded-[1em] fixed z-50 px-4 py-4 dark:bg-[#121212] dark:text-gray-100 form_modification_personnel"
        style={{
          top: "-50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <div className="flex items-center justify-between mt-1 mb-4">
          <font>Modification d'un Personnels  <span className="text-orange_union">{pseudo}</span></font>
          <div className="rounded">
            <img src="../image_union/logo_union.svg" alt="logo" className="w-8" />
          </div>
        </div>

        <Formik
          initialValues={{
            id_personnel: donne_lines ? donne_lines.id : '',
            nom: donne_lines ? donne_lines.nom : '',
            prenom: donne_lines ? donne_lines.prenom : '',
            date_naissance: donne_lines ? donne_lines.date_naissance : '',
            sexe: donne_lines ? donne_lines.sexe : '',
            adresse: donne_lines ? donne_lines.adresse : '',
            contact: donne_lines ? donne_lines.contact : '',
            cin: donne_lines ? donne_lines.cin : '',
            photos: null,
          }}
          enableReinitialize
          validationSchema={RegEx_personnel}
          onSubmit={values => {
            const formData = new FormData();
            formData.append("id_personnel", values.id_personnel);
            formData.append("nom", values.nom);
            formData.append("prenom", values.prenom);
            formData.append("date_naissance", values.date_naissance);
            formData.append("sexe", values.sexe);
            formData.append("adresse", values.adresse); // Ajouter les champs supplémentaires
            formData.append("contact", values.contact);
            formData.append("cin", values.cin);
            // Ajouter la photo au FormData si elle est fournie
            if (values.photos) {
              formData.append("photos", values.photos);
            }
            axios
              .post("http://localhost:8000/api/modifie_personnel", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .then(response => {
                if(response.data.message === "Une image avec ce nom existe déjà."){
                  enqueueSnackbar(response.data.message, { variant: "error" });
                }else{
                 
                  hide_blur();
                  enqueueSnackbar(response.data.message, { variant: "success" });
                  select_personnel();
                  setDonne_table_trans(transforme_donner(donne_table));
                  select_statistique_personnels()//polling
                }
              })
              .catch(er => {
                console.log(er);
                enqueueSnackbar("Connexion n'est pas encore établie", {
                  variant: "error"
                });
              });
          }}
        >
          {({ errors, touched, setFieldValue }) =>
            <Form className="p-4 space-y-4">

              {/* Photo avec avatar */}
              <div className="grid w-full py-2 rounded-lg place-content-center bg-gray-100 dark:bg-[#202020ab]">
                <div
                  onClick={() => modifinputRef.current.click()}
                  className='flex relative flex-col items-center justify-center w-32 h-32 text-white border-[4px] rounded-full cursor-pointer'
                >
                  <div className="absolute border-gray-400 border-[2px] bg-white dark:bg-[#202020] text-gray-400 rounded-full grid place-content-center bottom-0 px-1 py-1 -right-0">
                    <IoMdCamera className=" text-[20px]" />
                  </div>

                  {photoPreviewModif ? (
                    <div className='w-32 h-32 overflow-hidden rounded-full'>
                      <img src={photoPreviewModif} className='object-cover w-full h-full' alt="Aperçu" />
                    </div>
                  ) : (
                    <div className="grid w-32 h-32 text-gray-400 bg-white rounded-full place-content-center dark:bg-[#202020ab]">
                      <FaUser className='text-[4em]' />
                    </div>
                  )}
                  <input
                    type="file"
                    name="photos"
                    ref={modifinputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={(event) => handleImageChangeModif(event, setFieldValue)}
                  />
                  <ErrorMessage
                    name="photos"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

              </div>
              <div className="grid w-full grid-cols-2 gap-2">

                {/* Champ Nom */}
                <div>
                  <Field
                    name="nom"
                    type="text"
                    placeholder="Nom"
                    className={`tailwind-form ${errors.nom && touched.nom
                      ? "border-red-500"
                      : ""} `}
                  />
                  <ErrorMessage
                    name="nom"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Champ Prénom */}
                <div>
                  <Field
                    name="prenom"
                    type="text"
                    placeholder="Prenom"
                    className={`tailwind-form ${errors.prenom && touched.prenom
                      ? "border-red-500"
                      : ""} `}
                  />
                  <ErrorMessage
                    name="prenom"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Champ adresse */}
                <div>
                  <Field
                    name="adresse"
                    type="text"
                    placeholder="Adresse"
                    className={`tailwind-form ${errors.adresse && touched.adresse
                      ? "border-red-500"
                      : ""} `}
                  />
                  <ErrorMessage
                    name="adresse"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Champ contact */}
                <div>
                  <Field
                    name="contact"
                    type="text"
                    placeholder="Contact"
                    className={`tailwind-form ${errors.contact && touched.contact
                      ? "border-red-500"
                      : ""} `}
                  />
                  <ErrorMessage
                    name="contact"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Champ CIN */}
                <div>
                  <Field
                    name="cin"
                    type="text"
                    placeholder="CIN"
                    className={`tailwind-form ${errors.cin && touched.cin
                      ? "border-red-500"
                      : ""} `}
                  />
                  <ErrorMessage
                    name="cin"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Champ date de naissance */}
                <div>
                  <Field
                    title="date de naissance"
                    name="date_naissance"
                    type="date"
                    className={`tailwind-form ${errors.date_naissance &&
                      touched.date_naissance
                      ? "border-red-500"
                      : ""} `}
                  />
                  <ErrorMessage
                    name="date_naissance"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

                {/* Champ Sexe (Select) */}
                <div>
                  <Field
                    name="sexe"
                    as="select"
                    className={`tailwind-form ${errors.sexe && touched.sexe
                      ? "border-red-500"
                      : ""} `}
                  >
                    <option value="" selected disabled>
                      Selectionner le sexe
                    </option>
                    <option value="masculin">Masculin</option>
                    <option value="feminin">Feminin</option>
                  </Field>
                  <ErrorMessage
                    name="sexe"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>

              </div>

              {/* Bouton de soumission */}
              <button
                className="flex items-center justify-center space-x-3 my-4 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded"
              >
                <FaSave />
                <span className="text-[13px]">Enregistrer</span>
              </button>
            </Form>

          }
        </Formik>
      </div>


      {/* div pour suprimer les Personnel  */}
      <div
        className="w-[60vw] md:w-[40vw] lg:w-[30vw] h-auto bg-white rounded-[1em] fixed z-50 px-4 py-4 dark:bg-[#121212] dark:text-gray-100 div_suprimer_personnel "
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
            <font className="text-[12px] ">Supression du Personnels : {pseudo}</font>
          </div>
          <img src="../image_union/logo_union.svg" alt="logo" className="w-8" />
        </div>

        <p className=" text-[13px] pl-4">Voulez-vous vraiment suprimer ?</p>
        <div className="relative flex items-center justify-start space-x-2 top-1 lg:left-[16vw] xl:left-[18vw] text-[14px]">
          <button onClick={supression_personnel} className="px-2 text-white rounded bg-red_union_500">
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

      <div
        className="bg-white rounded-[1em] dark:bg-[#131313] md:p-4 px-1 pt-2 pb-4 "
      >
        {/* ilay div en grid mapizara ho col span 9 sy col span 3  */}
        <div className="grid w-full gap-4 md:grid-cols-12">
          {/* ilay div col span 3  */}{" "}
          {/* misy ilay div kely roa en flex flex-col*/}
          <div className="flex flex-col items-center justify-start space-y-4 md:col-span-3 sm:flex-row sm:space-x-2 md:flex-col">
            {/* ilay div misy bar masculin  */}
            <div className="shadow rounded-[1em] h-auto w-full bg-white py-2 px-4 dark:bg-[#42424232] dark:text-gray-300">
              <div className="text-[13px] flex items-center justify-between">
                <font className="text-gray-900 dark:text-gray-300">
                  Taux masculinité
                </font>
                <GiMale className="text-orange_union" />
              </div>
              <p className="text-[11px] text-gray-400 mt-4">
                Ce rapport montre la totalité des données. Voici le taux de masculinité
              </p>
              {/* ilay personnel boribory  */}
              <div className="mt-2 mb-7">
                <div className="flex -space-x-4">
                  {
                    avatar_masculin.map((a, index) => (

                      a.photos ?
                        <img src={`http://127.0.0.1:8000/storage/${a.photos}`} className="w-8 h-8 rounded-full border-[2px]" />
                        :
                        <div key={index} className="flex items-center justify-center w-8 h-8 px-2 font-bold border-orange-500 text-orange-500 bg-orange-300 border-[2px] rounded-full">
                          {a.avatar}
                        </div>
                    ))
                  }

                  <div className="flex items-center justify-center w-8 h-8  text-gray-500 bg-gray-50 border-[2px] dark:bg-[#1d1d1d] dark:border-[#131313] dark:text-white  rounded-full border-gray-300 text-[12px]">
                    +{masculin_total ?
                      <>
                        {
                          masculin_total >= 7 ?
                            <>
                              {masculin_total - 6}
                            </>
                            :
                            <>0</>
                        }

                      </>
                      :

                      <>0</>

                    }
                  </div>
                </div>
                <div className="my-4">
                  <div className="flex items-center justify-between dark:text-gray-300">
                    <font className="text-[12px] dark:text-gray-300 text-gray-900">
                      Masculin &nbsp;&nbsp;&nbsp; ( {masculin_total} )
                    </font>
                    <font className="text-[12px] dark:text-gray-300 text-gray-900">

                      {pourcentage_masculin + "%"}
                    </font>
                  </div>
                  <div className="w-full bg-gray-300 my-1 dark:bg-[#292929]">
                    <div
                      className={`h-1 rounded-full bg-orange_union`}
                      style={{ width: pourcentage_masculin + "%" }}
                    />
                  </div>
                </div>
              </div>
              <hr className="border-0.5 border-gray-200 dark:border-[#292929]" />
              <div className="text-[13px] flex items-center justify-between my-4">
                <button className="flex items-center justify-center px-2 py-0 text-white rounded bg-orange_union text-[11px]">
                  bar masculin
                </button>

                <div className="flex space-x-2 text-orange_union">
                  <FaArrowLeft />
                  <FaDotCircle />
                </div>
              </div>
            </div>

            {/* ilay div misy bar feminin */}
            <div className="shadow rounded-[1em] h-auto w-full bg-white py-2 px-4 dark:bg-[#42424232] dark:text-gray-300">
              <div className="text-[13px] flex items-center justify-between">
                <font className="text-gray-900 dark:text-gray-300">
                  Taux féminité
                </font>
                <GiFemale className="text-bleue_union_500" />
              </div>
              <p className="text-[11px] text-gray-400 mt-4">
                Ce rapport montre la totalité des données. Voici le taux de féminité.
              </p>
              {/* ilay personnel boribory  */}
              <div className="mt-2 mb-7">
                <div className="flex -space-x-4">

                  {
                    avatar_feminin.map((a, index) => (

                      a.photos ?
                        <img src={`http://127.0.0.1:8000/storage/${a.photos}`} className="w-8 h-8 rounded-full border-[2px]" />
                        :
                        <div key={index} className="flex items-center justify-center w-8 h-8 px-2 font-bold border-bleue_union_500 text-bleue_union_500 bg-blue-300 border-[2px] rounded-full">
                          {a.avatar}
                        </div>
                    ))
                  }

                  <div className="flex items-center justify-center w-8 h-8  dark:bg-[#1d1d1d] dark:border-[#131313] dark:text-white text-gray-500 bg-gray-50 border-[2px]  rounded-full border-gray-300 text-[12px]">
                    +{feminin_total ?
                      <>
                        {
                          feminin_total >= 5 ?
                            <>
                              {feminin_total - 4}
                            </>
                            :
                            <>0</>
                        }

                      </>
                      :

                      <>0</>

                    }
                  </div>
                </div>
                <div className="my-4">
                  <div className="flex items-center justify-between ">
                    <font className="text-[12px] dark:text-gray-300 text-gray-900">
                      Feminin &nbsp;&nbsp;&nbsp; ( {feminin_total} )
                    </font>
                    <font className="text-[12px] dark:text-gray-300 text-gray-900">
                      {pourcentage_feminin + "%"}
                    </font>
                  </div>
                  <div className="w-full my-1 bg-gray-300 dark:bg-[#292929]">
                    <div
                      className={` h-1 rounded-full bg-bleue_union_500`}
                      style={{ width: pourcentage_feminin + "%" }}
                    />
                  </div>
                </div>
              </div>
              <hr className="border-0.5 border-gray-200 dark:border-[#292929]" />

              <div className="text-[13px] flex items-center justify-between my-4">
                <button className="flex items-center justify-center px-2 py-0 text-white rounded bg-bleue_union_500 text-[11px]">
                  bar feminin
                </button>

                <div className="flex space-x-2 text-bleue_union_500">
                  <FaArrowLeft />
                  <FaDotCircle />
                </div>
              </div>
            </div>

            <div className="shadow rounded-[1em] flex justify-between items-center h-auto w-full bg-white py-2 px-4 dark:bg-[#42424232] dark:text-gray-300 text-[11px]">
              <font>Total Personnel </font>
              <font>{feminin_total + masculin_total}</font>
            </div>
          </div>
          {/* ilay div mis table  */}
          <div className="md:col-span-9 md:shadow md:rounded-[1em] px-1 md:px-2 py-2 bg-white w-[75vw] sm:w-[80vw] text-gray-900 md:w-full dark:bg-[#42424232] dark:text-gray-300 ">
            <TableExample
              show_infoPersonnel={show_infoPersonnel}
              show_form_ajout={show_form_ajout}
              show_div_supression_personnel={show_div_supression_personnel}
              show_form_modif={show_form_modif}
              donne_table_trans={donne_table_trans}
            />
            <div className={`w-full place-content-center py-8 ${loading ? "grid" : "hidden"} `}>
              <ClipLoader size={30} color="#e6631f" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Personnel;
