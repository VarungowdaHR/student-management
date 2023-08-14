import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function useInsert(data){
    const supabase=createClientComponentClient();
    const {data:{session}}=await supabase.auth.getSession()
    const user=session?.user;
    if(user){
        const userId=user?.id;
        const {error}=await supabase.from('students').insert({
            user_id:userId,
            full_name:data.name,
            subjects:data.subject,
            grade:data.grade
        })
        return error
    }

}
