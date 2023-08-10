'use client'

import Loader from "@/utils/Loader";
import { useState } from "react";

const Login=()=>{
     const [isLoading, setisLoading] = useState(false)

    return(
            <div className="p-16 bg-white rounded-xl shadow-lg ">
                <form action="auth/login" className="flex flex-col items-center" method="post">
                    <div className="text-black">
                        <div className="flex mb-6 justify-between items-center" >
                            <div>
                                <label htmlFor="email" >Email : </label>
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="dummy@gmail.com" 
                                className="p-2 rounded-lg w-[250px] bg-gray-100 text-primary-black border-b-2 border-blue-300  outline-0" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="pr-5">
                                <label htmlFor="password" >Password : </label>
                            </div>
                            <div>
                                <input type="password" name="password" minLength={6} 
                                className="p-2 w-[250px] rounded-lg bg-gray-100 text-primary-black border-b-2 border-blue-300 outline-0"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>setisLoading(true)} type="submit" className="min-w-[150px] w-full mt-12 px-8 py-2 rounded-md cursor-pointer bg-blue-400 hover:bg-blue-500 ring-1 ring-gray drop-shadow-lg ring-offset-1 hover:ring-offset-2 text-white flex justify-center ">
                            {isLoading?<Loader />:"Login"}
                        </button>
                    </div>
                </form>
            </div>
    )
}

export default Login;