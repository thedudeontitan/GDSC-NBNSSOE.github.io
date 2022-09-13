import { React} from "react";
import styles from "../index.module.css";
import {Link} from "react-router-dom";
import {endpoints} from "../../../App";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function MobileNav(){


  return (
        <ul className={styles.mobileUl}>
            <li><a className="navlnk" href="https://google.com"><GitHubIcon className="icons"/></a></li>
            <li><Link className="navlnk" to={endpoints.contact}><EmailIcon className="icons"/></Link></li>
        </ul>
    )
}

