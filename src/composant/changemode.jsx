import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Changemode = () => {
    const ary = useNavigate()
    const [nif, setNif] = useState('')
    const [mdp, setMdp] = useState('')
    const [mdp1, setMdp1] = useState('')
    const [mes, setMes] = useState('')


    const demande_nif = () => {
        // const stock = { date_ajout, quantite_ajoute, id_m }
        axios.get("http://localhost:8000/api/demande_nif")
            .then(response => {
                setNif(response.data.nif);
            }).catch(er => {
                console.log(er);
            })
    }

    const soumetre = (e) => {
        e.preventDefault()

        const formaData = new FormData()
        formaData.append("nif", nif)
        formaData.append("mdp", mdp)
        if (mdp === mdp1) {
            axios.post("http://localhost:8000/api/ajout", formaData)
                .then(response => {
                    setMes(response.data.mes);
                    axios.get("http://localhost:8000/api/get_dernier")
                        .then(response => {
                            console.log(response.data.donnes);
                        }).catch(er => {
                            console.log(er);
                        })
                }).catch(er => {
                    console.log(er);
                })
        } else {
            setMes('verification incorrect')
        }


    }
    useEffect(() => {
    }, [])

    return (
        <div>
            <div className='flex items-center justify-center w-full h-screen text-gray-900 dark:text-gray-100'>

                <div className='w-[30vw]'>
                    <h1>Changement mode</h1>

                    <div className='flex items-center justify-between space-x-4'>
                        <button
                            onClick={demande_nif}
                            className='px-3 py-1 text-white rounded bg-bleue_union_500'>
                            Demender NIF
                        </button>
                        <span>{nif}</span>
                    </div>
                    <form onSubmit={soumetre}>
                        <p className='text-red_union_500'>{mes}</p>


                        <input type="text" className='my-2 tailwind-form' placeholder='nif'
                            value={nif}
                            onChange={(e) => setNif(e.target.value)}
                        />
                        <input type="password" className='my-2 tailwind-form' placeholder='entrer mot de passe'
                            value={mdp}
                            onChange={(e) => setMdp(e.target.value)}
                        />
                        <input type="password" className='my-2 tailwind-form' placeholder='retaper mot de passe'
                            value={mdp1}
                            onChange={(e) => setMdp1(e.target.value)}
                        />

                        <button className='px-3 py-1 text-white rounded bg-bleue_union_500'>
                            Enregistrer
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Changemode
