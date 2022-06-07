import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { SessionProvider } from "next-auth/react";

import { Provider } from 'react-redux';
import { store } from '../store/store';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>

      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
    
  )
}

export default MyApp
