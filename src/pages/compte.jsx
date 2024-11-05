import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";


const compte = {
  "liste": [
    {
      "id": "1",
      "nom": "MH-1248",
      "type": "INS",
    },
    {
      "id": "1",
      "nom": "MH-1258",
      "type": "INS",
    },
    {
      "id": "1",
      "nom": "MH-1248",
      "type": "OUT",
    },
    {
      "id": "1",
      "nom": "MH-1448",
      "type": "OUT",
    },
    {
      "id": "1",
      "nom": "MH-UN-Tolo",
      "type": "INS",
    },
    {
      "id": "1",
      "nom": "MH-UN-Josef",
      "type": "INS",
    },
    {
      "id": "1",
      "nom": "MH-UN-Sigii",
      "type": "INS",
    },
    {
      "id": "1",
      "nom": "MH-UN-Paf",
      "type": "INS",
    },



  ]
}

const Compte = ({ hide_compte }) => {

  const [donne, setDonne] = useState([])


  useEffect(() => {
    setDonne(compte.liste)
  }, [])

  return (
    <>

      <div className='flex items-center justify-between px-4 py-2 bg-white rounded-tr-[1em] rounded-tl-[1em] dark:bg-[#080808] dark:text-gray-100'>
        <font className="text-[13px]"></font>
        <div
          onClick={hide_compte}
          className="flex items-center justify-center w-6 h-6 text-white rounded cursor-pointer bg-orange_union">
          <FaArrowRight className='text-[12px]' />
        </div>
      </div>
      <hr />

      <div className='flex items-center justify-between px-4 py-2 rounded-tr-[1em] rounded-tl-[1em] dark:text-gray-100'>
        <font className="text-[13px]">Liste des Compte</font>
        <div
          //  onClick={hide_compte}
          className="flex items-center justify-center w-6 h-6 text-white rounded cursor-pointer bg-bleue_union_500">
          <IoMdAdd className='text-[12px]' title="ajouter nouvelle compte" />
        </div>
      </div>


      {
        donne.map((d, index) => (


          <div className="flex items-center justify-between px-4 py-4 mx-1 my-2 text-gray-900 rounded shadow dark:text-gray-100 shadow-gray-100 dark:shadow-gray-700">
            <font className="text-[12px]">{d.nom}</font>
            <div className={`px-2 py-1 text-white rounded-full ${d.type === "OUT" ? "bg-bleue_union_500" : "bg-orange_union"}`}>
              <font className="text-[12px]">{d.type}</font>
            </div>
          </div>


        ))
      }





    </>
  );
};

export default Compte;
