import type { NextApiRequest, NextApiResponse } from 'next';
import { database } from '../../../database';

interface Response{
  ok : boolean;
  msg : string;
  data? : string[];
}

const getAllRestaurants =  async ( req: NextApiRequest, res: NextApiResponse<Response>) =>{
  if ( req.method ==="GET" ){
    try {
      // await database.query(`CREATE TABLE USERS (
      //   id SERIAL PRIMARY KEY,
      //   email VARCHAR(255) UNIQUE,
      //   name VARCHAR(255),
      //   password VARCHAR(255),
      //   tel VARCHAR(12)
      // )`);

      const resp = await database.query(`select * from restaurants`);
  
      return res.status(200).json({
        ok: true,
        msg : "All the restaurants",
        data: resp.rows,
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg : "Error in the server", 
      })
    }
    
  }else{
    return res.status(500).json({
      ok: false,
      msg : "Error in the server",
    })
  }
}

export default getAllRestaurants;