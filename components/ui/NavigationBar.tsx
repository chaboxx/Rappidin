import { FC } from "react"
import Image from "next/image";


import { BiHomeAlt } from "react-icons/bi";

import styles from "../../styles/components/ui/NavigationBar.module.css";

export const NavigationBar :FC= () => {
  return (
    <div className={styles.navigation_container}>
      <div className={styles.navigator_menu}>

     
          <li className={styles.list_item}>
            <BiHomeAlt className={styles.icon}/>
            <p className={styles.texto}>HOME</p>
          </li>
          
          <li className={styles.list_item}>
            <BiHomeAlt className={styles.icon}/>
            <p className={styles.texto}>TRENDING</p>
          </li>
          
          <div className={styles.image}>

            <Image src="/../public/nav-logo.png" width="60px" height="78px"/>
          </div>
          
          
          
          <li className={styles.list_item}>
            <BiHomeAlt className={styles.icon}/>
            <p className={styles.texto}>FAVORITES</p>
          </li>
          
          <li className={styles.list_item}>
            <BiHomeAlt className={styles.icon}/>
            <p className={styles.texto}>PROFILE</p>
          </li>
        
      </div>
    
    </div>
  )
}
