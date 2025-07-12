import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from "react-redux";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaMinusSquare } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import  Button from 'react-bootstrap/Button';
import { ReMove } from '../wishSlice';
import { useNavigate } from "react-router-dom";

const Wishlist=()=>{
     const wish=useSelector(state=>state.mycardd.cardd);
     const dispatch=useDispatch();
     const navigate = useNavigate();

     
    const ans=wish.map((key)=>{
         
        return(
            <>
             <tr>
                <td>
                <img src={key.image} alt="web" width="100px" height="100px"/>
                </td>
                <td>{key.name}</td>
                <td>{key.brand}</td>
                <td>{key.category}</td>
                
                <td>{key.price}</td>
                 
                <td>
                  <span onClick={()=>{dispatch(ReMove({id:key.id}))}} style={{backgroundColor:"black",padding:"0.4rem",color:"aliceblue"}}>remove</span>
                </td>
             </tr>
            </>
        )
    })
    return(
        <>
         <h3 id="h3tag">OUR COLLECTED DATA</h3>
          <Button variant="warning" onClick={()=>{navigate("/checkout")}}>CheckOut</Button>
         <Table striped bordered hover size="sm" style={{marginTop:"30px"}}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        
     </tbody>
      
    </Table>
   
        </>
    )
}
export default Wishlist;