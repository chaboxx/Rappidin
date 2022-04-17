
import { FC } from "react";
import Image from "next/image"
import styles from "../../styles/components/Home/FeaturesMain.module.css";

export const FeaturesMain:FC = () => {
  return (
    <div className={styles.features_main_container}>

      <div className={styles.image}>
        <Image src="/../public/feature_1.jpg" width="198px" height="233px"/>
      </div>
      <div className={styles.image}>
        <Image src="/../public/feature_2.jpg" width="198px" height="233px"/>
      </div>
      <div className={styles.image}>
        <Image src="/../public/feature_3.jpg" width="198px" height="233px"/>
      </div>
   
    </div>
  )
}
