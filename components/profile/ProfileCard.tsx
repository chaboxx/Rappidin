import { FC, useMemo } from 'react'
import Image from 'next/image'
import { BsCheck2Circle } from "react-icons/bs";

import { User } from '../../interfaces/user';

import styles from "../../styles/components/profile/ProfileCard.module.css";

interface Props{
  user : User;
}
export const ProfileCard:FC<Props> = ({ user : currentUser}) => {

  const user  = useMemo(() => currentUser , [currentUser]);

  return (
    <div className={styles.profile_card_container}>
      <div className={styles.profile_info}>
        <Image className={styles.image} src="/../public/user1.jpg" width="60px" height="60px"/>
        <div className={styles.profile_description}>
          <div className={styles.name}>
            <p className={styles.name_text}>{user.name}</p>
            <BsCheck2Circle className={styles.icon}/>
          </div>
          <p className={styles.email}>{user.email}</p>
        </div>
      </div>

      <div className={styles.credit_container}>
        <p className={styles.amount_text}>Accounts Credits</p>
        <p className={styles.amount}>$52.25</p>
      </div>
    </div>
  )
}
