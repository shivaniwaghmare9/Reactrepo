
import axios from "axios";
import { useState,useEffect } from "react";
const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/data"
       const response=await axios.get(api);
       setMydata(response.data);
       console.log(response.data);
    }
    useEffect(()=>{
        loadData()
    },[])
    return(
        <>
        </>
    )
}
export default Display;