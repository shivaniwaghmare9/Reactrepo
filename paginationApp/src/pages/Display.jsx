
import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';


const Display=()=>{
    const[myData,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/records";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])
    let sno=0;
    const Record=myData.map((key)=>{
        sno++;
        return(
            <>
               <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.post}</td>
                <td>{key.salary}</td>
               </tr>
            </>
        )
    })
    return(
        <>
          <h1 id="head">Welcome to display page!!!</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>City</th>
          <th>Post</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {Record}
      </tbody>
      </Table>

        </>
    )
}
export default Display;