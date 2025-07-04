import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from "react-redux";
const Cartdata=()=>{
    const cardData=useSelector(state=>state.mycart.cart);
    // const dispatch=useDispatch();

    const ans=cardData.map((key)=>{
        return(
            <>
             <tr>
                <td>
                <img src={key.image} alt="web" width="100px" height="100px"/>
                </td>
                <td>{key.name}</td>
                <td>{key.brand}</td>
                <td>{key.category}</td>
                <td>{key.qnty}</td>
                <td>{key.price}</td>
             </tr>
            </>
        )
    })
    return(
        <>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}
export default Cartdata;