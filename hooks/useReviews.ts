import { useLayoutEffect, useState } from "react";
import { Comentaries } from "../interfaces/comentaires";



interface Distribution {
  "5_starts" : number;
  "4_starts" : number;
  "3_starts" : number;
  "2_starts" : number;
  "1_starts" : number;
}

export const useReviews = (comentaries : Comentaries[]) =>{

  const [ totalRatings ] = useState<number>(comentaries.length);
  const [ calification, setCalification ] = useState<number>(0);
  const [ distribution, setDistribution ] = useState<Distribution>({} as Distribution);
  
  useLayoutEffect(() => {
    let calificationAux : number;
    let distributionAux : Distribution = {
      "5_starts" : 0,
      "4_starts" : 0,
      "3_starts" : 0,
      "2_starts" : 0,
      "1_starts" : 0,
    };
    
    let sumCalifications = 0;

    comentaries.map(comentary=>{
      sumCalifications+=comentary.rating;
      
      if ( comentary.rating >= 4.5 ){
        distributionAux["5_starts"] +=1;
      }else if ( comentary.rating >= 3.5 ){
        distributionAux["4_starts"] +=1;
      }else if ( comentary.rating >= 2.5 ){
        distributionAux["3_starts"] +=1;
      }else if ( comentary.rating >= 1.5 ){
        distributionAux["2_starts"] +=1;
      }else{
        distributionAux["1_starts"] +=1;
      }
    })
    
    calificationAux = sumCalifications/comentaries.length;
    
    setCalification(calificationAux);
    setDistribution(distributionAux);

  }, [])
  



  return {
    totalRatings,
    calification,
    distribution,
  }
}