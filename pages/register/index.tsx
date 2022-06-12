import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";

import { RiFlag2Fill } from "react-icons/ri";
import { AiOutlineUser ,AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";


import styles from "../../styles/RegisterScreen.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk, singUpUserThunk } from "../../store/slices/AuthSlices";
import { signIn } from "next-auth/react";
import { loginUser } from "../../reducers/authReducers";
import { combineReducers } from "redux";
import { useEffect } from "react";

 
const RegisterScreen : NextPage = () => {

  const { handleSubmit, register, formState: { errors } } = useForm();
  // const { singUpUserThunk } = useSelector((store : any)=>store.auth)
  const router = useRouter();
  const dispatch = useDispatch();
  //USE STATE CON DESTRUCTURACION DE LSO ERROES DE SIGNUP Y YA :)
  const { signUp ,login } = useSelector((store:any)=>store.authProvider);
  const { error , isLoading } = signUp;
  // const { error , isLoading } = login;
  console.log({error,isLoading});

  // useEffect(() => {

  // }, [error]);
  
  // useEffect(() => {
    
  // }, [isLoading]);

  const handleRegisterUser = async ( values : any ) =>{
    
    const { email ,phoneNumber ,password } = values;
 
    const respSignUp = await (dispatch as any)(singUpUserThunk({
      email,
      password,
      tel : phoneNumber,
    }));

    
    if ( !respSignUp.payload ){
      return;
    }

    const respLoginUp = await (dispatch as any)(loginUserThunk({emailTel: email,password}))

    if ( !respLoginUp.payload ){
      return;
    }

    router.push("/");

    
  }
      



  return (
    <section className={styles.register_screen_container}>
      <video className={styles.video_background} loop muted autoPlay>
        <source src="/video_rappidin.mp4"/>
        Your browser doesn't suport video tags.
      </video>
      <form
        onSubmit={handleSubmit(handleRegisterUser)}
        className={styles.content_container}
        noValidate
      >
        <div className={styles.input_container}>
          <AiOutlineUser className={styles.icon} />
          <input 
            className={styles.input}  
            type="email" 
            placeholder="Email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              },
            
            })}
          />
          <span className={[styles.error_message, errors.email ? styles.show : styles.hide ].join(" ")}>

            {errors.email && errors.email.message}
          </span>
        </div>      

        <div className={styles.input_container}>
          <AiOutlineLock className={styles.icon} />
          <input 
            className={styles.input}  
            type="password" 
            placeholder="Password"
            {...register("password", {
              required: "Required",
              // pattern: {
              //   // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              //   message: "Invalid password",
              
              // },
              minLength: {
                value: 6,
                message : "The password must have at least 6 characters"
              },
              maxLength: {
                value: 64,
                message : "The max length of the password is 64 characters"
              },
            })}
          />
          <span className={[styles.error_message, errors.password ? styles.show : styles.hide ].join(" ")}>

            {errors.password && errors.password.message}
          </span>
        </div>
        
        <div className={styles.input_container}>
          <RiFlag2Fill className={styles.icon} />
          <input 
            className={styles.input} 
            type="text" 
            placeholder="Phone Number"
            {...register("phoneNumber", {
              required: "Required",
              // pattern: {
              //   // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              //   message: "Invalid password",
              
              // },
              minLength: {
                value: 9,
                message : "The password must have 9 characters"
              },
              maxLength: {
                value: 9,
                message : "The password must have 9 characters"
              },
            
            })}
          />
          <span className={[styles.error_message, errors.phoneNumber ? styles.show : styles.hide ].join(" ")}>

            {errors.phoneNumber && errors.phoneNumber.message}
          </span>
        </div>
        
        {
          !error ? null : <p className={styles.error_message} style={{marginBottom:"7px"}}>{error}</p>
        } 
        <button disabled={isLoading} style={{ opacity: isLoading ? "0.7" : "1" }} type="submit" className={styles.button}>Register Me</button>
        <div className={styles.or_container}>
          <p className={styles.or}>OR</p>
        </div>

        <div className={styles.google_container}>
          <FcGoogle className={styles.google_icon}/>
          <p className={styles.google_label}>Google</p>
        </div>
      </form>
    </section>
  )
}

export default RegisterScreen;