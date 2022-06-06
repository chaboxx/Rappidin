import { useLayoutEffect, useState } from "react";
import { Comentaries } from "../interfaces/comentaires";



export const useCalification = (comentaries : Comentaries[]) =>{

 
  const [ calification, setCalification ] = useState<number>(0);
  
  useLayoutEffect(() => {
    let calificationAux : number;
    
    let sumCalifications = 0;

    comentaries.map(comentary=>{
      sumCalifications+=comentary.rating;
   
    })
    
    calificationAux = sumCalifications/comentaries.length;
    
    setCalification(calificationAux);

  }, [])
  



  return {
    calification,
  }
}