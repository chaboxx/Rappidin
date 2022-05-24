// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../../database'
import { jwt } from '../../../helpers/jwt/jwt';
import { validarJwt } from '../../../helpers/jwt/validar-jwt';

interface Response{
  ok : boolean;
  msg : string;
  token? : string;
  data? : string;
}



const loginUser =  async ( req: NextApiRequest, res: NextApiResponse<Response>) =>{
  if ( req.method === "POST" ){
    try {
      // await database.query(`CREATE TABLE USERS (
      //   id SERIAL PRIMARY KEY,
      //   email VARCHAR(255) UNIQUE,
      //   name VARCHAR(255),
      //   password VARCHAR(255),
      //   tel VARCHAR(12)
      // )`);
      //FALTA DEVOLVER EL USUARIO CREADO
      const { emailTel , password }  = req.body;
      

      const { rows } = await database.query(`SELECT id , password FROM USERS WHERE email=$1 OR tel=$2`,[emailTel,emailTel]);
      
      const userPassword = rows[0].password;
      const userId = rows[0].id;
      
      if( password!==userPassword ){
        return res.status(401).json({
          ok: false,
          msg: "Error in the authentication"
        })
      }
   
      const token = jwt({
        id:userId,
        emailTel 
      });

      return res.status(200).json({
        ok: true,
        msg : "User logged correctly",
        token,
      });
  
    }catch (error) {
      
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg : "Error in the server",
      });
    }

  }else{
    return res.status(500).json({
      ok: false,
      msg : "Error in the server",
    });
  }
}

export default loginUser;