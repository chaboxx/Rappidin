import { FC } from "react"
import Image from "next/image";


import { BiHomeAlt } from "react-icons/bi";
import { FiMapPin , FiUser } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import styles from "../../styles/components/ui/NavigationBar.module.css";

export const NavigationBar :FC= () => {
  return (
    <div className={styles.navigation_container}>
      <div className={styles.navigator_menu}>

        <div className={styles.image}>

          <Image src="/../public/nav-logo.png" width="60px" height="78px"/>
        </div>
        
        <ul className={styles.menu_container}>
          
          <li className={styles.list_item}>
            <BiHomeAlt className={styles.icon}/>
            <p className={styles.texto}>HOME</p>
          </li>
          
          <li className={styles.list_item}>
            <FiMapPin className={styles.icon}/>
            <p className={styles.texto}>TRENDING</p>
          </li>
          <li></li>
          
          <li className={styles.list_item}>
            <MdOutlineFavoriteBorder className={styles.icon}/>
            <p className={styles.texto}>FAVORITES</p>
          </li>
          
          <li className={styles.list_item}>
            <FiUser className={styles.icon}/>
            <p className={styles.texto}>PROFILE</p>
          </li>
        
        
        </ul>  
        
      </div>
    
    </div>
  )
}
