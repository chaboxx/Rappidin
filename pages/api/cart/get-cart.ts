
import { NextApiRequest , NextApiResponse } from "next";
import { database } from '../../../database';
import { User } from "../../../interfaces/user";
import { jwt } from "../../../utils/jwt/jwt";
  
  
interface Response{
  ok : boolean;
  msg : string;
  user? : any;
  cart? : any;
}
  
  
const filterValidateMiddlewareRequest = ( req: NextApiRequest, res: NextApiResponse<Response> ) =>{
  try {
    if ( req.method !=="GET" ){
      throw new Error("Wrong Petition")

    }
    
    return getCart(req,res);

  } catch (error) {
    console.log(error);
    return res.status(501).json({
      ok: false,
      msg: "Wrong Petition",
    })
  }
  

}

const getCart = async ( req: NextApiRequest, res: NextApiResponse<Response> ) =>{
  try {
    const { userId = "" , currentCartId = null} = req.body;
      
    if ( !userId ){
      const { rows : rowsCart } = await database.query(`insert into carts ( total_price ) values ( $1 ) returning *`,[0],);

      return res.status(200).json({
        ok : true,
        msg : "Get cart success!",
        cart : rowsCart[0],
      })

    }else{
      
      const { rows ,rowCount : rowsCountUser } = await database.query(`select * from users where id=$1`, [userId])
    
      if ( rowsCountUser === 0 ){
        return res.status(400).json({
          ok : false,
          msg : "User doesnt exits",
        })
      }

      const { cart : cartId } = rows[0];

      if ( !cartId ){
        const { rows : rowsCart } = await database.query(`insert into carts ( total_price ) values ( $1 ) returning *`,[0],);
      
        const { idCart } = rowsCart[0];
        
        
        const { rows : rowsUser } = await database.query(`update users set cart = $1 where id = $2 returning *`,[ idCart ,userId ]);
      
        return res.status(200).json({
          ok : true,
          msg : "Get cart success!",
          user : rowsUser[0],
          cart : rowsCart[0],
        })
        
      }
      
      const { rows : rowsCart , rowCount : rowsCountCart } = await database.query(`select * from carts where id = $1`,[currentCartId]);
      
      if ( rowsCountCart === 0 ){
        return res.status(400).json({
          ok : false,
          msg : "Cart doesnt exits",
        })
      }

      const cart = rowsCart[0];
      console.log({cart})
      if ( !cart.menus_picked || cart.menus_picked.length === 0 ){
        
        return res.status(200).json({
          ok : true,
          msg : "Get cart success!",
          user : rows[0],
          cart : rowsCart[0],
        })
      }else{
        const { rows } = await database.query(`update users set cart = $1 where id = $2 returning *`,[cart.id,userId]);
        
        return res.status(200).json({
          ok : true,
          msg : "Get cart success!",
          user : rows[0],
          cart : rowsCart[0],
        })
        

      }
      
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok : true,
      msg : "Server Error",
    })
  }
    
}

export default filterValidateMiddlewareRequest;