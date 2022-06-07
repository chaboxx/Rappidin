import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { SessionProvider } from "next-auth/react";
import { AuthProvider } from '../context/auth/AuthProvider';

import { Provider } from 'react-redux';
import { store } from '../store/store';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>

      <SessionProvider>
        <AuthProvider>

          <Component {...pageProps} />
        </AuthProvider>
      </SessionProvider>
    </Provider>
    
  )
}

export default MyApp
