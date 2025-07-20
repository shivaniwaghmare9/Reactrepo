

import { useState } from "react";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import { useDispatch } from "react-redux";
import { addCart } from '../cartSlice';
import { useNavigate } from "react-router-dom";

const SortData = () => {
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  const [mydata,setMydata] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleSubmit=async()=>{
    let api = "http://localhost:3000/product"
    let res = await axios.get(api);
    setMydata(res.data); 
  }


const ans = mydata.map((key)=>{

    if(key.price>=min && key.price<=max){
    return(
       <>
       <Card id="card">
           <Card.Img variant="top" src={key.image}  id="img" onClick={()=>{navigate(`/productshow/${key.id}`)}}/>
         <Card.Body>
           <Card.Title>Name:{key.name}</Card.Title>
           <Card.Text>
             Brand:{key.brand}<br/>
             Category:{key.category}<br/>
             Price:{key.price}<br/>
           </Card.Text>
           <Button variant="primary" onClick={()=>{dispatch(addCart({id:key.id,name:key.name,image:key.image,brand:key.brand,category:key.category,qnty:1,price:key.price}))}} className='cartbtn'>Add To Cart</Button>
         </Card.Body>
       </Card>
       </>
    )
    }
  })


  return (
    <>
      <h3>Search Data here By Price</h3>
      <div className='Div'>
      <div className="Div1">
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}/>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}/>
         <Button onClick={handleSubmit}>Search Data</Button>
        </div>
    </div>
         <div id="carddata">
            {ans}
        </div>
    </>
  );
};
export default SortData;