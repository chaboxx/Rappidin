import type { NextPage } from 'next'
import { useContext } from 'react';

import { AuthContext } from '../context/auth/AuthContext';

import { FeaturesMain } from '../components/Home/FeaturesMain';
import { PopularMain } from '../components/Home/PopularMain';
import { RestaurantMainCards } from '../components/Home/RestaurantMain';
import { SalesMain } from '../components/Home/SalesMain';
import { SliderCategorysFood } from '../components/Home/SliderCategorysFood';
import { NavigationBar } from '../components/ui/NavigationBar';
import { Layout } from '../layouts/Layout';


const categories = ["Shawarma","Fries","Pasta","Pizza","Rools","Chaat","Chaap","Chicken"];
const restaurants = ["Conrad Chicago Restaurant","Thai Famous Cuisine","The Sakafo Restaurant","Famous Dave's Bar-B-Que","Capital"]
const popular = ["The Sakafo Restaurant","Thai Famous Indian Cuisine","The Sakafo Restaurant","Bite Me Now Sandwiches"]
const mostSales = ["The Sakafo Restaurant","Thai Famous Cuisine","Bite Me Now Sandwiches"]


const Home: NextPage = () => {


  const user = useContext(AuthContext);
  console.log({user});
  return (
    <>
      <Layout title='Rappidin Home Page - Comidas'>
        <h1 style={{fontSize:"90px"}}>{user.email}</h1>
        
        <SliderCategorysFood  categories={categories}/>
        <RestaurantMainCards  restaurants={restaurants}/>
        <FeaturesMain/>
      <h1 style={{fontSize:"90px"}}>{user.email}</h1>
        <PopularMain popular={popular}/>
        <SalesMain mostSales={mostSales}/>
        <NavigationBar/>
      
      </Layout>
    </>
  )
}

export default Home;












