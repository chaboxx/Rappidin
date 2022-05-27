import { NextApiRequest } from "next";
import { NextFetchEvent, NextResponse } from "next/server";



export const middleware = ( req : NextApiRequest , ev : NextFetchEvent ) => {

  
  console.log({req});
  const { email , tel , password } = req.body;



  return NextResponse.next();

}