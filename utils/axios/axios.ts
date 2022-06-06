import axios from "axios";


const apiConnection = axios.create({
  baseURL : process.env.BASE_SERVER_URL,
  headers : {
    "Content-Type" : "application/json",
  }
})

export const mainApiConection =  ( ) =>{

  
  return {
    apiConnection,
  }

}