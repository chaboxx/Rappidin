import type { NextPage } from 'next'
import { RestaurantMainCards } from '../components/Home/RestaurantMain';
import { SliderCategorysFood } from '../components/Home/SliderCategorysFood';
import { Layout } from '../layouts/Layout';


const categories = ["Shawarma","Fries","Pasta","Pizza","Rools","Chaat","Chaap","Chicken"];
const restaurants = ["Conrad Chicago Restaurant","Thai Famous Cuisine","The Sakafo Restaurant","Famous Dave's Bar-B-Que","Capital"]

const Home: NextPage = () => {
  return (
    <>
      <Layout title='Rappidin Home Page - Comidas'>

        <SliderCategorysFood  categories={categories}/>
        <RestaurantMainCards  restaurants={restaurants}/>
       
      </Layout>
    </>
  )
}

export default Home;












