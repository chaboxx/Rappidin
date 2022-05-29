import { FC, ReactNode, useEffect, useState } from "react";

import { useSession } from "next-auth/react";

import { AuthContext } from "./AuthContext";


import { User } from "../../interfaces/user";



const USER_INITITAL_STATE : User= {
  name : "",
  email : "",
  tel : "",
  isLogged : false,  
}

interface Props {
  children : ReactNode | ReactNode[];
}

export const AuthProvider : FC<Props> = ({children}) => {

  const [user, setUser] = useState<User>(USER_INITITAL_STATE);
  const session = useSession();
  
  useEffect(() => {
    console.log({session});
    setUser(session.data?.user as User)
  }, [])
  


  const loginUser = ( emailTel : string , password : string) =>{
    console.log({emailTel,password});
    return false;
  }

  return (
    <AuthContext.Provider
      value={{
        ...user,
        loginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
