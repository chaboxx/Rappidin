import { FC } from "react"

import { BsCreditCard2FrontFill } from "react-icons/bs";
import { AiOutlineDown , AiFillBank } from "react-icons/ai";
import { IoCashOutline } from "react-icons/io5";
import { FiCreditCard } from "react-icons/fi";

import styles from "../../styles/components/checkout/PaymentMethods.module.css";

export const PaymentMethods : FC = () => {
  return (
    <div className={styles.payment_methods_container}>
      <div className={styles.payment_details_container}>

        <div className={styles.payment_container}>
          <BsCreditCard2FrontFill className={styles.icon_main}/>
          <p className={styles.title_method}>Credit/Debit Card</p>
          <AiOutlineDown className={styles.icon_down}/>

        </div>
        <div className={styles.details}>
          <h6 className={styles.details_title_card}>Add new card</h6>
          <p className={styles.details_subtitle_card}>WE ACCEPT ( Master Card / Visa Card / American Express Card)</p>
          <div className={styles.card_form_container}>
            <div className={styles.card_number}>
              <p className={styles.card_label}>Card number</p>
              <div className={styles.input_container}>

                <input className={styles.input_card} type="text" placeholder="Card number"/>
                <FiCreditCard className={styles.icon_card}/>
              </div>
            </div>
            <div className={styles.caducity}>
              <p>Valid through(MM/YY)</p>
              <input type="text" placeholder="Enter Valid through"/>
            </div>
            <div className={styles.cvv}>
              <p>CVV</p>
              <input type="text" placeholder="Enter CVV Number"/>
            </div>
            <div className={styles.name_card}>
              <p>Name on card</p>
              <input type="text" placeholder="Enter Card number"/>
            </div>
            <div className={styles.save_card}>
              <input type="checkbox" />
              <p>Securely save this card</p>
            </div>
          </div>
        </div>

      </div>
      
      <div className={styles.payment_details_container}>

        <div className={styles.payment_container}>
          <AiFillBank className={styles.icon_main}/>
          <p className={styles.title_method}>Net Banking</p>
          <AiOutlineDown className={styles.icon_down}/>
        </div>
        <div className={styles.details}>
          <h1>Hola</h1>
        </div>
      </div>
      
      <div className={styles.payment_details_container}>

        <div className={styles.payment_container}>
          <IoCashOutline className={styles.icon_main}/>
          <p className={styles.title_method}>Cash on Delivery</p>
          <AiOutlineDown className={styles.icon_down}/>
        </div>
        <div className={styles.details}>
          <p>sd</p>
        </div>
      </div>

    </div>
  )
}
