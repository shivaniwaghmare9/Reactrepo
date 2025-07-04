
import { useState } from "react";
const Insert=()=>{
    const[input,setInput]=useState({})
    const  handleInput=(e)=>{
        let name=e.target.name;
        let value=e.taeget.value;
        console.log(input)
        setInput(values=>{...values,[name]:value})
    }
    return(
        <>
       <h3>Data Insert</h3>
         <div>
            Enter Name: <input type="text" name="name" onChange={handleInput}/><br/><br/>
            Enter Rollno: <input type="text" name="rollno" onChange={handleInput}/><br/><br/>
            Enter City: <input type="text" name="city" onChange={handleInput}/><br/><br/>
            Enter Fees: <input type="text" name="fees" onChange={handleInput}/><br/><br/>
            <button>Submit</button>
         </div>
        </>
    )
}
export default Insert;