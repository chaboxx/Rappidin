import React, { FC } from 'react'


import { BiTimeFive } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

import styles from "../../styles/components/ui/CardRestaurant.module.css";

interface Props{
  restaurant : string;
  layout: "row" | "column";
}


export const CardRestaurant : FC<Props> = ({restaurant ,layout}) => {
  return (
    <div className={`${layout==="column" ? styles.card_restaurant_container_column : styles.card_restaurant_container_row}`}>
      <div className={`${layout==="column" ? styles.image : styles.image_row}`}>
        <p className={styles.estado}>HOT</p>
        <BsBookmark className={`${layout==="column" ? styles.icon_book_mark : styles.icon_book_mark_row}`} />
        
        <div className={styles.starts_container}>
          <AiOutlineStar className={styles.icon_start}/>
          <p className={styles.calification}>4.7</p>
        </div>
      </div>
      <div className={styles.card_description}>
        <p className={styles.card_text}>{restaurant}</p>
        <p className={styles.card_text_subtitle}>Vegetarian, Indian, Pure veg</p>
        <div className={styles.card_time}>
          <BiTimeFive className={styles.icon}/>
          <p className={styles.card_text_time}>15-30 min</p>
        </div>
        <div className={styles.price}>
          <p className={styles.card_text_price}>$350 FOR TWO</p>
        </div>
        <div className={styles.ofertas}>
          <p className={styles.card_text_offer}>OFFER</p>
          <p className={styles.card_text_coupon}>Use Coupon NEW50</p>
        </div>
      </div>
    </div>
  )
}
