import { FC } from "react";

import { FaBus } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { MdNavigateNext } from "react-icons/md";

import { User } from "../../interfaces/user";

import styles from "../../styles/components/profile/InformationProfile.module.css";

interface Props {
  user : User;
}

export const InformationProfile : FC<Props> = ({user}) => {

  return (
    <div className={styles.information_profile_container}>
      <div className={styles.info_box}>
        <div className={styles.info}>
          <h6 className={styles.info_title}>Payment Cards</h6>
          <p className={styles.text}>Add a credit or debit card</p>
        </div>
        <MdNavigateNext className={styles.icon}/>
      </div>

      <div className={styles.info_box}>
        <div className={styles.info}>
          <h6 className={styles.info_title}>Address</h6>
            
          <p className={styles.text}>Add or remove a delivery address</p>
        </div>
        <MdNavigateNext className={styles.icon}/>

      </div>
      <div className={styles.info_box}>
        <div className={styles.info}>
          <h6 className={styles.info_title}>Refer Friends</h6>
          <p className={styles.text}>Get $10.00 FREE</p>
        </div>
        <MdNavigateNext className={styles.icon}/>

      </div>
      <div className={styles.info_box}>
        <div className={styles.info_support}>
          <FaBus className={styles.bus}/>
          <h6 className={styles.info_title}>Delivery Support</h6>
        </div>
        <MdNavigateNext className={styles.icon_red}/>

      </div>
      <div className={styles.info_box}>
        <div className={styles.info_support}>
          <BsTelephone className={styles.phone} />
          <h6 className={styles.info_title}>Delivery Support</h6>
        </div>
        <MdNavigateNext className={styles.icon_red}/>

      </div>
      <div className={styles.info_box}>
        <div className={styles.info_support}>
          <AiOutlineInfoCircle className={styles.info_circle} />
          <h6 className={styles.info_title}>Delivery Support</h6>
        </div>
        <MdNavigateNext className={styles.icon_red} />

      </div>
      <div className={styles.info_box}>
        <div className={styles.info_support}>
          <BiLockAlt className={styles.lock}/>
          <h6 className={styles.info_title}>Delivery Support</h6>
        </div>
        <MdNavigateNext className={styles.icon_red}/>

      </div>
    </div>
  )
}
