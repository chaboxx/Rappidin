import { NextApiRequest , NextApiResponse } from "next";
import { database } from '../../../database';
import { jwt } from "../../../utils/jwt/jwt";


interface Response{
  ok : boolean;
  msg : string;
  token? : string;
}


const filterValidateMiddlewareRequest = ( req: NextApiRequest, res: NextApiResponse<Response> ) =>{
  try {
    if ( req.method ==="POST" ){
  
      const { emailTel , password } = req.body;
      
      if ( !emailTel ){
        return res.status(400).json({
          ok : false,
          msg : "Email or tel is needed",
        })
      }
  
      if ( !password ){
        return res.status(400).json({
          ok : false,
          msg : "Password is needed",
        })
      }
      //MIDDELWARE
  
      return loginUser(req,res);
    }
    
    throw new Error("Wrong Petition")
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      ok: false,
      msg: "Wrong Petition",
    })
  }
  

}

const loginUser = async ( req: NextApiRequest, res: NextApiResponse<Response> ) =>{

  try {
    // TODO: REQUIERE VALIDACION DE DATOS QUE VIENEN EMAIL DEBE SER EMAIL , TEL DEBE SER TEL... 
    //

    const { emailTel , password } = req.body;

    
    

    const data = await database.query(`select id , password from users where email=$1 or tel=$2`,[emailTel,emailTel]);
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
      emailTel:emailTel,
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

export default filterValidateMiddlewareRequest;