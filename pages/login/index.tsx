import type { GetServerSideProps, NextPage } from "next";

import { FormEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/router";

import { getSession, signIn } from "next-auth/react";

import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/slices/AuthSlices";

import { AiOutlineUser ,AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";



import styles from "../../styles/LoginScreen.module.css";

const LoginScreen : NextPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const dispatch = useDispatch();

  const { login  } = useSelector((store : any)=>store.authProvider);
  const { error , isLoading } = login;

  const handleLoginUser = async ( e : FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const resp = await (dispatch as any)(loginUserThunk({emailTel:email,password}));
    console.log({resp});
    if ( !resp.payload.ok ){
      return;
    }
    //BOTAR ERROR PARA QUE ERROR SEA REJECTED Y SE MUESTRE EN EL ESTADO //
    //(2) O TODO CON ESTADOS DEVUELTOS Y SET STATE Y MOSTRANDO ERRORES NORMALES

    router.push("/");
  }

  const singUpGitHub = async ( e : MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    await signIn("github");

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
          {
            !error ? null : <p className={styles.error_message}>{error}</p>
          }
          <button disabled={isLoading} style={{ opacity : isLoading ? "0.8" : "" }} className={styles.button} type="submit">Login</button>
        </form>

        <div className={styles.or_container}>
          <p className={styles.or}>OR</p>
        </div>

        <div onClick={singUpGitHub} className={styles.google_container}>
          <FcGoogle className={styles.google_icon}/>
          <p className={styles.google_label}>Google</p>
        </div>
      </div>
      
    </section>
  )
}


export const getServerSideProps : GetServerSideProps = async ({req}) =>{
  
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