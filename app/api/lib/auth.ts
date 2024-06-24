import { setEngine } from "crypto";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github"
export const NEXT_URL = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },

      async authorize(credentials: any) {
        //  return null;
        if (credentials.username === "") {
          return null;
        } else {
          return {
            id: "hi there",
            email: credentials.username,
          };
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    //@ts-ignore
    // async signIn({user} : signinprop){
    //   console.log(user)
    //   const allowed = true
    //   if(user.email === "abhishek"){
    //     return false
    //   }else{
    //     return true
    //   }

    // },

    // async jwt({token,user}){
    //   token.id = token.sub
    //   console.log(token)
    //   return token
    // }
    session({session,token,user}) {
    //   session.user.id = token.sub;
      console.log(session);
     if(session && session.user){
        session.user.id = token.sub
     }
     return session
    },
  },
};