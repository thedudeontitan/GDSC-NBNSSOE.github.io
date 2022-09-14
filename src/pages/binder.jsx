import React from "react";
import Navbar from "../components/navbar";
import BottomNav from "../components/navbar/navs/bottomNavbar";


export default function Binder({children}){

    return (
        <>
            <Navbar/>
                {children}
            <BottomNav/>
        </>
    )
}