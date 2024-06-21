import { NextResponse, NextRequest } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

// export function GET(req: NextRequest , {params}: {params : {authroutes : string}}){
//     console.log(params.authroutes)

//     return NextResponse.json({msg: "hi there"})

// }

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "email" },
        password: { label: "password", type: "password", placeholder: "password" },
      },
      async authorize(credentials: any) {
        //  return null;

        return {
          id: "fhjdas",
          email: "hi there",
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
