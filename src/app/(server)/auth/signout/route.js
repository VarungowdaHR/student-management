import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic='force-dynamic';

export async function POST(req){
    const reqestUrl=new URL(req.url);
    const supabase=createRouteHandlerClient({cookies});
    await supabase.auth.signOut()
    return NextResponse.redirect(`${reqestUrl.origin}/login`, {
        status:301
    })
}