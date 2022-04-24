import { FC } from 'react'

import styles from "../../styles/components/checkout/PayButton.module.css";

export const PayButton : FC = () => {
  return (
    <div className={styles.pay_button_container}>
      <div className={styles.content_container}>
        <p className={styles.pay_text}>PAY $1329 {`->`}</p>
      </div>
    </div>
  )
}
