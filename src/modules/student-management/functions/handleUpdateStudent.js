import useFetch from "@/lib/useFetch";

const handleUpdateStudent= async (data, setIsupdate)=>{
    const {updateStudent}=useFetch();
    await updateStudent(data)
    setIsupdate(false);
}

export default handleUpdateStudent;