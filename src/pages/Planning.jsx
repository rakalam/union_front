import React, { useEffect, useState } from 'react'
import { FaClock, FaLock, FaMoon, FaPen, FaPrint, FaSave, FaSearch, FaSun } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa6';
import { GrAdd } from 'react-icons/gr';
import $ from "jquery"
import ReactPaginate from 'react-paginate';
import ListePlanning from '../composant/planning/listePlanning';



const plannings = {
  "liste": [
    {
      "id": "U-1",
      "sexe": "feminin",
      "photos": "RJ",
      "nom": "RAKALADY",
      "lundi_deb": "08:00",
      "lundi_fin": "16:00",

      "mardi_deb": "08:00",
      "mardi_fin": "16:00",

      "mercredi_deb": "OFF",
      "mercredi_fin": "OFF",

      "jeudi_deb": "13:00",
      "jeudi_fin": "21:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },

    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "feminin",
      "photos": "ZX",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "feminin",
      "photos": "TB",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "masculin",
      "photos": "RK",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },
    {
      "id": "U-2",
      "sexe": "femini",
      "photos": "KO",
      "nom": "Rakalam",
      "lundi_deb": "09:00",
      "lundi_fin": "15:00",

      "mardi_deb": "OFF",
      "mardi_fin": "OFF",

      "mercredi_deb": "08:00",
      "mercredi_fin": "16:00",

      "jeudi_deb": "14:00",
      "jeudi_fin": "22:00",

      "vendredi_deb": "14:00",
      "vendredi_fin": "22:00",

      "samedi_deb": "OFF",
      "samedi_fin": "OFF",

      "dimanche_deb": "08:00",
      "dimanche_fin": "16:00"
    },



  ]
}




