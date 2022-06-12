import { GetServerSideProps, NextPage ,GetStaticPaths} from 'next';

import { Layout } from '../../layouts/Layout';

import { RatingsComponent } from '../../components/restaurant/RatingsComponent';
import { MenuList } from '../../components/restaurant/MenuList';

import { AiOutlineStar } from "react-icons/ai";


import styles from "../../styles/restaurant/RestaurantScreen.module.css";
import { ProceedCartComponent } from '../../components/restaurant/ProceedCartComponent';
import { Cart } from '../../interfaces/cart';

import { useCalification } from '../../hooks/useCalification';
import { database } from '../../database';


const menus = [
  {
    categoria: "Brasas",
    nombre : "Pollo a la brasa",
    precio : 98,
    descripcion : "Pollo con papas fritas, ensalada clásica, salsas, gaseosa 1.5l, 4 porciones de torta."
  },
  {
    categoria: "sd",
    nombre : "Pollo a la bbq",
    precio : 128,
    descripcion : "Pollo con papas fritas, ensalada clásica, salsas, gaseosa 1.5l, 4 porciones de torta."
  },
  {
    categoria: "sd",
    nombre : "1/4 Pollo a la brasa",
    precio : 108,
    descripcion : "Pollo con papas fritas, ensalada clásica, salsas, gaseosa 1.5l, 4 porciones de torta."
  },
  {
    categoria: "Picantes",
    nombre : "1/4 Pollo a la brasa",
    precio : 380,
    descripcion : "Pollo con papas fritas, ensalada clásica, salsas, gaseosa 1.5l, 4 porciones de torta."
  },
  {
    categoria: "Brasas",
    nombre : "1/4 Pollo a la brasa",
    precio : 778,
    descripcion : "Pollo con papas fritas, ensalada clásica, salsas, gaseosa 1.5l, 4 porciones de torta."
  },

]
const comentaries = [
  {
    name : "RODRIGO CUEVA.",
    date : "Tue,20 Mar 2022",
    comentary : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.",
    rating : 4.8,
    likes : 856,
    dislikes : 158,
  },
  {
    name : "RODRIGO CUEVA.",
    date : "Tue,20 Mar 2022",
    comentary : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.",
    rating : 4.2,
    likes : 856,
    dislikes : 1358,
  },
  {
    name : "RODRIGO CUEVA.",
    date : "Tue,20 Mar 2022",
    comentary : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.",
    rating : 1.8,
    likes : 2856,
    dislikes : 158,
  },
  {
    name : "RODRIGO CUEVA.",
    date : "Tue,20 Mar 2022",
    comentary : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.",
    rating : 2.8,
    likes : 256,
    dislikes : 158,
  }
]


const cart : Cart = {
  id : "chaboxx159@gmail.com",
  productos: [
    {
      categoria : "Brasas",
      nombre: "Pollo a la brasa",
      descripcion : "Pollo riquisimo de ga :v",
      precio : 95,
    },
    {
      categoria : "Brasas",
      nombre: "Pollo a la brasa",
      descripcion : "Pollo riquisimo de ga :v",
      precio : 95,
    },
    {
      categoria : "Brasas",
      nombre: "Pollo a la brasa",
      descripcion : "Pollo riquisimo de ga :v",
      precio : 95,
    },
    {
      categoria : "Brasas",
      nombre: "Pollo a la brasa",
      descripcion : "Pollo riquisimo de ga :v",
      precio : 95,
    }
  ]
}

interface Props {
  rows : any;
}
const RestaurantScreen : NextPage<Props> = ({rows}) => {
  
  const { calification } = useCalification(comentaries);
  console.log({rows});
  return (
    <>
      <Layout title="Restaurante" description="Restaurante Detalles-Descripcion">
        <div className={styles.restaurant_screen_module}>
          <h4 className={styles.restaurant_title}>
            Conrad Chicago <br/>Restaurant
          </h4>
          <p className={styles.restaurant_subtitle}>963 Madyson Drive Suite 679</p>
          <div className={styles.restaurant_calification}>
            <div className={styles.restaurant_stars}>
              {
                // Math.round(calification)
                [...new Array(5)].map((_,index)=>(
                  <div className={ index+1 > Math.round(calification) ? styles.star_empty : styles.star_full }>
                    <AiOutlineStar/>
                  </div>
                ))
              
              }
            </div>
            <p className={styles.reviews_count}>(245 Reviews)</p>

          </div>
          <div className={styles.restaurant_delivery_information}>
            <div className={styles.restaurant_delivery}>
              <p className={styles.delivery}>Delivery</p>
              <p className={styles.info_price}>FREE</p>
            </div>
            <div className={styles.open_time_container}>
              <p className={styles.open}>Open time</p>
              <p className={styles.time}>8:00 AM</p>
            </div>
          </div>
        </div>
        <MenuList menus={menus}/>
        <RatingsComponent comentaries={comentaries} calification={calification}/>
        <ProceedCartComponent cart={cart}/>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { rows } = await database.query(`select * from users`);
  
  return {
    props: {
      rows,
    }
  }
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const resp = await  database.query(`select * from restaurants`);

  const { rows } = resp;
  

  return {
    paths: [
      {
        params: {
          
        }
      }
    ],
    fallback: "blocking"
  }
}


export default RestaurantScreen;