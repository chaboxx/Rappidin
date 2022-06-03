import { FC } from 'react';

import { AiOutlineStar ,AiFillStar } from 'react-icons/ai';

import { useReviews } from '../../hooks/useReviews';

import { Comentaries } from '../../interfaces/comentaires';


import styles from "../../styles/components/restaurant/RatingsComponent.module.css";

interface Props {
  comentaries : Comentaries[];
}
export const RatingsComponent : FC<Props> = ({comentaries}) => {

  const { calification , distribution , totalRatings } = useReviews(comentaries);

  const barRating = (e:HTMLDivElement | null,distribute : string) =>{

    const paintedPorcentage = distribution[distribute] / totalRatings * 100;

    if ( e ){
      const child = e?.childNodes[0] as HTMLElement;
      
      child.style.width = `${paintedPorcentage}%`
    }

  }
  return (
    <section>
      <h6>Ratings and Reviews</h6>
      <div>
        <div>

          {
            // Math.round(calification)
            [...new Array(5)].map((_,index)=>(
              <div className={ index+1 > Math.round(calification) ? styles.star_empty : styles.star_full }>
                <AiOutlineStar/>
              </div>
            ))
            
          }
        </div>
        <p>{totalRatings}</p>
      </div>
      <p>Rated { calification.toFixed(1) } out of 5</p>

      <div>
        {
          Object.keys(distribution).map((distribute)=>(
            <div>
              <p>{distribute.replace(`_`," ").toLocaleUpperCase()}</p>
              <div className={styles.bar_rating} ref={(e)=>barRating(e,distribute)}>
                <div className={styles.bar_fill_rating}></div>
              </div>
              <p>{ (distribution[distribute] / totalRatings * 100).toFixed(1) } % </p>
            </div>
          ))
        }
      </div>

      <div>
        {
          comentaries.map(comentary=>(
            <div>
              
            </div>
          ))
        }
      </div>
    </section>
  )
}
