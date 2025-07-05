
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useState } from "react";
const Search=()=>{
    const[empno,setEmpno]=useState("");
    const[mydata,setMydata]=useState([]);
    const handleSubmit=async()=>{
        let api=`http://localhost:3000/data/?rollno=${empno}`;
        const response=await axios.get(api);
        setMydata(response.data);
        console.log(response.data);
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
            </tr>
            </>
        )
    })
    return(
        <>
        <h3>Search data!!!</h3>
        Enter Rollno: <input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}}/><br/><br/>
        <button onClick={handleSubmit}>Search</button><br/>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Rollno</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}
export default Search;