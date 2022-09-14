import React from "react";
import styles from "./index.module.css";
import Navbar from "../../components/navbar";
import BottomNav from "../../components/navbar/navs/bottomNavbar";

export default function Projects(){



    return (
        <>
            <Navbar/>
            <div className={styles.root}>
                <p>Initial</p>
            </div>
            <BottomNav/>
        </>
    )
}