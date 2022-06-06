import type { NextPage } from "next";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import { useForm } from "react-hook-form";

import axios from "axios";

import { RiFlag2Fill } from "react-icons/ri";
import { AiOutlineUser ,AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";


import styles from "../../styles/RegisterScreen.module.css";

 
const RegisterScreen : NextPage = () => {

  const { handleSubmit, register, formState: { errors } } = useForm();

  const router = useRouter();

  const handleRegisterUser = async ( values : any ) =>{
    console.log({values});
    const resp  = await axios.post("/api/auth/register-user",{
      ...values,
      tel : values.phoneNumber,
    },{
      headers: {
        "Content-Type" : "application/json",   
      }
    });

    if ( resp.data.ok ){
      signIn("credentials",{ email : resp.data.data.email , password : resp.data.data.password   })
      router.push("/")
      return;
    }
    
    alert("Error en el registro");

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

        <button className={styles.button}>Register Me</button>
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