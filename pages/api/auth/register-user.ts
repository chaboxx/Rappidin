// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { database } from '../../../database';

interface Response{
  ok : boolean;
  msg : string;
  data? : string[];
}



const filterRequest = ( req: NextApiRequest, res: NextApiResponse<Response> ) =>{

  if ( req.method ==="POST" ){

    return registerUser(req,res);
  }
  
  return res.status(501).json({
    ok: false,
    msg: "Wrong Petition",
  })

}

const registerUser =  async ( req: NextApiRequest, res: NextApiResponse<Response>) =>{
  
  try {

    // await database.query(`CREATE TABLE USERS (
    //   id SERIAL PRIMARY KEY,
    //   email VARCHAR(255) UNIQUE,
    //   name VARCHAR(255),
    //   password VARCHAR(255),
    //   tel VARCHAR(12)
    // )`);
    //FALTA DEVOLVER EL USUARIO CREADO
    const { email , tel , password }  = req.body;

    if ( !email || !password || !tel ){
      return res.status(400).json({
        ok: false,
        msg : "User need email ,password ,tel"
      })
    }

    await database.query( "insert into users ( email , password , tel ) values ($1,$2,$3)",[
      email,
      password,
      tel,
    ]);
    
    const { rows } = await database.query(`select * from users where email=$1`,[email]);

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
    });
  }

  
}

export default filterRequest;