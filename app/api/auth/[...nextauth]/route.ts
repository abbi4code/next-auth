import { NextResponse, NextRequest } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { NEXT_URL } from "../../lib/auth";

// export function GET(req: NextRequest , {params}: {params : {authroutes : string}}){
//     console.log(params.authroutes)

//     return NextResponse.json({msg: "hi there"})

// }


const handler = NextAuth(NEXT_URL);

export { handler as GET, handler as POST };
