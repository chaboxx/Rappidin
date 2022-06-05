import { FC } from 'react';
import { AiOutlineRight, AiOutlineShopping } from 'react-icons/ai';
import { Cart } from '../../interfaces/cart';



import styles from "../../styles/components/restaurant/ProceedCartComponent.module.css";

interface Props {
  cart : Cart;
}

export const ProceedCartComponent : FC<Props> = ({cart}) => {

  

  return (
    <div className={styles.proceed_cart_component_container}>
      <div className={styles.proceed_cart_content_container}>
        <div className={styles.icon_container}>
          <AiOutlineShopping/>
        </div>

        <div className={styles.info_container}>
          
          <p className={styles.item_count}>5 ITEM</p>
          <p className={styles.total_amount}>$ 235.50</p>
          
        </div>
        <div className={styles.proceed_container}>
          <p className={styles.proceed_label}>PROCEED TO CART</p>
          <AiOutlineRight className={styles.proceed_icon}/>
        </div>
      </div>
    </div>
  )
}
