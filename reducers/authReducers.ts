import { signIn } from "next-auth/react";
import { mainApiConection } from "../utils/axios/axios";



interface SignUpUserPayload {
  email : string;
  tel : string;
  password : string
}

const { apiConnection } = mainApiConection();

export const singUpUser  = async ({ email, password,tel } :SignUpUserPayload ) => {

  const resp = await apiConnection.post("/api/auth/register-user",{
    email,
    tel,
    password,
  });
  
  return resp.data;

}


interface LoginUserPayload {
  emailTel : string;
  password : string;
}

export const loginUser = async({ emailTel,password } : LoginUserPayload ) =>{

  
  const resp = await signIn("credentials",{ redirect:false, email:emailTel , password });
  
  return resp;
    
  
  
  
}