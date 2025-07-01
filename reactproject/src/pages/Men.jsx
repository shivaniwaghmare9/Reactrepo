import axios from "axios";
import { useEffect, useState } from "react";

const Men=()=>{
    const[mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api=`http://localhost:3000/products/?category=men`
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData()
    },[])
    const ans=mydata.map((key)=>{
        return(
            <>
    <Card id="card">
        <Card.Img variant="top" src={key.image}  id="img"/>
      <Card.Body>
        <Card.Title>Name:{key.name}</Card.Title>
        <Card.Text>
          Brand:{key.brand}<br/>
          Category:{key.category}<br/>
          Price:{key.price}<br/>
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addCart({id:key.id,name:key.name,image:key.image,brand:key.brand,category:key.category,price:key.price}))}} className='cartbtn'>Add To Cart</Button>
      </Card.Body>
    </Card>
            </>
        )
    })
    return(
        <>
        </>
    )
}
export default Men;