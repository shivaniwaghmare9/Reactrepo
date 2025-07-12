import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import { addCard } from "../wishSlice";


const ProductShow = () => {
    const dispatch = useDispatch();
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

    // const handleWishClick = () => {
    //     dispatch(addCard(mydata));
    //     alert("Added to wishlist!");
    // };


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
                    {/* <button onClick={handleWishClick}>Wish</button> */}
                    <Button variant="primary" type="submit" onClick={()=>dispatch(addCard(mydata))}>Wish </Button>
      
                     </div>
            </div>

            
        </>
    )
}
export default ProductShow;