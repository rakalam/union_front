import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { DotLoader } from 'react-spinners';

const ModeChange = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        
        
        // Récupère la page d'origine à partir de `location.state`
        const previousPage = location.state?.from || "/logic/";
        // Redirige après 5 secondes
        const timer = setTimeout(() => {
            navigate(previousPage);
        }, 1000);

        // Nettoyage du timer lorsque le composant est démonté
        return () => clearTimeout(timer);
    }, [navigate, location.state]);
    return (
        <div className="px-2 pt-4 text-gray-900 dark:bg-black ">
            <div className="bg-white rounded-[1em] dark:bg-[#131313] p-2 flex items-center justify-center w-full h-[87vh]">
                <DotLoader size={50} color={'#e6631f'} />
            </div>
        </div>
    )
}

export default ModeChange
