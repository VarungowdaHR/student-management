'use client'
import useFetch from "@/lib/useFetch";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

const Navbar=()=>{
    const [userName, setuserName] = useState("");
    const pathname=usePathname();

    useEffect(()=>{
        const user= async ()=>{
            const temp=await useFetch().getUserName();
            if(temp){
                setuserName(temp);
            }
        }
        user()
    },[])
    
    return(
            <nav className="w-full font-medium bg-blue-500 text-primary-white px-5 py-5 flex justify-between items-center absolute top-0 left-0">
                <div>
                    <h1>
                        Student Management Tool
                    </h1>
                </div>

                <div>
                    {
                        userName?
                        <div className="flex justify-evenly items-center">
                            <h2 className="pr-6">{userName}</h2>
                            <form method="post">
                            <button formAction="/auth/signout" >
                                <span className="px-3 py-2 rounded-xl hover:bg-blue-400">Sign Out</span>
                                </button>
                            </form>
                        </div>
                        : pathname==='/signup'?
                        <div>
                            <Link className="px-3 py-2 rounded-xl hover:bg-blue-400" href={'/login'}>Login</Link> 
                        </div>
                        :<div>
                            <Link className="px-3 py-2 rounded-xl hover:bg-blue-400" href={'/signup'}>Sign UP</Link> 
                        </div>
                    }
                </div>
            
            </nav>
    )
}


export default Navbar