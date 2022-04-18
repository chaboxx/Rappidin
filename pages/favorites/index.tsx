import { CardRestaurant } from "../../components/ui/CardRestaurant";
import { CardRestaurantSecondary } from "../../components/ui/CardRestaurantSecondary";
import { NavigationBar } from "../../components/ui/NavigationBar";
import { Layout } from "../../layouts/Layout";

const favorites = ["The Sakafo Restaurant","Thai Famous Cuisine","The Maharashtra Restaurant",
  "Bite Me Sandwiches","The Sakafo Restaurant","Bite Me Sandwiches","The Sakafo Restaurant","Bite Me Sandwiches"
]

const FavoritesScreen = () => {
  return (
    <Layout title="Favorites" description="Favorites Rappidin">

      <h5 style={{
        display:"grid",
        paddingLeft:"15px",
        fontSize:"17px",
        fontWeight:"700",
        paddingBottom:"10px"
      }}>Favorites</h5>

      <section style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        width:"100%",
        padding:"0 15px",
        gap:"17px 8px",
        marginBottom:"100px"
      }}>
        {
          favorites.map((restaurant,index)=>(
            <CardRestaurantSecondary restaurant={restaurant} key={index}/>
          ))

        }
      </section> 

      <NavigationBar/>
    </Layout>
  )
}

export default FavoritesScreen;