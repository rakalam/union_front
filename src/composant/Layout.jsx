import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Hedear from "./Hedear";
import { Outlet } from "react-router-dom";
import Compte from "../pages/compte";
import $ from "jquery"

const Layout = () => {

  const [blurG, setBlurG] = useState(false)

  const show_compte = () => {
    setBlurG(true)
    $('.div_compte').animate({ right: '1rem' }, 300)
  }
  const hide_compte = () => {
    $('.div_compte').animate({ right: '-50rem' }, 300)
    setTimeout(() => {
      setBlurG(false)
    }, [100])
  }

  return (
    <div className="flex overflow-hidden bg-gray-50 dark:bg-black">
      <div className="h-[100vh] shadow">
        <Sidebar show_compte={show_compte} />
      </div>
      <div className="w-full h-auto px-2 ml-16 shadow lg:ml-56 ">
        <Hedear />
        <Outlet />
      </div>
      <div className="fixed h-[90vh] w-[17rem] shadow  z-30 top-14 rounded-[1em] bg-gray-100 div_compte" style={{ right: '-50rem' }}>
        <Compte hide_compte={hide_compte} />
      </div>

      {/* div blur  */}
      <div onClick={hide_compte}
        className={`fixed top-0 left-0 z-10 w-full h-[100vh] bg-[#00000000] dark:bg-[#ffffff0a] cursor-pointer ${blurG ? "block" : "hidden"}`}
        style={{
          backdropFilter: 'blur(3px)'
        }}></div>
    </div>
  );
};

export default Layout;