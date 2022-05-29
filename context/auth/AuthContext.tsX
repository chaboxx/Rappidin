import { createContext } from "react";

import { User } from "../../interfaces/user";


interface AuthContextProps extends User{
  loginUser : (emailTel : string , password : string ) => boolean;
}


export const AuthContext = createContext({} as AuthContextProps);


