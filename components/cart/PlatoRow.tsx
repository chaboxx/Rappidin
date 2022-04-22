import { FC } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface Props{
  plato:string;
}

import styles from "../../styles/components/cart/PlatoRow.module.css";

export const PlatoRow:FC<Props> = ({plato}) => {
  return (
    <div className={styles.plato_row_container}>
      <div className={styles.icon}><span></span></div>
      <h3>Chicken Tikka Sub</h3>
      <div>
        <AiOutlineMinus/>
        <p>1</p>
        <AiOutlinePlus/>
      </div>
      <p>$628</p>
    </div>
  )
}
