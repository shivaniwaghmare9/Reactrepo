
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const Myedit=()=>{
    const{id}=useParams();
    const[mydata,setMydata]=useState({});
    const loadData=async()=>{
        let api=`http://localhost:3000/data/${id}`;
        const response=await axios.get(api);
        setMydata(response.data);
        console.log(response.data)
    }
    useEffect(()=>{
        loadData()
    },[])
    return(
        <>
         <h3>Edit Data</h3>
         Edit name: <input type="text" name="name" /><br/><br/>
         Edit rollno: <input type="text" name="name" /><br/><br/>
         Edit name: <input type="text" name="name" /><br/><br/>
         Edit name: <input type="text" name="name" /><br/><br/>

        </>
    )
}
export default Myedit;