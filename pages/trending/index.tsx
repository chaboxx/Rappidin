
import { CardRestaurantSecondary } from "../../components/ui/CardRestaurantSecondary";
import { NavigationBar } from "../../components/ui/NavigationBar";
import { Layout } from "../../layouts/Layout";


const trending = ["The Sakafo Restaurant","Conrad Chicago Restaurant","Bayfront Catering Restaurant"]
const TrendingPage = () => {
  return (
    <Layout title="Trending" description="Trending Page Rappidin">
      <h4 style={{
        marginLeft:"15px",
        fontSize:"15px",
        marginBottom:"10px",
        paddingTop:"5px",
        fontWeight:"700"
      }}>Most Popular 20 places</h4>
      <section style={{
        display:"grid",
        width:"95%",
        margin:"0 auto",
        gap:"15px",
        marginBottom:"100px"
      }}>
      {
        trending.map((restaurant,index)=>(
          <CardRestaurantSecondary key={index} restaurant={restaurant}/>
          ))
      }
      </section>  
      <NavigationBar/>
    </Layout>
  )
}

export default TrendingPage;