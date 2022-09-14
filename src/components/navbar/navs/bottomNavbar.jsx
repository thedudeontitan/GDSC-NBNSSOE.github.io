import { React} from "react";
import {NavLink} from "react-router-dom";
import {endpoints} from "../../../App";
import styles from "./bottomNavbar.module.css";

import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GradeIcon from '@mui/icons-material/Grade';
import GroupsIcon from '@mui/icons-material/Groups';

export default function BottomNav(){

    const activeNav = ({isActive})=>{
        return {
            borderTop: isActive ? "3px solid rgba(2, 2, 236, 0.892)" : "none",
            color: isActive ? "rgba(2, 2, 236, 0.892)" : "black"
          }
        }

    return (
           
        <div className={styles.bottomNav}>
            
            <ul>
                <li><NavLink className={styles.bottomNavlnk} style={isActive => activeNav(isActive)} to={`/${endpoints.home}`}><HomeIcon className={styles.bottomIcons}/></NavLink></li>
                <li><NavLink className={styles.bottomNavlnk} style={isActive => activeNav(isActive)} to={`/${endpoints.events}`}><EventIcon className={styles.bottomIcons}/></NavLink></li>
                <li><NavLink className={styles.bottomNavlnk} style={isActive => activeNav(isActive)} to={`/${endpoints.projects}`}><AssignmentIcon className={styles.bottomIcons}/></NavLink></li>
                <li><NavLink className={styles.bottomNavlnk} style={isActive => activeNav(isActive)} to={`/${endpoints.home}`}><GradeIcon className={styles.bottomIcons}/></NavLink></li>
                <li><NavLink className={styles.bottomNavlnk} style={isActive => activeNav(isActive)} to={`/${endpoints.team}`}><GroupsIcon className={styles.bottomIcons}/></NavLink></li>
            </ul>

        </div>
  
        )
}

