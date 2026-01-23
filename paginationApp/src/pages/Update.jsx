
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const Update=()=>{
    const [mydata,setMydata] = useState([]);

    const loadData=async()=>{
    let api = "http://localhost:3000/records"
    let res = await axios.get(api);
    setMydata(res.data)
    console.log(res.data)
    }

    useEffect(()=>{
        loadData()
    },[])

    const sortdata=()=>{
      let datasort = [...mydata].sort((a,b)=>{
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if(nameA < nameB){
            return -1;
        }else{
            return 1;
        }
      })
      setMydata(datasort);
      console.log(datasort);
    }  
    

    const del=async(id)=>{
        let api =`http://localhost:3000/records/${id}`
        let res = await axios.delete(api);
        alert("data has deleted")
        loadData(); 
    }

   let sno=0;
    const Record = mydata.map((item)=>{
         sno++;
        return(
           <tr>
             <td>{sno}</td>
             <td>{item.name}</td>
             <td>{item.city}</td>
             <td>{item.post}</td>
             <td>{item.salary}</td>
             <td><span>Edit</span></td>
             <td><span onClick={()=>del(item.id)}>Delete</span></td>
           </tr>
        )
    })
    
    return(
        <>
        <h4>Update page</h4>
        <Table striped bordered hover>
              <thead>
                <tr>
                   <th>Sno</th>
                  <th onClick={sortdata}>Name</th>
                  <th>City</th>
                  <th>Post</th>
                  <th>Salary</th>
                  <th>Upadte</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {Record}
              </tbody>
              </Table>
    </>
    )
}
export default Update;