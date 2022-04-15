import { CardFeature } from "../ui/CardFeature"

import styles from "../../styles/components/Home/FeaturesMain.module.css";

export const FeaturesMain = () => {
  return (
    <div className={styles.features_main_container}>

      <CardFeature title="the best offers" subtitle="at the best restaurants"/>
      <CardFeature title="the best offers" subtitle="at the best restaurants"/>
      <CardFeature title="the best offers" subtitle="at the best restaurants"/>
      

    </div>
  )
}
