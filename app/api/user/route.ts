import { getServerSession } from "next-auth";
import { NextScript } from "next/document";
import { NextRequest, NextResponse } from "next/server";
import { NEXT_URL } from "../lib/auth";

export async function GET(){
    const session = await getServerSession(NEXT_URL)

    return NextResponse.json({session})

}