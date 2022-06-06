import { createContext } from "react";

import { User } from "../../interfaces/user";


interface AuthContextProps{
  user : User,
  loginUser : (emailTel : string , password : string ) => boolean;
  signUpUser : ( email : string ,tel : string,password: string ) => any;
}


export const AuthContext = createContext({} as AuthContextProps);


