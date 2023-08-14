'use client'

import { useEffect, useState } from "react";
import Cancel from "@/utils/Cancel";
import handleUpdateStudent from "../functions/handleUpdateStudent";

const UpdateStudent = ({states}) => {
    const [data, setdata] = useState({
        full_name:'',
        subjects:'',
        grade:''
    })

    const {setIsupdate, student}=states;
    useEffect(()=>{
        setdata(student)
        window.scrollTo(0,0)
        document.body.style.overflow='hidden';
        return ()=>{
            document.body.style.overflow='auto';
        }
    },[])
    

    const handleInput=(e, key)=>{
        const {value}=e.target;
        setdata((prevdata)=>({
            ...prevdata,
            [key]:value
        }))
    }

  return (
    <div className="p-16 bg-white rounded-lg flex flex-col items-center relative">
        <div className="px-4 text-black text-right w-full absolute top-3">
            <button onClick={()=>setIsupdate(false)}>
                  <Cancel />
            </button>
        </div>
            <div className="text-black">
                <div className="flex justify-between items-center mb-6">
                    <div className="pr-5">
                        <label htmlFor="name" >Name : </label>
                    </div>
                    <div>
                        <input type="text" name="name" value={data.full_name}
                        onChange={(e)=>handleInput(e, 'full_name')}
                        className="p-2 w-[250px] rounded-lg bg-gray-100 text-primary-black border-b-2 border-blue-300 outline-0" required/>
                    </div>
                </div>
                <div className="flex mb-6 justify-between items-center" >
                    <div>
                        <label htmlFor="subject" >Subject : </label>
                    </div>
                    <div>
                        <input type="text" name="subject" value={data.subjects}
                        onChange={(e)=>handleInput(e, 'subjects')}
                        className="p-2 w-[250px] rounded-lg bg-gray-100 text-primary-black border-b-2 border-blue-300 outline-0" required/>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="pr-5">
                        <label htmlFor="grade" >Grade : </label>
                    </div>
                    <div className="text-primary-black">
                        <select name="grade" value={data.grade}
                        onChange={(e)=>handleInput(e, 'grade')}
                        className="outline-0 border-b-2 border-blue-300 p-2 bg-gray-100 rounded-lg text-center w-[250px]" required>
                            <option value='' className="bg-primary-lightblue" >Select Grade</option>
                            <option value='A'>A</option>
                            <option value='B'>B</option>
                            <option value='C'>C</option>
                            <option value='D'>D</option>
                        </select>
                    </div>
                </div>
            </div>
                <div className="mt-8 p-2 rounded-full bg-blue-400 hover:bg-blue-500 px-6 ring-1 ring-black-500 ring-offset-1 hover:ring-offset-2 text-primary-white drop-shadow-md">
                    <button onClick={()=> handleUpdateStudent(data, setIsupdate)}>  Update Student</button>
                  
                </div>
    </div>
  )
}


export default UpdateStudent;