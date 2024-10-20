import React from "react";
import Sidebar from "./Sidebar";
import Hedear from "./Hedear";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex overflow-hidden bg-gray-50 dark:bg-black">
      <div className="h-[100vh]">

        <Sidebar />
      </div>
      <div className="w-full h-auto px-2 ml-16 lg:ml-56 ">
        <Hedear />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;