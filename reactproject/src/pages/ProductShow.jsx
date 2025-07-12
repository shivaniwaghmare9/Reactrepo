import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCard } from "../cartSlice";

const ProductShow = () => {
    const dispatch=useDispatch()
    // const navigate=useNavigate();
    const { id } = useParams();
    const [mydata, setMydata] = useState({})
    const loadData = async () => {
        let api = `http://localhost:3000/product/${id}`;
        const response = await axios.get(api);
        setMydata(response.data);
        console.log(response.data);
    }

    const loaddata=async()=>{
    let api=`http://localhost:3000/records/${id}`;
    const response=await axios.get(api);
    setMydata(response.data);
    console.log(response.data)
     }
    useEffect(() => {
        loadData();
        loaddata()
    }, []);


return (
        <>
            <div id="productShow">
                <div>
                    <img src={mydata.image} width="300" height="300" />
                </div>
                <div style={{marginTop:"40px"}}>
                    <h2 style={{fontWeight:"bold"}}> Product Name : {mydata.name}</h2> 
                    <h4 style={{color:"indianred"}}>Brand : {mydata.brand}</h4>
                    <h4 style={{fontWeight:"bold"}}>Category : {mydata.category}</h4>
                    <h4 style={{color:"red"}}> Price  : {mydata.price} /-</h4>
                    <Button variant="primary" onClick={()=>{dispatch(addCard({id:key.id,name:key.name,image:key.image,brand:key.brand,category:key.category,qnty:1,price:key.price}))}} className='cartbtn'>Add To Cart</Button>
      
                     </div>
            </div>

            
        </>
    )
}
export default ProductShow;