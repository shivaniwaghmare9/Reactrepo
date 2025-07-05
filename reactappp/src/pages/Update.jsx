

import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useState,useEffect } from "react";
const Update=()=>{
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

    const dataDelete=async(id)=>{
        let api=`http://localhost:3000/data/${id}`;
        const reponse=await axios.delete(api,mydata);
        alert("data successfully deleted!!");
        loadData();
    }
    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.rollno}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td>
                    <span onClick={()=>{dataDelete(key.id)}}>delete</span>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
           <h3>Display data!!</h3>
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Rollno</th>
          <th>City</th>
          <th>Fees</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}
export default Update;