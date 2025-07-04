import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from "react-redux";
const Cartdata=()=>{
    const cardData=useSelector(state=>state.mycart.cart);
    // const dispatch=useDispatch();
    let TotalAmount=0;
    const ans=cardData.map((key)=>{
        TotalAmount+=key.qnty*key.price
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
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>NetAmount</th>
            <th>{TotalAmount}</th>
        </tr>
      </tbody>
      </Table>
        </>
    )
}
export default Cartdata;