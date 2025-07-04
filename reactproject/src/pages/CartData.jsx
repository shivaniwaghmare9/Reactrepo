import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from "react-redux";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaMinusSquare } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { increMent,decreMent,reMove } from '../cartSlice';

const Cartdata=()=>{
    const cardData=useSelector(state=>state.mycart.cart);
     const dispatch=useDispatch();
     let TotalAmount=0;
    const ans=cardData.map((key)=>{
         TotalAmount+=key.qnty*key.price;
        return(
            <>
             <tr>
                <td>
                <img src={key.image} alt="web" width="100px" height="100px"/>
                </td>
                <td>{key.name}</td>
                <td>{key.brand}</td>
                <td>{key.category}</td>
                <td style={{fontSize:"20px"}}>
                  <FaMinusSquare onClick={()=>{dispatch(decreMent({id:key.id}))}}/>
                  {key.qnty}
                  <FaPlusSquare onClick={()=>{dispatch(increMent({id:key.id}))}}/>
                  </td>
                <td>{key.price}</td>
                <td>{key.qnty*key.price}</td> 
                <td>
                  <span onClick={()=>{dispatch(reMove({id:key.id}))}} style={{backgroundColor:"black",padding:"0.4rem",color:"aliceblue"}}>remove</span>
                </td>
             </tr>
            </>
        )
    })
    return(
        <>
         <h3 id="h3tag">Our Collected Data</h3>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {ans}
         <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>NetAmount</th>
            <th><FaIndianRupeeSign />{TotalAmount}</th>
        </tr> 
     </tbody>
        
      </Table>
        </>
    )
}
export default Cartdata;