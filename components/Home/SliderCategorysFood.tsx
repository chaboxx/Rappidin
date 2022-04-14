
import Image from "next/image";
import { FC } from "react";

import styles from "../../styles/components/Home/SliderCategorysFood.module.css";

interface Props{
  categories: string[];
}


export const SliderCategorysFood : FC<Props> = ({categories}) => {
  
  
  
  return (
    <div className={styles.slider_container}>
      <div className={styles.slider_track}>

        {
          categories.map((categorie,index)=>(
            <div className={styles.category_box} key={index}>
              <div className={styles.image}>
                <Image width="100%" height="100%" src="https://askbootstrap.com/preview/swiggi/template2/img/icons/9.png"/>
              </div>
              <p>{categorie}</p>
            </div>
          ))
        }

        {
          categories.map((categorie,index)=>(
            <div className={styles.category_box} key={index}>
              <div className={styles.image} >
                <Image width="100%" height="100%" src="https://askbootstrap.com/preview/swiggi/template2/img/icons/9.png"/>
              </div>
              <p>{categorie}</p>
            </div>
          ))
        }

      </div>
    </div>
  )
}


