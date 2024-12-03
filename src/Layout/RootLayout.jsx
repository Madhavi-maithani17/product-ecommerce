import React from "react";
import Navbar from "../components/Navbar/Navbar"
import { Outlet } from "react-router-dom";
function RootLayout() {
   
    return ( 
    <>
      <Navbar />
      <main style={{ paddingTop: "60px" }}>
        <Outlet />
      </main>
    </>
     );
}

export default RootLayout;