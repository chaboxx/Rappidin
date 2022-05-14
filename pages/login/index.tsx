import type { NextPage } from "next";

import { AiOutlineUser ,AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import styles from "../../styles/LoginScreen.module.css";

const LoginScreen : NextPage = () => {
  return (
    <section className={styles.login_screen_container}>
      <video className={styles.video} autoPlay loop muted>
        <source src="/video_rappidin.mp4"/>
        Tu navegador no soporta video tags
      </video>
      <div className={styles.content_container}>
        <form>
          <div className={styles.input_container}>
            <AiOutlineUser className={styles.icon}/>
            <input className={styles.input} type="text" placeholder="Telf or User"/>
          </div>
            
          <div className={styles.input_container}>
            <AiOutlineLock className={styles.icon}/>
            <input className={styles.input} type="text" placeholder="Password"/>
          </div>
          
          <button className={styles.button} type="submit">Login</button>
        </form>

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

export default LoginScreen;