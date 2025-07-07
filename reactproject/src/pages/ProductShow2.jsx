import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductShow2 = () => {
    const { item } = useParams();
    const[myData,setMyData]=useState({})
    const loaddata=async()=>{
    let api=`http://localhost:3000/records/${item}`;
    const response=await axios.get(api);
    setMyData(response.data);
    console.log(response.data)
  }
  useEffect(()=>{
   loaddata();
  },[])

    return (
        <>
           
        <div id="productShow">
                <div>
                    <img src={myData.image} width="300" height="300" />
                </div>
                <div>
                    <h1> Product Name : {myData.name}</h1> 
                    <h3 style={{color:"green"}}> Category : {myData.category}</h3>
                    <h2 style={{color:"red"}}> Price  : {myData.price}</h2>
                </div>
            </div>

        </>
    )
}
export default ProductShow2;