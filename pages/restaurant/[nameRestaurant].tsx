import { Layout } from '../../layouts/Layout';

import { AiOutlineStar } from "react-icons/ai";

import styles from "../../styles/restaurant/RestaurantScreen.module.css";
import { MenuList } from '../../components/restaurant/MenuList';


const menus = [
  {
    categoria: "Brasas",
    nombre : "Pollo a la brasa",
    precio : 98,
    descripcion : "Pollo con papas fritas, ensalada clásica, salsas, gaseosa 1.5l, 4 porciones de torta."
  },
  {
    categoria: "sd",
    nombre : "Pollo a la bbq",
    precio : 128,
    descripcion : "Pollo con papas fritas, ensalada clásica, salsas, gaseosa 1.5l, 4 porciones de torta."
  },
  {
    categoria: "sd",
    nombre : "1/4 Pollo a la brasa",
    precio : 108,
    descripcion : "Pollo con papas fritas, ensalada clásica, salsas, gaseosa 1.5l, 4 porciones de torta."
  },
  {
    categoria: "Picantes",
    nombre : "1/4 Pollo a la brasa",
    precio : 380,
    descripcion : "Pollo con papas fritas, ensalada clásica, salsas, gaseosa 1.5l, 4 porciones de torta."
  },
  {
    categoria: "Brasas",
    nombre : "1/4 Pollo a la brasa",
    precio : 778,
    descripcion : "Pollo con papas fritas, ensalada clásica, salsas, gaseosa 1.5l, 4 porciones de torta."
  },

]

const RestaurantScreen = () => {


  return (
    <>
      <Layout title="Restaurante" description="Restaurante Detalles-Descripcion">
        <div className={styles.restaurant_screen_module}>
          <h4 className={styles.restaurant_title}>
            Conrad Chicago <br/>Restaurant
          </h4>
          <p className={styles.restaurant_subtitle}>963 Madyson Drive Suite 679</p>
          <div className={styles.restaurant_calification}>
            <div className={styles.restaurant_stars}>
                <AiOutlineStar className={styles.star_full}/>
                <AiOutlineStar className={styles.star_full}/>
                <AiOutlineStar className={styles.star_full}/>
                <AiOutlineStar className={styles.star_full}/>
                <AiOutlineStar className={styles.star_empty}/>
            </div>
            <p className={styles.reviews_count}>(245 Reviews)</p>

          </div>
          <div className={styles.restaurant_delivery_information}>
            <div className={styles.restaurant_delivery}>
              <p className={styles.delivery}>Delivery</p>
              <p className={styles.info_price}>FREE</p>
            </div>
            <div className={styles.open_time_container}>
              <p className={styles.open}>Open time</p>
              <p className={styles.time}>8:00 AM</p>
            </div>
          </div>
        </div>
        <MenuList menus={menus}/>
      </Layout>
    </>
  )
}

export default RestaurantScreen;