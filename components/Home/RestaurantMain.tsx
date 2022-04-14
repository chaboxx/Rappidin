import { FC } from "react";

import { CardRestaurant } from "../ui/CardRestaurant";

import styles from "../../styles/components/Home/RestaurantMainCards.module.css";
interface Props {
  restaurants : string[];
}

export const RestaurantMainCards : FC<Props> = ({restaurants}) => {
  return (
    <div className={styles.restaurant_main_cards_container}>
      <div className={styles.restaurant_title}>
        <h4>Trending this week</h4>
        <p>View all --</p>
      </div>

      <div className={styles.restaurant_container}>
        {
          restaurants.map((restaurant,index)=>(
            
            <CardRestaurant key={index} restaurant={restaurant}/>
          ))
        }
      </div>
      

    </div>
  )
}
