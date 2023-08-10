
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


export default function useFetch(){

    const supabase=createClientComponentClient();

    const getStudents= async ()=>{
        const {data, error}=await supabase.from('students').select();
        return data;
    }
    
    const deleteStudent= async (id)=>{
        const {error}=await supabase.from('students').delete().eq('id', id);
        return error;
    }
    
    const updateStudent= async (data)=>{
        const {error}=await supabase.from('students')
        .update({'full_name':data.full_name, 'subjects':data.subjects, 'grade':data.grade})
        .eq('id', data.id);
        if(error) alert("Something went wrong, please try again later")
    }

    const getUserName= async ()=> {
        const {data:{session}}=await supabase.auth.getSession();
        const user=session?.user;
        let name;
        if(user){
            name=user.user_metadata?.full_name;
        }
        return name;
    }

    return {getStudents, deleteStudent, updateStudent, getUserName};

}

