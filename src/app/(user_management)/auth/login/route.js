import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export const dynamic = 'force-dynamic'

export async function POST(req){
    const requestUrl=new URL(req.url)
    const formData=await req.formData()
    const email=formData.get('email')
    const password=formData.get('password')
    const supabase=createRouteHandlerClient({cookies})

    const temp=await supabase.auth.signInWithPassword({
        email, password
    })

    return NextResponse.redirect(`${requestUrl.origin}/dashboard`, {
        status:301
    })
}
