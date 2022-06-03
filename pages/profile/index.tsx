import { GetServerSideProps, NextPage } from 'next'

import { getSession } from "next-auth/react";

import { ProfileCard } from "../../components/profile/ProfileCard";
import { InformationProfile } from "../../components/profile/InformationProfile";
import { NavigationBar } from "../../components/ui/NavigationBar";
import { Layout } from "../../layouts/Layout";

interface Props {
  session : any;
}
const ProfileScreen :NextPage<Props> = ({session}) => {
  //PUEDE QUE NO

  return (
    <>
      <Layout title="Perfil" description="Perfil Rappidin">

        
        <div style={{width:"100%",height:"100vh",backgroundColor:"#f8f9fa"}}>

          <ProfileCard user={session.user}/>
          <InformationProfile user={session.user}/>
        </div>
        <NavigationBar/>
      </Layout>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({req}) => {

  const session = await getSession({req});

  if ( !session ){
    return {
      redirect: {
        destination : "/login",
        permanent : false,
      }
    }
  }
  return {
    props : {
      session,
    }
  }
}

export default ProfileScreen;