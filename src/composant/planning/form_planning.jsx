import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react'
import { FaClock, FaLock, FaMoon, FaPen, FaPrint, FaSave, FaSearch, FaSun } from 'react-icons/fa';
const Form_planning = ({ liste_personnel, select_personnel, select_planning, hide_blur }) => {
    const [id_personnel, setId_personnel] = useState('')
    const { enqueueSnackbar } = useSnackbar();
    const [type_lundi, setType_lundi] = useState('')
    const [type_mardi, setType_mardi] = useState('')
    const [type_mercredi, setType_mercredi] = useState('')
    const [type_jeudi, setType_jeudi] = useState('')
    const [type_vendredi, setType_vendredi] = useState('')
    const [type_samedi, setType_samedi] = useState('')
    const [type_dimanche, setType_dimanche] = useState('')

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

    const [errors, setErrors] = useState({});

    const validation = () => {
        const newErrors = {};
        if (!id_personnel) {
            newErrors.id_personnel = "Le personnel est obligatoire.";
        }
        if (!type_lundi) {
            newErrors.type_lundi = "Le type du Shift Lundi est obligatoire.";
        }

        if (!type_mardi) {
            newErrors.type_mardi = "Le type du Shift Mardi est obligatoire.";
        }

        if (!type_mercredi) {
            newErrors.type_mercredi = "Le type du Shift Mercredi est obligatoire.";
        }

        if (!type_jeudi) {
            newErrors.type_jeudi = "Le type du Shift Jeudi est obligatoire.";
        }

        if (!type_vendredi) {
            newErrors.type_vendredi = "Le type du Shift Vendredi est obligatoire.";
        }

        if (!type_samedi) {
            newErrors.type_samedi = "Le type du Shift Samedi est obligatoire.";
        }

        if (!type_dimanche) {
            newErrors.type_dimanche = "Le type du Shift Dimanche est obligatoire.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
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

    // Onchange pour lundi
    const typeLundi = (e) => {
        setType_lundi(e.target.value)
        if (errors.type_lundi) {
            setErrors((prevErrors) => ({ ...prevErrors, type_lundi: undefined }));
        }
    };

    // Onchange pour mardi
    const typeMardi = (e) => {
        setType_mardi(e.target.value)
        if (errors.type_mardi) {
            setErrors((prevErrors) => ({ ...prevErrors, type_mardi: undefined }));
        }
    };

    // Onchange pour mercredi
    const typeMercredi = (e) => {
        setType_mercredi(e.target.value)
        if (errors.type_mercredi) {
            setErrors((prevErrors) => ({ ...prevErrors, type_mercredi: undefined }));
        }
    };
    // Onchange pour jeudi
    const typeJeudi = (e) => {
        setType_jeudi(e.target.value)
        if (errors.type_jeudi) {
            setErrors((prevErrors) => ({ ...prevErrors, type_jeudi: undefined }));
        }
    };
    // Onchange pour vendredi
    const typeVendredi = (e) => {
        setType_vendredi(e.target.value)
        if (errors.type_vendredi) {
            setErrors((prevErrors) => ({ ...prevErrors, type_vendredi: undefined }));
        }
    };
    // Onchange pour samedi
    const typeSamedi = (e) => {
        setType_samedi(e.target.value)
        if (errors.type_samedi) {
            setErrors((prevErrors) => ({ ...prevErrors, type_samedi: undefined }));
        }
    };
    // Onchange pour dimanche
    const typeDimanche = (e) => {
        setType_dimanche(e.target.value)
        if (errors.type_dimanche) {
            setErrors((prevErrors) => ({ ...prevErrors, type_dimanche: undefined }));
        }
    };


    const changePers = (e) => {
        setId_personnel(e.target.value);
        if (errors.id_personnel) {
            setErrors((prevErrors) => ({ ...prevErrors, id_personnel: undefined }));
        }
    };

    const soumettre_ajout_planning = (e) => {
        e.preventDefault()
        if (validation()) {
            const formData = new FormData();
            formData.append("id_personnel", id_personnel);
            formData.append("type_lundi", type_lundi);
            formData.append("type_mardi", type_mardi);
            formData.append("type_mercredi", type_mercredi);
            formData.append("type_jeudi", type_jeudi);
            formData.append("type_vendredi", type_vendredi);
            formData.append("type_samedi", type_samedi);
            formData.append("type_dimanche", type_dimanche);
            //variable debut
            formData.append("lundi_deb", lundi_deb);
            formData.append("lundi_fin", lundi_fin);
            formData.append("mardi_deb", mardi_deb);
            formData.append("mardi_fin", mardi_fin);
            formData.append("mercredi_deb", mercredi_deb);
            formData.append("mercredi_fin", mercredi_fin);
            formData.append("jeudi_deb", jeudi_deb);
            formData.append("jeudi_fin", jeudi_fin);
            formData.append("vendredi_deb", vendredi_deb);
            formData.append("vendredi_fin", vendredi_fin);
            formData.append("samedi_deb", samedi_deb);
            formData.append("samedi_fin", samedi_fin);
            formData.append("dimanche_deb", dimanche_deb);
            formData.append("dimanche_fin", dimanche_fin);
            axios
                .post("http://localhost:8000/api/ajout_plannign", formData)
                .then(response => {
                    document.getElementById("idpes").value = ""
                    document.getElementById("type_lundi").value = ""
                    document.getElementById("type_mardi").value = ""
                    document.getElementById("type_mercredi").value = ""
                    document.getElementById("type_jeudi").value = ""
                    document.getElementById("type_vendredi").value = ""
                    document.getElementById("type_samedi").value = ""
                    document.getElementById("type_dimanche").value = ""

                    setType_lundi('off')
                    setType_mardi('off')
                    setType_mercredi('off')
                    setType_jeudi('off')
                    setType_vendredi('off')
                    setType_samedi('off')
                    setType_dimanche('off')


                    hide_blur()
                    enqueueSnackbar(response.data.message, { variant: "success" });
                    select_personnel(); //polling
                    select_planning(); //polling   


                })
                .catch(er => {
                    console.log(er);
                    enqueueSnackbar("Connexion n'est pas encore établie", {
                        variant: "error"
                    });
                });
            setErrors({});
        } else {
            console.log("Validation échouée");
        }

    }




    return (
        <>
            {/* formulaire d'ajout planning  */}
            <div className=" w-[90vw] md:w-[70vw] lg:w-[50vw] h-auto bg-white rounded-[1em] fixed z-50 px-4 py-4 dark:bg-[#121212] dark:text-gray-100 form_ajout_planning" style={{
                top: '-50%', left: '50%', transform: 'translate(-50%, -50%)'
            }}>

                <div className="flex items-center justify-between mt-1 mb-4">
                    <font> Nouvelle Planning</font>
                    <div className="rounded">
                        <img src="../image_union/logo_union.svg" alt="logo" className="w-8" />
                    </div>
                </div>
                <form onSubmit={soumettre_ajout_planning}>
                    {/* nom des personnels  */}
                    <div>
                        <select name="id_personnel" id='idpes' onChange={changePers} className='mb-4 tailwind-form'>
                            <option value="" disabled selected>seletionner presonnel</option>
                            {
                                liste_personnel.map((l, index) => (
                                    <option key={index} value={l.id}>
                                     
                                        <font>
                                            [{l.identifiant}] {"  : "}
                                        </font>
                                        {l.nom} {" "} {l.prenom}

                                    </option>
                                ))
                            }
                        </select>
                        {errors.id_personnel && <p className="text-red-500 text-[11px]">{errors.id_personnel}</p>}
                    </div>

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
                                    <div className='flex items-center justify-center py-1 bg-gray-100 rounded lg:space-x-4 lg:px-3 lg:justify-start dark:bg-[transparent]'>
                                        <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">1</font>
                                        <font>Lundi</font>
                                    </div>
                                </td>
                                <td>
                                    <select name="" id='type_lundi' className='tailwind-form' onChange={typeLundi}>
                                        <option value="" selected disabled  >Type de Shift</option>
                                        <option value="shift">Shift</option>
                                        <option value="off">OFF</option>
                                    </select>
                                    {errors.type_lundi && <p className="text-red-500 text-[11px]">{errors.type_lundi}</p>}

                                </td>
                                {
                                    type_lundi === 'shift' && (
                                        <td>
                                            <input type="time" name="" id="" className='tailwind-form' required onChange={OnchangeLundi} />
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
                                    <div className='flex items-center justify-center py-1 bg-gray-100 dark:bg-[transparent] rounded lg:space-x-4 lg:px-3 lg:justify-start'>
                                        <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">2</font>
                                        <font>Mardi</font>
                                    </div>
                                </td>
                                <td>
                                    <select name="" id='type_mardi' className='tailwind-form' onChange={typeMardi}>
                                        <option value="" selected disabled  >Type de Shift</option>
                                        <option value="shift">Shift</option>
                                        <option value="off">OFF</option>
                                    </select>
                                    {errors.type_mardi && <p className="text-red-500 text-[11px]">{errors.type_mardi}</p>}

                                </td>
                                {
                                    type_mardi === 'shift' && (
                                        <td>
                                            <input type="time" name="" id="" className='tailwind-form' required onChange={OnchangeMardi} />
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
                                    <div className='flex items-center justify-center py-1 bg-gray-100 dark:bg-[transparent] rounded lg:space-x-4 lg:px-3 lg:justify-start'>
                                        <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">3</font>
                                        <font>Mercredi</font>
                                    </div>
                                </td>
                                <td>
                                    <select name="" id='type_mercredi' className='tailwind-form' onChange={typeMercredi}>
                                        <option value="" selected disabled  >Type de Shift</option>
                                        <option value="shift">Shift</option>
                                        <option value="off">OFF</option>
                                    </select>
                                    {errors.type_mercredi && <p className="text-red-500 text-[11px]">{errors.type_mercredi}</p>}

                                </td>
                                {
                                    type_mercredi === 'shift' && (
                                        <td>
                                            <input type="time" name="" id="" className='tailwind-form' required onChange={OnchangeMercredi} />
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
                                    <div className='flex items-center justify-center py-1 bg-gray-100 dark:bg-[transparent] rounded lg:space-x-4 lg:px-3 lg:justify-start'>
                                        <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">4</font>
                                        <font>Jeudi</font>
                                    </div>
                                </td>
                                <td>
                                    <select name="" className='tailwind-form' id='type_jeudi' onChange={typeJeudi}>
                                        <option value="" selected disabled  >Type de Shift</option>
                                        <option value="shift">Shift</option>
                                        <option value="off">OFF</option>
                                    </select>
                                    {errors.type_jeudi && <p className="text-red-500 text-[11px]">{errors.type_jeudi}</p>}

                                </td>
                                {
                                    type_jeudi === 'shift' && (
                                        <td>
                                            <input type="time" name="" id="" className='tailwind-form' required onChange={OnchangeJeudi} />
                                        </td>
                                    )
                                }

                                {
                                    type_jeudi === 'shift' && (
                                        <td>
                                            <input type="time" name="" id="" className='tailwind-form' required value={jeudi_fin} />
                                        </td>
                                    )
                                }

                            </tr>

                            {/* Vendredi  */}
                            <tr>
                                <td>
                                    <div className='flex items-center justify-center py-1 bg-gray-100 dark:bg-[transparent] rounded lg:space-x-4 lg:px-3 lg:justify-start'>
                                        <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">5</font>
                                        <font>vendredi</font>
                                    </div>
                                </td>
                                <td>
                                    <select name="" className='tailwind-form' id='type_vendredi' onChange={typeVendredi}>
                                        <option value="" selected disabled  >Type de Shift</option>
                                        <option value="shift">Shift</option>
                                        <option value="off">OFF</option>
                                    </select>
                                    {errors.type_vendredi && <p className="text-red-500 text-[11px]">{errors.type_vendredi}</p>}

                                </td>
                                {
                                    type_vendredi === 'shift' && (
                                        <td>
                                            <input type="time" name="" id="" className='tailwind-form' required onChange={OnchangeVendredi} />
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
                                    <div className='flex items-center justify-center py-1 bg-gray-100 dark:bg-[transparent] rounded lg:space-x-4 lg:px-3 lg:justify-start'>
                                        <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">6</font>
                                        <font>Samedi</font>
                                    </div>
                                </td>
                                <td>
                                    <select name="" className='tailwind-form' id='type_samedi' onChange={typeSamedi}>
                                        <option value="" selected disabled  >Type de Shift</option>
                                        <option value="shift">Shift</option>
                                        <option value="off">OFF</option>
                                    </select>
                                    {errors.type_samedi && <p className="text-red-500 text-[11px]">{errors.type_samedi}</p>}
                                </td>
                                {
                                    type_samedi === 'shift' && (
                                        <td>
                                            <input type="time" name="" id="" className='tailwind-form' required onChange={OnchangeSamedi} />
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
                                    <div className='flex items-center justify-center py-1 bg-gray-100 dark:bg-[transparent] rounded lg:space-x-4 lg:px-3 lg:justify-start'>
                                        <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">7</font>
                                        <font>Dimanche</font>
                                    </div>
                                </td>
                                <td>
                                    <select name="" className='tailwind-form' id='type_dimanche' onChange={typeDimanche}>
                                        <option value="" selected disabled  >Type de Shift</option>
                                        <option value="shift">Shift</option>
                                        <option value="off">OFF</option>
                                    </select>
                                    {errors.type_dimanche && <p className="text-red-500 text-[11px]">{errors.type_dimanche}</p>}
                                </td>
                                {
                                    type_dimanche === 'shift' && (
                                        <td>
                                            <input type="time" name="" id="" className='tailwind-form' required onChange={OnchangeDimanche} />
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

        </>
    )
}

export default Form_planning