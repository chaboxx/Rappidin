import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../components/ui/Navbar';


interface Props {
  children : JSX.Element | JSX.Element[];
  title?: string;
  description? : string;
}
  

export const Layout : FC<Props> = ({ children ,title,description}) => {
  return (
    <>
      <Head>
        
        <title> {title || "Rappidin"} </title>
        <meta name='author' content="@chaboxxsama" />
        <meta name='description' content={description || "Rappidin Comidas Online"} />
         
      </Head>

      <Navbar />

      <main style={{marginTop:"100px"}}>
        { children }
      </main>
    </>
  )
}
