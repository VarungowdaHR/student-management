'use client'
import useFetch from "@/lib/useFetch"
import Loader from "@/utils/Loader";
import React, { useEffect, useState } from "react";
const TableData = ({handleUpdate, getStudentsLength, refresh}) => {
    const [students, setStudents] = useState([]);
    const {deleteStudent, getStudents}=useFetch();
    const [isLoading, setisLoading] = useState(true);
    useEffect(()=>{
        const getData= async ()=>{
            const data=await getStudents();
            if(data){
                setStudents(data)
                getStudentsLength(data.length);
            }
            setisLoading(false);
       }
            getData();
    },[refresh])

    async function handleDelete(id, idx){
        const error=await deleteStudent(id);
        if(!error){
            setStudents([...students.slice(0, idx),...students.slice(idx+1)])
        }
    }

  return isLoading? (<div className="w-full text-center absolute top-40 left-[50%]">
  <Loader /> </div>) : (
    <>
        {
            students.map((student, i)=>(
                <React.Fragment key={i} >
                    <div className="text-left bg-white px-5 py-3 ">{student.id}</div>
                    <div className="text-left bg-white px-5 py-3 ">{student.full_name}</div>
                    <div className="text-left bg-white px-5 py-3 ">{student.subjects}</div>
                    <div className="text-left bg-white px-5 py-3 ">{student.grade}</div>
                    <div className="text-left bg-white flex justify-evenly px-2 py-1">
                        <button onClick={()=>handleUpdate(student)} className="px-3 py-2 bg-green-100 rounded hover:bg-green-200">Edit</button>
                        <button onClick={() =>handleDelete(student.id, i)} className="px-3 py-2 bg-red-100 rounded hover:bg-red-200">Delete</button>
                    </div>
                </React.Fragment>
            ))
        }
    </>
  )
}

export default TableData