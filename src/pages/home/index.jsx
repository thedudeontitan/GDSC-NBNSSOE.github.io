import React from "react";
import styles from "./index.module.css";
import GDSCHOME from "../../assets/gdsc-home.png";

export default function Home(){



    return (
            <div className={styles.root}>
                <div className={styles.overview}>
                    <div className={styles.leftCont}>
                        <div>
                            <p>Google Developer Student Clubs NBNSSOE</p>
                            <p>
                                <span style={{color:"#4b91f4"}}>G</span>
                                <span style={{color:"#f74037"}}>o</span>
                                <span style={{color:"#ffb806"}}>o</span>
                                <span style={{color:"#4b91f4"}}>g</span>
                                <span style={{color:"#ffb806"}}>l</span>
                                <span style={{color:"#f74037"}}>e </span>
                                Developer Student Clubs is a Developers program for university students to learn 
                                <span style={{color:"##fbbc12"}}> mobile </span>
                                and
                                <span style={{color:"#557dbf"}}> web development skills,</span>
                                <span style={{color:"#e1382b"}}> design thinking skills </span> 
                                and
                                <span style={{color:"#189e59"}}> leadership skills</span>
                                .
                            </p>
                            <button>Become a member</button>
                        </div>
                    </div>
                    <div className={styles.rightCont}>
                        <img src={GDSCHOME} alt="diversity" />
                    </div>
                </div>

            </div>
    )
}