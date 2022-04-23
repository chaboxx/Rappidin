import { FC } from "react"

import { Total } from "../../../interfaces/pedido";


import styles from "../../../styles/components/ui/checkout/SummaryTotal.module.css";


interface Props {
  total : Total;
}

export const SummaryTotal:FC<Props> = ({total}) => {
  return (
    <div className={styles.summary_container}>
      <div className={styles.item_container}>
        <p className={styles.text_label}>Item Total</p>
        <p className={styles.text_amount}>${total.itemTotal}</p>
      </div>
      <div className={styles.item_container}>
        <p className={styles.text_label}>Restaurant Charges</p>
        <p className={styles.text_amount}>${total.charges}</p>
      </div>
      <div className={styles.item_container}>
        <p className={styles.text_label}>Delivery Fee</p>
        <p className={styles.text_amount}>${total.deliveryFee}</p>
      </div>
      <div className={styles.item_container}>
        <p className={styles.text_label_green}>Total Discount</p>
        <p className={styles.text_amount_green}>${total.discount}</p>
      </div>
      <div className={styles.total_container}>
        <p className={styles.text_label_total}>TO PAY</p>
        <p className={styles.text_amount_total}>${total.total}</p>
      </div>
    </div>
  )
}
