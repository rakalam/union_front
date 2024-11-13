import React, { useEffect, useState } from 'react'
import { FaClock, FaInfo, FaLock, FaMoon, FaPen, FaPrint, FaSave, FaSearch, FaSun } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa6';
import { GrAdd } from 'react-icons/gr';
import $ from "jquery"
import ReactPaginate from 'react-paginate';
import ListePlanning from '../composant/planning/listePlanning';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import Form_planning from '../composant/planning/form_planning';
import Form_mofier from '../composant/planning/form_mofier';



const Planning = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false)
  const [listePlanning, setListePlanning] = useState([])
  const [var_identifiant, setVar_id] = useState('')
  const [var_prenom, setVar_prenom] = useState('')
  const [var_id_planning, setVar_id_planning] = useState('')
  const [var_id_personnel, setVar_id_personnel] = useState('')
  const [pseudo, setPseudo] = useState('')
  const [pageCourrant, setPageCourant] = useState(1)
  const [planningPerPage] = useState(6)


  const indexOfDernierPlanning = pageCourrant * planningPerPage
  const indexOfPremierPlanning = indexOfDernierPlanning - planningPerPage
  const planningCourant = listePlanning.slice(indexOfPremierPlanning, indexOfDernierPlanning)

  const paginate = nombrePage => setPageCourant(nombrePage)

  const [blur, setBlur] = useState(false)
  const [liste_personnel, setListePersonnel] = useState([])
  const select_personnel = () => {
    setLoading(true)
    axios
      .get("http://localhost:8000/api/select_personnel_pas_planning")
      .then(response => {
        setListePersonnel(response.data.donnes);
        setLoading(false)


      })
      .catch(error => {
        console.error(error);
      });
  };

  const [searchTerm, setSearchTerm] = useState('');
  // Fonction pour gérer la recherche
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  // Requête pour récupérer les liste des  planning
  const select_planning = () => {
    axios
      .get("http://localhost:8000/api/select_planning_simplement")
      .then(response => {
        setListePlanning(response.data.donnes);
      })
      .catch(error => {
        console.error(error);
      });
  };
  // Requête pour récupérer les liste des  personnels

  const show_blur = () => {
    setBlur(true)
  }
  const hide_blur = () => {
    $('.form_ajout_planning').animate({ top: "-50%" }, 100)
    $('.form_modifier_planning').animate({ top: "-50%" }, 100)
    $('.div_suprimer_planning').animate({ left: "-50%" }, 100)
    setTimeout(() => {
      setBlur(false)
    }, [100])
  }
  const show_form_ajout = () => {
    show_blur()
    $('.form_ajout_planning').animate({ top: "50%" }, 500)
  }

  const show_form_modifier = (params_id, params_id_personnel, parms_identifiant, params_prenom) => {
    setVar_id(parms_identifiant)
    setVar_prenom(params_prenom)
    setVar_id_planning(params_id)
    setVar_id_personnel(params_id_personnel)
    show_blur()
    $('.form_modifier_planning').animate({ top: "50%" }, 500)
  }

  //supression
  const supression_planning = () => {
    axios
      .get("http://localhost:8000/api/suprimer_planning/" + var_id_planning)
      .then(response => {
        hide_blur()
        enqueueSnackbar(response.data.message, { variant: "success" });
        select_planning()
        select_personnel()
      })
      .catch(error => {
        console.error(error);
      });
  }

  //pour apparaitre le div de suppression
  const show_div_supression_planning = (id, pseudo) => {
    setVar_id_planning(id)
    setPseudo(pseudo)
    show_blur();
    $(".div_suprimer_planning").animate({ left: "50%" }, 500);
  };

  useEffect(() => {
    // Fonction pour exécuter toutes les requêtes en parallèle
    const fetchData = async () => {
      try {
        // Attendre que toutes les requêtes soient complétées en parallèle
        await Promise.all([
          select_planning(),
          select_personnel()
        ]);
      } catch (error) {
        console.error("Une erreur s'est produite lors du chargement des données :", error);
      }
    };
    // Appel de la fonction fetchData au chargement du composant
    fetchData();
  }, []);

  // Filtrer les données en fonction de la recherche
  const filteredData = planningCourant.filter((item) =>
    item.personnel.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.personnel.identifiant.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-gray-900 bg-white h-auto px-2 py-2 mx-2 my-4 rounded-[1em] shadow dark:bg-[#131313] dark:text-gray-100">

      {/* div blur  */}
      <div onClick={hide_blur}
        className={`fixed top-0 left-0 z-30 w-full h-[100vh] bg-[#000000a4] dark:bg-[#ffffff0a] cursor-pointer ${blur ? "block" : "hidden"}`}
        style={{
          backdropFilter: 'blur(3px)'
        }}></div>


      {/* div pour suprimer les Planning  */}
      <div
        className="w-[60vw] md:w-[40vw] lg:w-[30vw] h-auto bg-white rounded-[1em] fixed z-50 px-4 py-4 dark:bg-[#121212] dark:text-gray-100 div_suprimer_planning "
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
            <font className="text-[12px] ">Supression du Planning : {pseudo}</font>
          </div>
          <img src="../image_union/logo_union.svg" alt="logo" className="w-8" />
        </div>

        <p className=" text-[13px] pl-4">Voulez-vous vraiment suprimer ?</p>
        <div className="relative flex items-center justify-start space-x-2 top-1 lg:left-[16vw] xl:left-[18vw] text-[14px]">
          <button onClick={supression_planning} className="px-2 text-white rounded bg-red_union_500">
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


      {/* formulaire  d'ajout place  */}
      <Form_planning
        liste_personnel={liste_personnel}
        select_planning={select_planning}
        select_personnel={select_personnel}
        hide_blur={hide_blur}
      />
      {/* formulaire  d'e modifiacation place  */}
      <Form_mofier
        var_id_planning={var_id_planning}
        var_id_personnel={var_id_personnel}
        var_identifiant={var_identifiant}
        var_prenom={var_prenom}
        select_personnel={select_personnel}
        select_planning={select_planning}
        hide_blur={hide_blur}

      />



      <font className="px-4">Listes des tous les PLANNING</font>

      {/* en tete boutton d'ajout et inut de recherche  */}
      <div className='flex items-center justify-start mt-4 mb-2 space-x-2 md:justify-between'>
        <div>
          <button title="Nouvelle Planning" onClick={show_form_ajout} className="flex items-center justify-center space-x-3 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded">
            <GrAdd />
            <span className="hidden sm:block">Nouvelle Planning</span>
          </button>
        </div>

        <div className='flex items-center justify-center space-x-3'>
          <div className="relative">
            <input
              type="text"
              placeholder="recherche..."
              value={searchTerm}
              onChange={handleSearch}
              className="border rounded-full text-[13px] px-10 h-8 outline-none dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 placeholder:text-gray-500"
            />
            <FaSearch className="absolute  top-[8.5px] left-3 text-gray-500" />
          </div>


        </div>
      </div>

      {/* table  */}
      <div className='overflow-x-auto w-[76vw] sm:w-[80vw] md:w-full '>
        
          <ListePlanning
            listePlanning={filteredData}
            planningPerPage={planningPerPage}
            totalPlanning={listePlanning.length}
            paginate={paginate}
            pageCourrant={pageCourrant}
            show_form_modifier={show_form_modifier}
            show_div_supression_planning={show_div_supression_planning}
            loading={loading}
          />
       
      </div>

    </div>
  );

}

export default Planning
