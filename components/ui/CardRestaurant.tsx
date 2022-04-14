import React, { FC } from 'react'
import Image from 'next/image';

import { BiTimeFive } from "react-icons/bi";

import styles from "../../styles/components/ui/CardRestaurant.module.css";

interface Props{
  restaurant : string;
}


export const CardRestaurant : FC<Props> = ({restaurant}) => {
  return (
    <div className={styles.card_restaurant_container}>
      <div>

        <Image src="https://askbootstrap.com/preview/swiggi/template2/img/trending5.png" width="100%" height="100%" />
      </div>
      <div>
        <p>{restaurant}</p>
        <p>Vegetarian, Indian, Pure veg</p>
        <div>
          <BiTimeFive/>
          <p>15-30 min</p>
        </div>
        <div>
          <p>$350 FOR TWO</p>
        </div>
        <div>
          <p>OFFER</p>
          <p>Use Coupon NEW50</p>
        </div>
      </div>
    </div>
  )
}
