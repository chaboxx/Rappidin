import NextAuth from "next-auth";

import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { checkUserCredentials, checkUserOAuthCredentials } from "../../../database/dbUsers";


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Credentials({
      name : "Custom Login",
      credentials : {
        email : {
          label: "Email",
          type : "email",
          placeholder : "Email..."
        },
        password : {
          label : "Password",
          type : "password",
          placeholder : "Password..."
        }
      },
      async authorize(credentials){

        return await checkUserCredentials(credentials!.email,credentials!.password)
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  jwt:{
    // secret: process.env.NEXTAUTH_SECRET
  },
  pages: {
  
    signIn :  "/login",
    error :   "/login",
    signOut :  "/"
  },
  
  session: {
    maxAge : 2592000,
    strategy : "jwt",
    updateAge : 86400,
  },

  callbacks: {

    async jwt({ token, account ,user }){

      if ( account ){
        token.accessToken = account.access_token;
        
        switch( account.type ){

          case "oauth":
            token.user = await checkUserOAuthCredentials(user?.email || "" , user?.name || "");
            break;
          
          case "credentials":
            token.user = user;
        }
      }

      return token;
    },
  
    async session({ session,token,user }){

      session.accessToken = token.accessToken;
      session.user = token.user as any;
      console.log({session});
      return session;
    }
  
  }


})