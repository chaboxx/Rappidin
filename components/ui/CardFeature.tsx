import React, { FC } from 'react'

interface Props{
  title: string;
  subtitle: string;
}

import styles from "../../styles/components/ui/CardFeature.module.css";


export const CardFeature:FC<Props> = ({title,subtitle}) => {
  return (
    <div className={styles.card_feature_container}>
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  )
}
