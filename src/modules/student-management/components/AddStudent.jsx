'use client'
import Loader from "@/utils/Loader";
import { useState } from "react";
import handleAddStudent from "../functions/handleAddStudent";


const AddStudent = () => {
    const [data, setdata] = useState({
        name:'',
        subject:'',
        grade:'Select Grade'
    });
    const [isLoading, setisLoading] = useState(false)

    const handleInput=(e, key)=>{
        const {value}=e.target;
        setdata((prevdata)=>({
            ...prevdata,
            [key]:value
        }))
    }

  return (
    <div className="p-16 bg-white rounded-lg flex flex-col items-center relative shadow-lg">
            <div className="text-black">
                <div className="flex justify-between items-center mb-6 ">
                    <div className="pr-5">
                        <label htmlFor="name" >Name : </label>
                    </div>
                    <div>
                        <input type="text" name="name" value={data.name}
                        onChange={(e)=>handleInput(e, 'name')}
                        className="p-2 w-[250px] rounded-lg bg-gray-100 text-primary-black border-b-2 border-blue-300 outline-0" placeholder="Dammy Name" required/>
                    </div>
                </div>
                <div className="flex mb-6 justify-between items-center" >
                    <div>
                        <label htmlFor="subject" >Subject : </label>
                    </div>
                    <div>
                        <input type="text" name="subject" value={data.subject}
                        onChange={(e)=>handleInput(e, 'subject')}
                        className="p-2 rounded-lg w-[250px] bg-gray-100 text-primary-black border-b-2 border-blue-300 outline-0" placeholder="Computer Science" required/>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="pr-5">
                        <label htmlFor="grade" >Grade : </label>
                    </div>
                    <div className="text-black">
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
            <div className="min-w-[150px] mt-12 px-8 py-2 rounded-md cursor-pointer bg-blue-400 hover:bg-blue-500 ring-1 ring-gray drop-shadow-lg ring-offset-1 hover:ring-offset-2 text-white flex justify-center">
                <button onClick={()=> handleAddStudent(data, setdata, setisLoading)}>
                    {isLoading?<Loader />:<span>Add Student</span>}
                    </button>
            </div>
    </div>
  )
}

export default AddStudent