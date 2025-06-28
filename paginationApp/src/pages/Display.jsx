
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
  const recordsPerPage=3;
  const lastIndex= currentPage*recordsPerPage;
  const firstIndex= lastIndex-recordsPerPage;
  const records= myData.slice(firstIndex, lastIndex);
  const npage= Math.ceil(myData.length/recordsPerPage);
  const numbers=[...Array(npage+1).keys()].slice(1);
  
    let sno=0;
    const Record=records.map((key)=>{
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

     function prePage()
{
  if(currentPage!==1)
  {
    setCurrentPage(currentPage-1);
  }
}

function changeCPage(id)
{
  setCurrentPage(id)
}

function nextPage()
{
   if (currentPage!==npage )
   {
    setCurrentPage(currentPage+1);
   }
}

    const sortdata=()=>{
      let datasort = [...myData].sort((a,b)=>{
        if(a.Name < b.Name){
            return -1;
        }else if( a.Name > b.Name){
            return 1;
        }
      })
      setMydata(datasort);
      console.log(datasort);
    }
    return(
        <>
         <h1 id="head">Welcome to display page!!!</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th onClick={sortdata}>Name</th>
          <th>City</th>
          <th>Post</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {Record}
      </tbody>
      </Table>

      <nav className="pagin">
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


        </>
        
    )
}
export default Display;