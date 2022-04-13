import React from 'react';

import styles from "../../styles/components/ui/Navbar.module.css";

import { FiMapPin , FiFilter , FiMenu } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav className={styles.navbar_container}>
      <div className={styles.ubicacion_menu_filter}>
        <div className={styles.ubicacion}>

          <FiMapPin className={styles.icons}/>
          <h6 className={styles.titulo_ubicacion}>Pune, Maharasha 411014</h6>
        </div>
        <div className={styles.filter_menu}>
          <FiFilter className={styles.icons}/>
          <FiMenu className={styles.icons}/>
        </div>
      </div>
      <div className={styles.search_container}>
        <BsSearch className={styles.search}/>
        <input className={styles.input_search} placeholder="Search for restaurants or dishes"/>
      </div>
    </nav>
  )
}
