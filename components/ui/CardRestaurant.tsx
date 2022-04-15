import React, { FC } from 'react'
import Image from 'next/image';

import { BiTimeFive } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

import styles from "../../styles/components/ui/CardRestaurant.module.css";

interface Props{
  restaurant : string;
}


export const CardRestaurant : FC<Props> = ({restaurant}) => {
  return (
    <div className={styles.card_restaurant_container}>
      <div className={styles.image}>
        <p className={styles.estado}>HOT</p>
        <BsBookmark className={styles.icon_bookmark} />
        
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
