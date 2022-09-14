import { React} from "react";
import styles from "../index.module.css";
import {NavLink} from "react-router-dom";
import {endpoints} from "../../../App";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function MobileNav(){


  return (
        <ul className={styles.mobileUl}>
            <li><a className="navlnk" href="https://github.com/GDSC-NBNSSOE"><GitHubIcon className="icons"/></a></li>
            <li><NavLink className="navlnk" to={`/${endpoints.contact}`}><EmailIcon className="icons"/></NavLink></li>
        </ul>
    )
}

