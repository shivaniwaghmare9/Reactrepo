import axios from "axios";
import { useEffect, useState } from "react";

const Men=()=>{
    const[mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api=`http://localhost:3000/products/?category=men`
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData()
    },[])
    return(
        <>
        </>
    )
}
export default Men;