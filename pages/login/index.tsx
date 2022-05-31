import type { GetServerSideProps, NextPage } from "next";
import { FormEvent, useState } from "react";

import { getSession, signIn } from "next-auth/react";


import { AiOutlineUser ,AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import styles from "../../styles/LoginScreen.module.css";

const LoginScreen : NextPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLoginUser = async ( e : FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    await signIn("credentials",{ email , password });
  }

  return (
    <section className={styles.login_screen_container}>
      <video className={styles.video} autoPlay loop muted>
        <source src="/video_rappidin.mp4"/>
        Tu navegador no soporta video tags
      </video>
      <div className={styles.content_container}>
        <form onSubmit={handleLoginUser}>
          <div className={styles.input_container}>
            <AiOutlineUser className={styles.icon}/>
            <input value={email} onChange={e=>setEmail(e.target.value)} className={styles.input} type="text" placeholder="Telf or User"/>
          </div>
            
          <div className={styles.input_container}>
            <AiOutlineLock className={styles.icon}/>
            <input value={password} onChange={e=>setPassword(e.target.value)}  className={styles.input} type="password" placeholder="Password"/>
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


export const getServerSideProps : GetServerSideProps = async ({req}) =>{
  console.log({req});
  const session = await getSession({req});

  if ( session ){
    return {
      redirect: {
        destination : "/",
        permanent : false,
      }
    }
  }
  return {
    props : {}
  }
}







export default LoginScreen;