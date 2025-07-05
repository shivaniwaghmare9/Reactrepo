
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
const CheckOut=()=>{
    const cartData=useSelector(state=>state.mycart.cart)
    const navigate=useNavigate();

    let netAmount=0;
    const ans=cartData.map((key)=>{
        netAmount+=key.qnty*key.price;
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/paydone")
    }
    return(
        <>
         <Form style={{marginLeft:"30%",width:"500px",marginTop:"30px"}}>
      <Form.Group className="mb-3">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Mobile</Form.Label>
        <Form.Control type="text" placeholder="Number" />
      </Form.Group>

      
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default CheckOut;