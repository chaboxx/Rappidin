
import { NextPage } from "next";
import Image from "next/image";

import { Layout } from "../../layouts/Layout";

import { PayButton } from "../../components/cart/PayButton";
import { PlatoRow } from "../../components/cart/PlatoRow";

import { FiMapPin ,FiMessageSquare } from "react-icons/fi";
import { SummaryTotal } from "../../components/ui/checkout/SummaryTotal";

import styles from "../../styles/cart/CarritoComprasScreen.module.css";

const carritoPlatos = ["Chicken Tikka Sub","Methi Chicken Dry","Reshmi Kebab","Lemon Cheese Dry","Rara Paneer","Special Lemon Cheese","Tandoori Chicken"]
const total = {
  itemTotal: 3140,
  charges: 62.8,
  deliveryFee: 10,
  discount: 1884,
  total: 1329
}

export const CarritoComprasScreen:NextPage = () => {
  return (
    <Layout title="Carrito Compras" description="Carrito Compras User">
      
      <div className={styles.carrito_compras_container}>
        <div className={styles.restaurant_title_container}>
          <div>
            <Image className={styles.restaurant_image} src="/../public/starter1.jpg" width="40px" height="40px"/>
          </div>
          <div>
            <h1 className={styles.restaurant_title}>The Chatori Street</h1>
            <div className={styles.restaurant_ubication}>
              <FiMapPin className={styles.icon_ubication}/>
              <p className={styles.restaurant_text_ubication}>Ramdaspeth, Nagpur, Maharashtra</p>
            </div>
          </div>
        </div>

        <div className={styles.menus_container}>
          {
            carritoPlatos.map((plato,index)=>(
              <PlatoRow plato={plato} key={index}/>
            ))
          }
        </div>

        <div className={styles.promo_messages_container}>
          <div className={styles.promo_container}>

            <input className={styles.input_promo} type="text" name="promo_code" placeholder="Enter promo code" />
            <button className={styles.apply_button}>% APPLY</button>
          </div>

          <div className={styles.message_container}>
            <button className={styles.button_send_message}>
              <FiMessageSquare/>
            </button>
            <textarea className={styles.input_message} name="comment" placeholder="Any suggestions? We will pass it on.."/>
          </div>

        </div>

      
        <SummaryTotal total={total}/>
      </div>

      <PayButton/>
    </Layout>
  )
}

export default CarritoComprasScreen;