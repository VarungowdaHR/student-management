import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic='force-dynamic';

export async function POST(req){
    const reqestUrl=new URL(req.url);
    const formData=await req.formData();
    const email=formData.get('email');
    const password=formData.get('password');
    const full_name= formData.get('full_name')
    const supabase=createRouteHandlerClient({cookies})

    const temp=await supabase.auth.signUp({
        email,
        password,
        options:{
            data:{
                full_name:full_name
            },
            emailRedirectTo:`${reqestUrl.origin}/auth/callback`
        }
    })
    return NextResponse.redirect(`${reqestUrl.origin}/login`, {
        status:301,
    })
}