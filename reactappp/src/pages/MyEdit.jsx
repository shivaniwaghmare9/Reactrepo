
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

    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setMydata(values=>({...values,[name]:value}))
      console.log(mydata);
    }

    const handleSubmit=async()=>{
        let api=`http://localhost:3000/data/${id}`;
        const response=await axios.put(api,mydata);
        alert("data successfully updated!!")
    }
    return(
        <>
         <h3>Edit Data</h3>
         Edit name: <input type="text" name="name" value={mydata.name} onChange={handleInput}/><br/><br/>
         Edit rollno: <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput}/><br/><br/>
         Edit city: <input type="text" name="city" value={mydata.city} onChange={handleInput}/><br/><br/>
         Edit fees: <input type="text" name="fees" value={mydata.fees} onChange={handleInput}/><br/><br/>
         <button onClick={handleSubmit}>Edit!</button>

        </>
    )
}
export default Myedit;