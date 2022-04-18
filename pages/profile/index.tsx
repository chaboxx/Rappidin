import { InformationProfile } from "../../components/profile/InformationProfile";
import { ProfileCard } from "../../components/profile/ProfileCard";

import { NavigationBar } from "../../components/ui/NavigationBar";
import { Layout } from "../../layouts/Layout";


const ProfileScreen = () => {
  return (
    <>
      <Layout title="Perfil" description="Perfil Rappidin">

        
        <div style={{width:"100%",height:"100vh",backgroundColor:"#f8f9fa"}}>

          <ProfileCard/>
          <InformationProfile />
        </div>
        <NavigationBar/>
      </Layout>
    </>
  )
}

export default ProfileScreen;