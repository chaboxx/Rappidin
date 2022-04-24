import { FC } from "react"

import { FiMap } from "react-icons/fi";

interface Props {
  directions : string[];
}

import styles from "../../../styles/components/ui/checkout/Directions.module.css";

export const Directions:FC<Props> = ({directions}) => {
  return (
    <div className={styles.directions_container}>
      <h4 className={styles.title}>DELIVERY ADRESS</h4>
      <div className={styles.direction_container}>
        {
          directions.map((direction)=>(
            <div className={styles.direction}>
              <div className={styles.map_icon_container}>

                <FiMap/>
              </div>
              <div>
                <p className={styles.direction_label}>{direction}</p>
                <p className={styles.direction_value}>Pune, Maharashtra 411014</p>
              </div>
              {/* ICON */}
              <div className={styles.icon_selected}><div className={styles.icon}></div></div>
            </div>
          ))
        }
      </div>
      <button className={styles.button_add}>
        ADD NEW ADDRESS
      </button>
    </div>
  )
}