const Planning = () => {
  const [listePlanning, setListePlanning] = useState([])
  const [pageCourrant, setPageCourant] = useState(1)
  const [planningPerPage] = useState(6)

  const indexOfDernierPlanning = pageCourrant * planningPerPage
  const indexOfPremierPlanning = indexOfDernierPlanning - planningPerPage
  const planningCourant = listePlanning.slice(indexOfPremierPlanning, indexOfDernierPlanning)

  const paginate = nombrePage => setPageCourant(nombrePage)

  const [blur, setBlur] = useState(false)

  useEffect(() => {
    setListePlanning(plannings.liste)

  }, [])

  // les variables pour les formulaires 
  const [id_personnel, setId_personnel] = useState('')

  const [type_lundi, setType_lundi] = useState('shift')
  const [type_mardi, setType_mardi] = useState('shift')
  const [type_mercredi, setType_mercredi] = useState('shift')
  const [type_jeudi, setType_jeudi] = useState('shift')
  const [type_vendredi, setType_vendredi] = useState('shift')
  const [type_samedi, setType_samedi] = useState('shift')
  const [type_dimanche, setType_dimanche] = useState('shift')


  const [lundi_deb, setlundi_deb] = useState('')
  const [mardi_deb, setmardi_deb] = useState('')
  const [mercredi_deb, setmercredi_deb] = useState('')
  const [jeudi_deb, setjeudi_deb] = useState('')
  const [vendredi_deb, setvendredi_deb] = useState('')
  const [samedi_deb, setsamedi_deb] = useState('')
  const [dimanche_deb, setdimanche_deb] = useState('')


  const [lundi_fin, setlundi_fin] = useState('')
  const [mardi_fin, setmardi_fin] = useState('')
  const [mercredi_fin, setmercredi_fin] = useState('')
  const [jeudi_fin, setjeudi_fin] = useState('')
  const [vendredi_fin, setvendredi_fin] = useState('')
  const [samedi_fin, setsamedi_fin] = useState('')
  const [dimanche_fin, setdimanche_fin] = useState('')




  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const show_blur = () => {
    setBlur(true)
  }
  const hide_blur = () => {
    $('.form_ajout_planning').animate({ top: "-50%" }, 100)
    // $('.div_suprimer_personnel').animate({ left: "-50%" }, 100)

    setTimeout(() => {
      setBlur(false)
    }, [100])
  }

  const show_form_ajout = () => {
    show_blur()
    $('.form_ajout_planning').animate({ top: "50%" }, 500)
  }

  // calcule automatique de heure de fin 
  const calculer_heure_fin = (time) => {
    // Calculer l'heure de fin en ajoutant 8 heures
    const [hours, minutes] = time.split(':').map(Number);
    let endHours = hours + 8;

    // Si l'heure dépasse 24h, elle revient à 0
    if (endHours >= 24) {
      endHours = endHours - 24;
    }

    // Formater l'heure de fin avec deux chiffres (par exemple, "08" au lieu de "8")
    const formattedEndTime = `${String(endHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    return formattedEndTime
  }

  // Onchange pour lundi
  const OnchangeLundi = (e) => {
    const time = e.target.value;
    setlundi_deb(time);
    setlundi_fin(calculer_heure_fin(time))
  };

  // Onchange pour mardi
  const OnchangeMardi = (e) => {
    const time = e.target.value;
    setmardi_deb(time);
    setmardi_fin(calculer_heure_fin(time))
  };

  // Onchange pour mercredi
  const OnchangeMercredi = (e) => {
    const time = e.target.value;
    setmercredi_deb(time);
    setmercredi_fin(calculer_heure_fin(time))
  };
  // Onchange pour jeudi
  const OnchangeJeudi = (e) => {
    const time = e.target.value;
    setjeudi_deb(time);
    setjeudi_fin(calculer_heure_fin(time))
  };
  // Onchange pour vendredi
  const OnchangeVendredi = (e) => {
    const time = e.target.value;
    setvendredi_deb(time);
    setvendredi_fin(calculer_heure_fin(time))
  };
  // Onchange pour samedi
  const OnchangeSamedi = (e) => {
    const time = e.target.value;
    setsamedi_deb(time);
    setsamedi_fin(calculer_heure_fin(time))
  };
  // Onchange pour dimanche
  const OnchangeDimanche = (e) => {
    const time = e.target.value;
    setdimanche_deb(time);
    setdimanche_fin(calculer_heure_fin(time))
  };

  const soumettre = (e) => {
    e.preventDefault()
    alert('vita !')
  }

  return (
    <div className="text-gray-900 bg-white h-auto px-2 py-2 mx-2 my-4 rounded-[1em] shadow">

      {/* div blur  */}
      <div onClick={hide_blur}
        className={`fixed top-0 left-0 z-30 w-full h-[100vh] bg-[#000000a4] dark:bg-[#ffffff0a] cursor-pointer ${blur ? "block" : "hidden"}`}
        style={{
          backdropFilter: 'blur(3px)'
        }}></div>

      {/* formulaire d'ajout planning  */}
      <div className=" w-[90vw] md:w-[70vw] lg:w-[50vw] h-auto bg-white rounded-[1em] fixed z-50 px-4 py-4 dark:bg-[#121212] dark:text-gray-100 form_ajout_planning" style={{
        top: '-50%', left: '50%', transform: 'translate(-50%, -50%)'
      }}>

        <div className="flex items-center justify-between mt-1 mb-4">
          <font> Nouvelle Planning</font>
          <div className="rounded">
            <img src="image_union/logo_union.svg" alt="logo" className="w-8" />
          </div>
        </div>
        <form onSubmit={soumettre}>
          {/* nom des personnels  */}
          <select name="" className='mb-4 tailwind-form'>
            <option disabled selected>seletionner presonnel</option>
            <option value="shift">Rakalam</option>
            <option value="OFF">Faneva</option>
            <option value="OFF">Dadaka</option>
          </select>

          <table className="w-full text-center">
            <thead>
              <th> <font className="text-[12px]">Jour de la Semaine</font></th>
              <th> <font className="text-[12px]">Type</font></th>
              <th> <font className="text-[12px]">Heure début</font></th>
              <th> <font className="text-[12px]">Heure fin</font></th>
            </thead>
            <tbody>

              {/* lundi  */}
              <tr>
                <td>
                  <div className='flex items-center justify-center py-1 bg-gray-100 rounded lg:space-x-4 lg:px-3 lg:justify-start'>
                    <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">1</font>
                    <font>Lundi</font>
                  </div>
                </td>
                <td>
                  <select name="" className='tailwind-form' onChange={(e) => (setType_lundi(e.target.value))}>
                    <option value="shift">Shift</option>
                    <option value="OFF">OFF</option>
                  </select>
                </td>
                {
                  type_lundi === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' onChange={OnchangeLundi} />
                    </td>
                  )
                }

                {
                  type_lundi === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' value={lundi_fin} />
                    </td>
                  )
                }

              </tr>

              {/* mardi  */}
              <tr>
                <td>
                  <div className='flex items-center justify-center py-1 bg-gray-100 rounded lg:space-x-4 lg:px-3 lg:justify-start'>
                    <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">2</font>
                    <font>Mardi</font>
                  </div>
                </td>
                <td>
                  <select name="" className='tailwind-form' onChange={(e) => (setType_mardi(e.target.value))}>
                    <option value="shift">Shift</option>
                    <option value="OFF">OFF</option>
                  </select>
                </td>
                {
                  type_mardi === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' onChange={OnchangeMardi} />
                    </td>
                  )
                }

                {
                  type_mardi === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' value={mardi_fin} />
                    </td>
                  )
                }

              </tr>

              {/* mercredi  */}
              <tr>
                <td>
                  <div className='flex items-center justify-center py-1 bg-gray-100 rounded lg:space-x-4 lg:px-3 lg:justify-start'>
                    <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">3</font>
                    <font>Mercredi</font>
                  </div>
                </td>
                <td>
                  <select name="" className='tailwind-form' onChange={(e) => (setType_mercredi(e.target.value))}>
                    <option value="shift">Shift</option>
                    <option value="OFF">OFF</option>
                  </select>
                </td>
                {
                  type_mercredi === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' onChange={OnchangeMercredi} />
                    </td>
                  )
                }

                {
                  type_mercredi === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' value={mercredi_fin} />
                    </td>
                  )
                }

              </tr>

              {/* jeudi  */}
              <tr>
                <td>
                  <div className='flex items-center justify-center py-1 bg-gray-100 rounded lg:space-x-4 lg:px-3 lg:justify-start'>
                    <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">4</font>
                    <font>Jeudi</font>
                  </div>
                </td>
                <td>
                  <select name="" className='tailwind-form' onChange={(e) => (setType_jeudi(e.target.value))}>
                    <option value="shift">Shift</option>
                    <option value="OFF">OFF</option>
                  </select>
                </td>
                {
                  type_jeudi === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' onChange={OnchangeJeudi} />
                    </td>
                  )
                }

                {
                  type_jeudi === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' value={jeudi_fin} />
                    </td>
                  )
                }

              </tr>

              {/* Vendredi  */}
              <tr>
                <td>
                  <div className='flex items-center justify-center py-1 bg-gray-100 rounded lg:space-x-4 lg:px-3 lg:justify-start'>
                    <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">5</font>
                    <font>vendredi</font>
                  </div>
                </td>
                <td>
                  <select name="" className='tailwind-form' onChange={(e) => (setType_vendredi(e.target.value))}>
                    <option value="shift">Shift</option>
                    <option value="OFF">OFF</option>
                  </select>
                </td>
                {
                  type_vendredi === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' onChange={OnchangeVendredi} />
                    </td>
                  )
                }

                {
                  type_vendredi === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' value={vendredi_fin} />
                    </td>
                  )
                }

              </tr>

              {/* samedi  */}
              <tr>
                <td>
                  <div className='flex items-center justify-center py-1 bg-gray-100 rounded lg:space-x-4 lg:px-3 lg:justify-start'>
                    <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">6</font>
                    <font>Samedi</font>
                  </div>
                </td>
                <td>
                  <select name="" className='tailwind-form' onChange={(e) => (setType_samedi(e.target.value))}>
                    <option value="shift">Shift</option>
                    <option value="OFF">OFF</option>
                  </select>
                </td>
                {
                  type_samedi === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' onChange={OnchangeSamedi} />
                    </td>
                  )
                }

                {
                  type_samedi === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' value={samedi_fin} />
                    </td>
                  )
                }

              </tr>

              {/* samedi  */}
              <tr>
                <td>
                  <div className='flex items-center justify-center py-1 bg-gray-100 rounded lg:space-x-4 lg:px-3 lg:justify-start'>
                    <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">7</font>
                    <font>Dimanche</font>
                  </div>
                </td>
                <td>
                  <select name="" className='tailwind-form' onChange={(e) => (setType_dimanche(e.target.value))}>
                    <option value="shift">Shift</option>
                    <option value="OFF">OFF</option>
                  </select>
                </td>
                {
                  type_dimanche === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' onChange={OnchangeDimanche} />
                    </td>
                  )
                }

                {
                  type_dimanche === 'shift' && (
                    <td>
                      <input type="time" name="" id="" className='tailwind-form' value={dimanche_fin} />
                    </td>
                  )
                }

              </tr>

            </tbody>
          </table>

          <button type='submit' className="flex items-center justify-center space-x-3 my-4 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded">
            <FaSave />
            <span className="text-[13px]">Enregistrer</span>
          </button>

        </form>
      </div>

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
              className="border rounded-full text-[13px] px-10 h-8 outline-none dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 placeholder:text-gray-500"
            />
            <FaSearch className="absolute  top-[8.5px] left-3 text-gray-500" />
          </div>

          <div className='flex items-center justify-center w-6 h-6 text-gray-500 bg-gray-100 rounded-full'>
            <FaPrint className='text-gray-700' />
          </div>
        </div>
      </div>

      {/* table  */}
      <div className='w-full overflow-x-auto'>
        <ListePlanning
          listePlanning={planningCourant}
          planningPerPage={planningPerPage}
          totalPlanning={listePlanning.length}
          paginate={paginate}
          pageCourrant={pageCourrant}
        />
      </div>

    </div>
  );

}

export default Planning
