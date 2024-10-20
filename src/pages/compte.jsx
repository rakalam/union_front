import React, { useEffect } from "react";

const Compte = () => {
  useEffect(() => {
    localStorage.setItem("titre", "Compte");
  }, []);

  return (
    <div className="text-gray-900  border-gray-100 h-[90vh] p-3 overflow-y-scroll md:overflow-hidden"></div>
  );
};

export default Compte;
