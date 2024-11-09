import React from 'react'
import { useNavigate } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import '../composant/dots.css'

const Page_reiniialisation = () => {

    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/logic/personnel')
    }, [5000])

    return (
        <div className="px-2 pt-4 text-gray-900 dark:bg-black">
            <div className="bg-white rounded-[1em] dark:bg-[#131313] p-2 flex items-center justify-center w-full h-[87vh]">
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                    Réinitialisation des compteurs
                    <span className="ml-1 dot-loading text-[1em]"></span>
                </p>
            </div>
        </div>
    )
}

export default Page_reiniialisation