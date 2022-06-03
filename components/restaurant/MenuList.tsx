import React, { FC } from 'react';
import { useCategoryMenu } from '../../hooks/useCategoryMenu';

interface Props {
  menus : {
    categoria: string;
    nombre: string;
    precio: number;
    descripcion: string;
  }[];
}

import styles from "../../styles/components/restaurant/MenuList.module.css";

export const MenuList : FC<Props> = ({menus}) => {
  
  const { menusByCategory } = useCategoryMenu(menus);


  return (
    <div className={styles.menu_list_container}>
      
      <div className={styles.menu_title_container}>
        <h4 className={styles.menu_label}>Menu</h4>
        <p className={styles.view_label}>View all {">>"}</p>
      </div>
      
      {
        menusByCategory.map(menuCat=>(
          <div className={styles.menus_list}>
            <div className={styles.menu_labels_container}>
              <h5 className={styles.menu_category_label}>{menuCat.categoria}</h5>
              <span className={styles.items_count_label}>{menuCat.menus.length} ITEMS</span>
            </div>
            <div>
              {
                menuCat.menus.map(menu=>(
                  <div className={styles.menu_item}>
                    <div className={styles.menu_item_icon}></div>
                    <div className={styles.menu_item_information}>
                      <div className={styles.menu_item_labels_container}>
                        <h5 className={styles.menu_item_title_label}>{menu.nombre}</h5>
                        <div className={styles.menu_item_best_seller_container}>
                          <p className={styles.menu_item_best_seller_label}>BEST SELLER</p>
                        </div>
                      </div>
                      <p className={styles.menu_item_price_label}>$ {menu.precio}</p>
                    </div>
                    <button className={styles.button}>
                      ADD
                    </button>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }

    </div>
  
  )
}
