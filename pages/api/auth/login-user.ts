import { NextApiRequest , NextApiResponse } from "next";
import { database } from '../../../database';
import { jwt } from "../../../helpers/jwt/jwt";


interface Response{
  ok : boolean;
  msg : string;
  token? : string;
}


const filterRequest = ( req: NextApiRequest, res: NextApiResponse<Response> ) =>{

  if ( req.method ==="POST" ){

    return loginUser(req,res);
  }
  
  return res.status(501).json({
    ok: false,
    msg: "Wrong Petition",
  })

}

const loginUser = async ( req: NextApiRequest, res: NextApiResponse<Response> ) =>{

  try {

    const { email , tel , password } = req.body;

    const data = await database.query(`select id , password from users where email=$1 or tel=$2`,[email,tel]);
    console.log({data});
    if ( data.rowCount !== 1 ){
      return res.status(400).json({
        ok : false,
        msg : "User doenst exits",
      })
    }

    const { id , password : userPassword } = data.rows[0];

    if ( userPassword !== password ){
      return res.status(400).json({
        ok : false,
        msg : "Wrong password try again please",
      })
    }

    const token = jwt({
      id : id,
      emailTel:email,
    });

    return res.status(200).json({
      ok : true,
      msg : "Logged",
      token,
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg : "Error in the server",
    })
  }
}

export default filterRequest;