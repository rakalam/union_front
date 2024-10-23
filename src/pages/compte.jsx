import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const Compte = ({hide_compte}) => {

  return (
    <>

      <div className='flex items-center justify-between px-4 py-2 bg-white rounded-tr-[1em] rounded-tl-[1em]'>
        <font className="text-[13px]">Compte</font>
        <div
        onClick={hide_compte}
         className="flex items-center justify-center w-6 h-6 text-white rounded cursor-pointer bg-orange_union">
          <FaArrowRight className='text-[12px]' />
        </div>
      </div>
      <hr />

    </>
  );
};

export default Compte;
