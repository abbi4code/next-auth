import { getServerSession } from "next-auth";
import { NextScript } from "next/document";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    const session = await getServerSession()

    return(
        NextResponse.json({session})

    )

}