import { FC, ReactNode, useEffect, useState } from "react";

import { useSession } from "next-auth/react";

import { AuthContext } from "./AuthContext";


import { User } from "../../interfaces/user";
import { Cart } from "../../interfaces/cart";
import { Pedido } from "../../interfaces/pedido";
import { mainApiConection } from "../../utils/axios/axios";
// import { AxiosResponse } from "axios";


const USER_INITITAL_STATE : User= {
  id : "",
  name : "",
  email : "",
  tel : "",
  isLogged : false,
  cart: {} as Cart,
  pedidos : [] as Pedido[],  
}

interface Props {
  children : ReactNode | ReactNode[];
}

export const AuthProvider : FC<Props> = ({children}) => {
  
  const [user, setUser] = useState<User>(USER_INITITAL_STATE);
  const session = useSession();
  
  useEffect(() => {
    setUser(session.data?.user as User)
  }, [session])
  


  const loginUser = ( emailTel : string , password : string ) =>{
    console.log({emailTel,password});
    return false;
  }
  
  const signUpUser = async ( email : string, tel : string , password: string ) => {
    //EMAIL ,tel , password
    
    const { apiConnection } = mainApiConection();

    const resp = await apiConnection.post("/register-user",{
      email,
      tel,
      password,
    });

    console.log({resp});

    return resp;


  }




  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser,
        signUpUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
