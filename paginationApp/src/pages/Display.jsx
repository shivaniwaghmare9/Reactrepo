
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

    const [currentPage, setCurrentPage]= useState(1);
  const recordsPerPage=5;
  const lastIndex= currentPage*recordsPerPage;
  const firstIndex= lastIndex-recordsPerPage;
  const records= Data.slice(firstIndex, lastIndex);
  const npage= Math.ceil(Data.length/recordsPerPage);
  const numbers=[...Array(npage+1).keys()].slice(1);
  
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


    <nav>
         <ul className="display">
          <li>
             <a href="#" onClick={prePage}> Pre </a>   
          </li>
         {
           numbers.map((n, i)=>(   
               <li className="mynum">
               <a href="#" onClick={()=>{changeCPage(n)}}>{n}</a>
              </li>
              ))
         }     
         <li style={{paddingLeft:"20px"}}>
           <a href="#" onClick={nextPage}> Next </a>
         </li>
         </ul>
      </nav>


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