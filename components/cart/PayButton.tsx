
import { FC } from "react";
import { FiShoppingBag } from "react-icons/fi";

import styles from "../../styles/components/cart/PayButton.module.css";

export const PayButton:FC = () => {
  return (
    <div className={styles.pay_button_container}>
      <div className={styles.content_container}>
        <div className={styles.icon_container}>

          <FiShoppingBag className={styles.icon}/>
        
        </div>
        <div>
          <p className={styles.item_label}>5 ITEM</p>
          <p className={styles.item_total}>$235,50.00</p>
        </div>
        <div className={styles.pay_container}>
          <p className={styles.pay_label}>PAY</p>
          <p className={styles.pay_icon}>{`>`}</p>
        </div>
      </div>
    </div>
  )
}
