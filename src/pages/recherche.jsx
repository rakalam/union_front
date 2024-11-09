import axios from 'axios'
import React, { useState } from 'react'
import { FaArrowLeft, FaSearch } from 'react-icons/fa'
import { FiRefreshCcw } from 'react-icons/fi'
import { ClipLoader } from 'react-spinners'
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const Recherche = () => {
    const [state_recherche, setState_recherche] = useState(true)
    const [state_table, setState_table] = useState(false)
    const [loading_absent, setLoading_absent] = useState(false)
    const [loading_retard, setLoading_retard] = useState(false)

    const [deb, setDeb] = useState('')
    const [fin, setFin] = useState('')

    const [absent, setAbsent] = useState([])
    const [retard, setRetard] = useState([])
    const retour_recherche = () => {
        setState_recherche(true)
        setState_table(false)
    }

    const rechercher_quelconque = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("debut", document.getElementById('debut').value);
        formData.append("fin", document.getElementById('fin').value);
        setLoading_absent(true)
        setLoading_retard(true)
        setDeb(document.getElementById('debut').value)
        setFin(document.getElementById('fin').value)
        axios
            .post("http://localhost:8000/api/recherche_deux_date", formData)
            .then(response => {
                setAbsent(response.data.donnes_absent)
                setLoading_absent(false)
                setRetard(response.data.donnes_retard)
                setLoading_retard(false)
                setState_recherche(false)
                setState_table(true)
                document.getElementById('fin').value = ""
                document.getElementById('debut').value = ""

            })
            .catch(er => {
                console.log(er);
                enqueueSnackbar("Connexion n'est pas encore établie", {
                    variant: "error"
                });
            });
    }
    return (
        <>
            <div className={`text-gray-900 h-[100%] p-3 dark:text-gray-300 ${state_recherche ? '' : 'hidden'}`}>
                <div className="w-full rounded-[1rem] h-[91%] shadow bg-white dark:bg-[#131313] relative">

                    {/* <img src="../image_union/Outer space-rafiki.svg" alt="" 
                    className="w-[10rem]"
                     srcset="" /> */}

                    <div className={` flex-col space-y-8 items-center justify-center p-4 flex `}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <div className='text-center'>
                            <font className="text-[1.8em]"> Analyse des Retards et Absences</font>
                            <p className='text-gray-400'>On peut calculer et visualiser les retards et les absences <br />
                                à partir de deux dates quelconques. Il suffit de remplir les <br />
                                deux champs de date !
                            </p>
                        </div>
                        <div className=' w-[20rem] sm:w-[25rem] rounded-[10px] shadow px-4 py-4'>
                            <p>Veuillez remplir les deux champs</p>

                            <form className='my-4' onSubmit={rechercher_quelconque}>
                                <div className='grid grid-cols-2 gap-y-4 gap-x-4'>
                                    <label htmlFor="debut">Date de Début :</label>
                                    <input type="date" name="date_debut" id="debut" className='tailwind-form' required />


                                    <label htmlFor="fin">Date fin :</label>
                                    <input type="date" name="date_fin" id="fin" className='tailwind-form' required />
                                </div>

                                <button
                                    type='submit'
                                    className="flex items-center justify-center space-x-3 my-1 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded">
                                    <FaSearch />
                                    <span className="text-[13px]">Rechercher</span>
                                </button>
                            </form>


                        </div>
                    </div>

                </div>
            </div>


            <div className={`text-gray-900 md:h-[100%] p-3 dark:text-gray-300 ${state_table ? '' : 'hidden'} `}>
                <div className="w-full rounded-[1rem] md:h-[91%] shadow bg-white dark:bg-[#131313] relative">
                    <div
                        className={`w-full px-4  pb-4`}
                    >

                        <div className='flex flex-col px-4 md:items-center md:justify-between md:flex-row'>

                            <div className='flex flex-col items-center justify-start px-4 py-6 space-x-4 md:flex-row'>
                                <font className="text-[16px]">Resultat de la Recherche</font>
                                <font>| Date du Début : {deb ? format(new Date(deb), 'd MMM yyyy', { locale: fr }) : ''}</font>
                                <font>| Date Fin : {fin ? format(new Date(fin), 'd MMM yyyy', { locale: fr }) : ''}</font>
                            </div>

                            <button
                                onClick={retour_recherche}
                                className="flex items-center justify-center space-x-3 my-1 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded mb-4">
                                <FaSearch />
                                <span className="text-[13px]">Effectuez une autre recherche</span>
                            </button>

                        </div>

                        <div
                            className={` md:grid-cols-2 w-full px-4 gap-4 grid`}
                        >

                            <div className={`shadow md:h-[30rem] rounded-[10px] bg-white dark:bg-[#42424232] px-2 py-2
                             ${retard.length > 8 ? 'overflow-y-scroll' : ''}`}>
                                <div className='flex items-center justify-between my-3'>
                                    <font className="text-[12px]">Pointage Retard</font>

                                </div>


                                {
                                    retard.length == 0 ?
                                        <div className='grid w-full my-8 place-content-center'>
                                            <p
                                                className='flex items-center justify-center space-x-3'>
                                                <FaSearch />  <p>Aucune donnée trouvée.</p>
                                            </p>

                                            <img src="../image_union/Outer space-rafiki.svg" alt=""
                                                className="w-[20rem]"
                                                srcset="" />
                                        </div>

                                        :
                                        <>

                                            <table className="text-center w-[100%] my-4">
                                                <thead className="px-2 py-4 h-8 rounded-full text-white dark:bg-[#141414] bg-gray-500 text-[12px]">
                                                    <th style={{ borderRadius: '4px 0 0 4px' }}>avatar</th>
                                                    <th>
                                                        Identifiant
                                                    </th>
                                                    <th>
                                                        Prenom
                                                    </th>
                                                    <th style={{ borderRadius: '0 4px 4px 0' }}>
                                                        Nb retard
                                                    </th>

                                                </thead>

                                                <tbody className="text-[11px] md:text-[13px]">
                                                    {
                                                        retard.map((p, index) => (
                                                            <tr key={index} className="border-b border-b-gray-200 dark:border-b-[#222222]">
                                                                <td className="flex items-center justify-center">
                                                                    {
                                                                        p.personnel.photos ?
                                                                            <div className="flex items-center justify-center">
                                                                                <img src={`http://127.0.0.1:8000/storage/${p.personnel.photos}`} className="w-8 h-8 rounded-full border-[2px] my-1" />
                                                                            </div>
                                                                            :
                                                                            <div className="flex items-center justify-center">
                                                                                <div className={`flex items-center justify-center w-8 h-8 px-2 font-bold my-1
                                                                      border-[2px]  rounded-full  ${p.personnel.sexe === "masculin" ? "text-white bg-blue-300 border-blue-500"
                                                                                        : "border-orange-500 text-white bg-orange-300"}`}>
                                                                                    {p.personnel.avatar}
                                                                                </div>
                                                                            </div>

                                                                    }
                                                                </td>
                                                                <td>{p.personnel.identifiant}</td>
                                                                <td>{p.personnel.prenom}</td>
                                                                <td>
                                                                    <p className={`${p.nb_retard > 3 ? 'text-orange_union font-bold ' : 'text-gray-900 dark:text-gray-300'}`}>
                                                                        {p.nb_retard}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                        ))
                                                    }

                                                </tbody>
                                            </table>
                                            <div className={`w-full place-content-center py-8 ${loading_retard ? "grid" : "hidden"} `}>
                                                <ClipLoader size={30} color="#e6631f" />
                                            </div>
                                        </>
                                }

                            </div>



                            <div className={`shadow md:h-[30rem] rounded-[10px] bg-white dark:bg-[#42424232] px-2 py-2
                                ${absent.length > 8 ? 'overflow-y-scroll' : ''} `}>
                                <div className='flex items-center justify-between my-3'>
                                    <font className="text-[12px]">Pointage Absent</font>

                                </div>

                                {
                                    absent.length == 0 ?
                                        <div className='grid w-full my-8 place-content-center'>
                                            <p
                                                className='flex items-center justify-center space-x-3'>
                                                <FaSearch />  <p>Aucune donnée trouvée.</p>
                                            </p>

                                            <img src="../image_union/Outer space-rafiki.svg" alt=""
                                                className="w-[20rem]"
                                                srcset="" />
                                        </div>

                                        :
                                        <>
                                            <table className="text-center w-[100%] my-4">
                                                <thead className="px-2 py-4 h-8 rounded-full text-white dark:bg-[#141414] bg-gray-500 text-[12px]">
                                                    <th style={{ borderRadius: '4px 0 0 4px' }}>avatar</th>
                                                    <th>
                                                        Identifiant
                                                    </th>
                                                    <th>
                                                        Prenom
                                                    </th>
                                                    <th style={{ borderRadius: '0 4px 4px 0' }}>
                                                        Nb Absence
                                                    </th>

                                                </thead>

                                                <tbody className="text-[11px] md:text-[13px]">
                                                    {
                                                        absent.map((p, index) => (
                                                            <tr key={index} className="border-b border-b-gray-200 dark:border-b-[#222222]">
                                                                <td className="flex items-center justify-center">
                                                                    {
                                                                        p.personnel.photos ?
                                                                            <div className="flex items-center justify-center">
                                                                                <img src={`http://127.0.0.1:8000/storage/${p.personnel.photos}`} className="w-8 h-8 rounded-full border-[2px] my-1" />
                                                                            </div>
                                                                            :
                                                                            <div className="flex items-center justify-center">
                                                                                <div className={`flex items-center justify-center w-8 h-8 px-2 font-bold my-1
                                                                      border-[2px]  rounded-full  ${p.personnel.sexe === "masculin" ? "text-white bg-blue-300 border-blue-500"
                                                                                        : "border-orange-500 text-white bg-orange-300"}`}>
                                                                                    {p.personnel.avatar}
                                                                                </div>
                                                                            </div>

                                                                    }
                                                                </td>
                                                                <td>{p.personnel.identifiant}</td>
                                                                <td>{p.personnel.prenom}</td>
                                                                <td>

                                                                    <p className={`${p.nb_absent > 3 ? 'font-bold text-orange_union' : 'text-gray-900 dark:text-gray-300'}`}>
                                                                        {p.nb_absent}
                                                                    </p>

                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                            <div className={`w-full place-content-center py-8 ${loading_absent ? "grid" : "hidden"} `}>
                                                <ClipLoader size={30} color="#e6631f" />
                                            </div>
                                        </>
                                }

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Recherche