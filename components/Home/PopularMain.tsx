import { FC } from "react"

import { CardRestaurantSecondary } from "../ui/CardRestaurantSecondary";

import styles from "../../styles/components/Home/PopularMain.module.css";

interface Props {
  popular: string[];

}


export const PopularMain :FC<Props> = ({popular}) => {
  return (
    <section className={styles.popular_main_container}>
      <div className={styles.description}>
        <h5>Most popular</h5>
        <p>26 places --</p>
      </div>
      <div className={styles.popular_cards_container}>
        {
          popular.map((popular,index)=>(
            <CardRestaurantSecondary restaurant={popular} key={index}/>
          ))

        }
      </div>

      
    </section>
  )
}
