// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../../database'

interface Response{
  ok : boolean;
  msg : string;
  data : string[];
}

const getUser =  async ( req: NextApiRequest, res: NextApiResponse<Response>) =>{

  if ( req.method === "GET"){
    try {
     
      
  
      const { id }  = req.query;
  
      const resp = await database.query(`SELECT * FROM USERS WHERE id = $1`,[id]);
      
  
      return res.status(200).json({
        ok: true,
        msg : "Usuario Encontrado",
        data : resp.rows,
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

export default getUser;