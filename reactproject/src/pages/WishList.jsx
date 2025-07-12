
import Table from 'react-bootstrap/Table';
import { useDispatch } from "react-redux";
import { reMove } from '../cartSlice';
import { useParams } from "react-router-dom";

const Wishlist=()=>{
    const dispatch=useDispatch();
     
    const { id } = useParams();
    const [mydata, setMydata] = useState({})
    const loadData = async () => {
        let api = `http://localhost:3000/product/${id}`;
        const response = await axios.get(api);
        setMydata(response.data);
        console.log(response.data);
    }

    // const loaddata=async()=>{
    // let api=`http://localhost:3000/records/${id}`;
    // const response=await axios.get(api);
    // setMydata(response.data);
    // console.log(response.data)
    //  }

    useEffect(() => {
        loadData();
        // loaddata()
    }, []);
     
    const ans=mydata.map((key)=>{
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
                  
                  {key.qnty}
                  
                  </td>
                <td>{key.price}</td>
                
                <td>
                  <span onClick={()=>{dispatch(reMove({id:key.id}))}} style={{backgroundColor:"black",padding:"0.4rem",color:"aliceblue"}}>remove</span>
                </td>
             </tr>
            </>
        )
    })
    return(
        <>
         <h3 id="h3tag">OUR COLLECTED DATA</h3>
        <Table striped bordered hover size="sm" style={{marginTop:"30px"}}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {ans}
         
     </tbody>
      
    </Table>
   
        </>
    )
}
export default Wishlist;