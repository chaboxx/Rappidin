import { signIn } from "next-auth/react";
import { mainApiConection } from "../utils/axios/axios";



interface SignUpUserPayload {
  email : string;
  tel : string;
  password : string
}

const { apiConnection } = mainApiConection();

export const singUpUser  = async ({ email, password,tel } :SignUpUserPayload ) => {

  try {
    const resp = await apiConnection.post("/api/auth/register-user",{
      email,
      tel,
      password,
    });
    return resp.data;
    
  } catch (error) {
    throw new Error("Error. Try Again Please.")
    
  }



}


interface LoginUserPayload {
  emailTel : string;
  password : string;
}

export const loginUser = async({ emailTel,password } : LoginUserPayload ) =>{


  const resp = await signIn("credentials",{ emailTel , password });


  return resp;



}