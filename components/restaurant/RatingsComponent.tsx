import Image from 'next/image';
import { FC } from 'react';

import { AiOutlineStar ,AiFillStar, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

import { useReviews } from '../../hooks/useReviews';

import { Comentaries } from '../../interfaces/comentaires';


import styles from "../../styles/components/restaurant/RatingsComponent.module.css";

interface Props {
  comentaries : Comentaries[];
}

export const RatingsComponent : FC<Props> = ({comentaries}) => {

  const { calification , distribution, totalRatings } = useReviews(comentaries);

  return (
    <section className={styles.ratings_component_container}>
      <h6 className={styles.ratings_component_title}>Ratings and Reviews</h6>
      <div className={styles.starts_container}>
        <div className={styles.starts_icons_list}>

          {
            // Math.round(calification)
            [...new Array(5)].map((_,index)=>(
              <div className={ index+1 > Math.round(calification) ? styles.star_empty : styles.star_full }>
                <AiOutlineStar/>
              </div>
            ))
            
          }
        </div>
        <p className={styles.total_starts_label}>{totalRatings}</p>
      </div>
      <p className={styles.total_rated_container}>Rated { calification.toFixed(1) } out of 5</p>

      <div className={styles.starts_description_container}>
        {
          Object.keys(distribution).map((distribute)=>(
            <div className={styles.start_description_item_container}>
              <p className={styles.star_description_label}>{distribute.replace(`_`," ").toLocaleUpperCase()}</p>
              <progress className={styles.pogress_bar} value={((distribution as any)[distribute] / totalRatings * 100)} max="100"></progress>
              <p className={styles.star_description_value}>{ ((distribution as any)[distribute] / totalRatings * 100).toFixed(1) } % </p>
            </div>
          ))
        }
        <button className={styles.button_rate}>Rate and Review</button>
      </div>

      <div className={styles.comments_container}>
        <div className={styles.label_comments_container}>
          <h6 className={styles.comments_title}>All Ratings and Reviews</h6>
          <p className={styles.comments_info_title}>Top Rated</p>
        </div>
        {
          comentaries.map(comentary=>(
            <div className={styles.comentary_container}>
              <div className={styles.image_container}>
                <Image src={"/user1.jpg"} width="40px" height="40px"/>
              </div>
              <div className={styles.comentary_info_container}>
                <div className={styles.comentary_title_container}>
                  <div className={styles.name_date_container}>
                    <h6>{comentary.name}</h6>
                    <p>{comentary.date}</p>
                  </div>
                  <div className={styles.stars_container}>
                    {
                      // Math.round(calification)
                        [...new Array(5)].map((_,index)=>(
                          <div className={ index+1 > Math.round(comentary.rating) ? styles.star_empty : styles.star_full }>
                            <AiOutlineStar/>
                          </div>
                        ))
                      
                    }
                  </div>
                </div>

                <div className={styles.comentary_message_container}>
                  <p>{comentary.comentary}</p>
                </div>

                <div className={styles.comentary_button_container}>
                  <div className={styles.comentary_likes_container}>
                    <AiOutlineLike/>
                    <p>{comentary.likes}</p>
                  </div>
                  <div className={styles.comentary_likes_container}>
                    <AiOutlineDislike/>
                    <p>{comentary.likes}</p>
                  </div>
                </div>
              </div>

            </div>
          ))
        }
        <div className={styles.see_all_container}>
          <p>See All Reviews</p>
        </div>
      </div>
    </section>
  )
}
