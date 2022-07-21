
import { database } from "../database";
import { mainApiConection } from "../utils/axios/axios";



const { apiConnection } = mainApiConection();

interface SignUpUserPayload {
  email : string;
  tel : string;
  password : string
}


interface getCartProps {
  userId : number;

}

export const getCart  = async ( { userId } : getCartProps) => {

  



}

