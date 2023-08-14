import { useInsert } from "@/lib/useInsert"

const handleAddStudent=async (data, setdata, setisLoading)=>{
    setisLoading(true)
    try{
     const error=await useInsert(data)
     setdata({
         name:'',
         subject:'',
         grade:'Select Grade'
        })
        error?alert("please try again after somtime"):alert("data stored succussfully")
        console.log("redirecting");
        window.history.back();
    }finally{
     setisLoading(false)
    }
 }

 export default handleAddStudent;