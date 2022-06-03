
import { sign } from "jsonwebtoken";

type Data = {
  id : string;
  emailTel : string;
}

export const jwt = ( data : Data ) => {

  const firmaHS256 = sign( data ,process.env.AUTH_MASTER_PASSWORD!,{
    algorithm: "HS256",
  })

  return firmaHS256;

}