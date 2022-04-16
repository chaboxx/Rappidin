import React, { FC } from 'react'
import { CardRestaurant } from '../ui/CardRestaurant';


import styles from "../../styles/components/Home/SalesMain.module.css";

interface Props{
  mostSales : string[];
}

export const SalesMain :FC<Props> = ({mostSales}) => {
  return (
    <div className={styles.sales_main_container}>
      <div className={styles.sales_description}>
        <h5>Most sales</h5>
        <p>26 places --</p>
      </div>
      <div className={styles.sales_cards}>
        {
          mostSales.map((sale,index)=>(
            <CardRestaurant restaurant={sale} key={index} layout="row"/>
            ))
        }
      </div>
    </div>
  )
}