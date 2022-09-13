import { React,useState,useEffect} from "react";
import styles from "./index.module.css";
import NBNSSOE from "../../assets/NBNSSOE.svg";
import DesktopNav from "./navs/desktop";
import MobileNav from "./navs/mobile";

export default function Navbar(){
  
  const [isMobile,setIsMobile] = useState(false);

  const handleWindowNavSize = ()=>{
    if (isMobile===false && window.innerWidth <= 966) {
      console.log(isMobile);
      setIsMobile(true);
    }
    else if (isMobile===true && window.innerWidth > 966){
      console.log(isMobile);
      setIsMobile(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', handleWindowNavSize);
  })




  return (
    <div className={styles.nav}>
      
       
      <div className={styles.right_side}>
      <img src={NBNSSOE} alt="logo" />
      </div>
      <div className={styles.left_side}>
        {
          isMobile ? <MobileNav/> : <DesktopNav/>
        }
      </div>

    </div>
  );
};
