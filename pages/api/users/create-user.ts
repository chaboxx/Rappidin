// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../../database'

interface Response{
  ok : boolean;
  msg : string;
  data : string[];
}

const createUser =  async ( req: NextApiRequest, res: NextApiResponse<Response>) =>{
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
      const { email , name , password , tel }  = req.body;
  
      await database.query(`INSERT INTO USERS (email,name,password,tel) VALUES ($1,$2,$3,$4)`,[
        email,
        name,
        password,
        tel,
      ]);
      
      const { rows }=await database.query(`SELECT * FROM USERS WHERE email=$1`,[email]);

      return res.status(200).json({
        ok: true,
        msg : "Usuario Creado Correctamente",
        data : rows,
      });
  
    } catch (error) {
      console.log(error);
      
      return res.status(500).json({
        ok: false,
        msg : "Error in the server",
        data : [],

      });
    }

  }else{
    return res.status(500).json({
      ok: false,
      msg : "Error in the server",
      data : [],
    });
  }
}

export default createUser;