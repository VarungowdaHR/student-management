'use client'
import Loader from "@/utils/Loader";
import { useState } from "react";
import Link from "next/link";

const SignUp=()=>{
    const [isLoading, setisLoading] = useState(false)
    return(
        <div className="p-16 bg-white rounded-xl shadow-lg">
        <form action="/auth/signup" className="flex flex-col items-center" method="post">
            <div className="text-black">
                <div className="flex justify-between items-center mb-6">
                    <div className="pr-5">
                        <label htmlFor="full_name" >Full Name : </label>
                    </div>
                    <div>
                        <input type="text" name="full_name" className="p-2 rounded-lg w-[250px] bg-gray-100 text-primary-black border-b-2 border-blue-300 outline-0" />
                    </div>
                </div>
                <div className="flex mb-6 justify-between items-center" >
                    <div>
                        <label htmlFor="email" >Email : </label>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="dummy@gmail.com" 
                        className="p-2 rounded-lg w-[250px] bg-gray-100 text-primary-black border-b-2 border-blue-300  outline-0"  />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="pr-5">
                        <label htmlFor="password" >Password : </label>
                    </div>
                    <div>
                        <input type="password" name="password" minLength={6} 
                        className="p-2 rounded-lg w-[250px] bg-gray-100 text-primary-black border-b-2 border-blue-300  outline-0" />
                    </div>
                </div>
            </div>
            <div>
                <button type="submit" onClick={()=> setisLoading(true)} className="min-w-[150px] mt-8 px-8 py-2 rounded-md cursor-pointer bg-blue-400 hover:bg-blue-500 ring-1 ring-gray drop-shadow-lg ring-offset-1 hover:ring-offset-2 text-primary-white flex justify-center" >
                   {isLoading?<Loader />:"Sign Up"}
                </button>
            </div>
        </form>
        <div className="pt-8 w-full text-center text-xs font-medium">
            already registered? <Link className="text-blue-500" href="/login">
            Click here to login</Link>                
        </div>
    </div>
    )
}

export default SignUp;