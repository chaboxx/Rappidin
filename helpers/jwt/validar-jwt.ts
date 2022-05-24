
import { verify } from "jsonwebtoken";

export const validarJwt = ( token : string ) => {
  return new Promise((resolve,reject)=>{
    verify(token,process.env.AUTH_MASTER_PASSWORD!,(error,payload)=>{
      if( error ){
        reject("Invalid Token");
      }
      resolve(payload);
    })
  })
}