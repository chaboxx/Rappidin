import { FC } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface Props{
  plato:string;
}

import styles from "../../styles/components/cart/PlatoRow.module.css";

export const PlatoRow:FC<Props> = ({plato}) => {
  return (
    <div className={styles.plato_row_container}>
      <div className={styles.icon_svg}><div></div></div>
      <h3 className={styles.title}>Chicken Tikka Sub</h3>
      <div className={styles.boton_cantidad}>
        <AiOutlineMinus className={styles.icon}/>
        <p className={styles.cantidad}>1</p>
        <AiOutlinePlus className={styles.icon}/>
      </div>
      <p className={styles.precio}>$628</p>
    </div>
  )
}
