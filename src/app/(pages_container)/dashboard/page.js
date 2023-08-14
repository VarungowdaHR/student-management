'use client'
import TableData from "@/app/_components/TableData";
import UpdateStudent from "@/app/_components/UpdateStudent";
import Link from "next/link";
import React, { useState } from "react";

export default function Dashboard(){
    const [isupdate, setIsupdate] = useState(false);
    const [student, setStudent] = useState({});
    const [refresh, setrefresh] = useState(false);
    const [totalStudents, settotalStudents] = useState(0)
    function handleUpdate(student){
        setStudent(student);
        setIsupdate(true);
    }
    function getStudentsLength(num){
        settotalStudents(num)
    }

    return(
        <div>
            {
                isupdate && 
                <div className="w-full h-screen flex items-center justify-center absolute bg-black bg-opacity-50 top-0 bottom-0 left-0 right-0 z-30 overflow-hidden">
                    <UpdateStudent states={{setIsupdate, student}} />
                </div>
            }
            <div className="mt-16"></div>
            <div className="pt-12 px-16">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <p>
                            Total Number of Students : <span>{totalStudents}</span>
                        </p>
                    </div>
                    <div>
                        <Link href='/dashboard/add-student' 
                        className="py-2 px-3 text-primary-white bg-blue-400 hover:bg-blue-500 rounded-md">Add Student</Link>
                    </div>
                </div>
                {/* table header */}
                <div className="mt-6">
                    <div>
                        <button className="mb-2 py-2 px-3 text-primary-white bg-blue-400 hover:bg-blue-500 rounded-md" onClick={()=> setrefresh((prev)=>!prev)}>Refresh Table</button>
                    </div>
                    <div className="grid grid-cols-row content-start w-full items-center justify-center gap-y-1 shadow-md relative">
                        <div className="text-center bg-blue-400 p-4 text-white">ID</div>
                        <div className="text-center bg-blue-400 p-4 text-white">NAME</div>
                        <div className="text-center bg-blue-400 p-4 text-white">SUBJECT</div>
                        <div className="text-center bg-blue-400 p-4 text-white">GRADE</div>
                        <div className="text-center bg-blue-400 p-4 text-white">ACTION</div>
                        <TableData handleUpdate={handleUpdate} getStudentsLength={getStudentsLength} refresh={refresh} />
                    </div>
                </div>
            </div>
        </div>
    )
}