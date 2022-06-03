
import { database } from "../../database";


export const checkUserCredentials = async( email:string , password:string )=>{
  
  const data = await database.query(`select id,name,password,tel from users where email=$1`,[email]);

  const { id , password : userPassword , name , tel} = data.rows[0];
  
  if ( password !== userPassword ){
    return null;
  }

  return {
    id,
    email,
    name,
    tel,
  }

}

export const checkUserOAuthCredentials = async( email:string,name:string) =>{
  
  const data = await database.query(`select id,name,password,tel from users where email=$1`,[email]);

  if ( data.rowCount === 1 ){
    const { id , tel } = data.rows[0];
    return {
      id,
      email,
      name,
      tel,
    } 
  }
  
  
  await database.query(`insert into users (name, email , password ,tel ,rol) values ($1,$2,$3,$4,$5)`,[
    name,
    email,
    ";;",
    "45646465",
    "Client"
  ])
  const newUser = await database.query(`select id ,tel from users where email = $1`,[email])
    
  console.log({newUser});

  const { id, tel } = newUser.rows[0];

  return {
    id,
    email,
    name,
    tel,
  } 

}