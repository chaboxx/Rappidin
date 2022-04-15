import React, { FC } from 'react'

import { BsBookmark } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

import styles from "../../styles/components/ui/CardRestaurantSecondary.module.css";


interface Props{
  restaurant: string;
}


export const CardRestaurantSecondary :FC<Props> = ({restaurant}) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.image}>
        <div className={styles.image_top}>
          <p>Buy 1 Get 1 free</p>
          <BsBookmark className={styles.icon_book_mark}/>
        </div>
        
        <div className={styles.star_container}>
          <AiOutlineStar className={styles.star_icon}/>
          <p>3.7</p>
        </div>
      </div>
      <div className={styles.description_container}>
        <p className={styles.description_title}>The Sakafo Restaurant</p>
        <p className={styles.description_subtitle}>American,Pure veg</p>
        <div className={styles.calification_container}>
          <AiOutlineStar/>
          <AiOutlineStar/>
          <AiOutlineStar/>
          <AiOutlineStar/>
          <AiOutlineStar/>
        </div>

        <div className={styles.offer_container}>
          <p className={styles.offer}>OFFER</p>
          <p className={styles.off}>50% off</p>
        </div>
      </div>
    </div>
  )
}
