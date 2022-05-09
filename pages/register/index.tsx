import type { NextPage } from "next";

import { RiFlag2Fill } from "react-icons/ri";
import { AiOutlineUser ,AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import styles from "../../styles/RegisterScreen.module.css";

const RegisterScreen : NextPage = () => {
  return (
    <section className={styles.register_screen_container}>
      <div className={styles.content_container}>

      
        <div className={styles.input_container}>
          <AiOutlineUser className={styles.icon} />
          <input className={styles.input}  type="password" placeholder="Name"/>
        
        </div>      

        <div className={styles.input_container}>
          <AiOutlineLock className={styles.icon} />
          <input className={styles.input}  type="text" placeholder="Password"/>
        </div>
        
        <div className={styles.input_container}>
          <RiFlag2Fill className={styles.icon} />
          <input className={styles.input} type="text" placeholder="Phone Number"/>
        </div>

        <button className={styles.button}>Register Me</button>
        <div className={styles.or_container}>
          <p className={styles.or}>OR</p>
        </div>

        <div className={styles.google_container}>
          <FcGoogle className={styles.google_icon}/>
          <p className={styles.google_label}>Google</p>
        </div>
      </div>
    </section>
  )
}

export default RegisterScreen;