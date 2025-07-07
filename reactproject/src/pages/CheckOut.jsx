
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
const CheckOut=()=>{
    const cartData=useSelector(state=>state.mycart.cart)
    const navigate=useNavigate();
    const [val,setVal] = useState({  name: "",
        email: "",
        number: "",
        address: "",
        pin: ""});

    let netAmount=0;
    const ans=cartData.map((key)=>{
        netAmount+=key.qnty*key.price;
    })

    const handleVal=(e)=>{
      // let name = e.target.name;
      // let values = e.target.value;

      setVal({...val,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
       
        if(!val.name || !val.email || !val.number || !val.address || !val.pin){
        alert("Please fill all fields !")
      }else{
          navigate("/paydone")
      }
    }
    
  
  return(
        <>
        
        {netAmount}
         <Form style={{marginLeft:"30%",width:"500px",marginTop:"30px"}}>
      <Form.Group className="mb-3">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="name" name="name" value={val.name} onChange={handleVal}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" placeholder="City" name="city" value={val.city} onChange={handleVal}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" placeholder="Address" name="address" value={val.address} onChange={handleVal}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" placeholder="Email" name="email" value={val.email} onChange={handleVal}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Mobile</Form.Label>
        <Form.Control type="text" placeholder="Number" name="number" value={val.number} onChange={handleVal}/>
      </Form.Group>

      
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

    
        </>
    )
}
export default CheckOut;