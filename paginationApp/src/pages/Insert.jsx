
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';

const Insert=()=>{
  const[input,setInput]=useState({});
  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setInput ((values) => ({...values,[name]:value}));
    console.log(input);
  }
  const handleSubmit=async(e)=>{
     e.preventDefault();     //page refresh nhii krta h
    let api= "http://localhost:3000/records";
    const response = await axios.post (api,input);
    toast.success ("data succesfully saved!!");
    console.log (response);
    setInput ({
         name:"",
         city:"",
        post:"",
        salary:""
    })
  }
    return(
        <>
        <h1 id="head"> Welcome to insert page !!!</h1>
    <Form id="form">
        
        <Form.Group className ="mb-3">
         <Form.Label> Enter Name </Form.Label>
         <Form.Control type="text"  name="name" onChange={handleInput}/>
       </Form.Group>
        <Form.Group className ="mb-3">
        <Form.Label>Enter City</Form.Label>
         <Form.Control type="text"  name="city" onChange={handleInput}/>
       </Form.Group>
       <Form.Group className ="mb-3">
        <Form.Label>Enter post</Form.Label>
          <Form.Control type="text" name="post" onChange={handleInput} />
         </Form.Group>
         <Form.Group className ="mb-3">
           <Form.Label>Enter Salary</Form.Label>
           <Form.Control type="text" name="salary" onChange={handleInput} />
       </Form.Group>

      
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <ToastContainer />

    </>
    )
}
export default Insert;