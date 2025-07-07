import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addCart } from '../cartSlice';
import { useDispatch } from 'react-redux';

const Search=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch = useDispatch();
 const [product, setProduct] = useState("");


 const loadData=async()=>{
    const response = await axios.get("http://localhost:3000/products");
    console.log(response.data);
    setMydata(response.data);
 }
 useEffect(()=>{
    loadData();
 }, []);


const handleInput=(e)=>{
      let value=e.target.value;
      setProduct(value);
}
const ans=mydata.map((key)=>{
     let myval= product.toLocaleLowerCase();
     let mystr= key.name.toLocaleLowerCase();
     let status= mystr.includes(myval);
   
   if (status)
   {


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

 const[myData,setMyData]=useState([])
  const loaddata=async()=>{
    let api="http://localhost:3000/records";
    const response=await axios.get(api);
    setMyData(response.data);
    console.log(response.data)
  }
  useEffect(()=>{
   loaddata();
  },[])

  const ans2=myData.map((key)=>{
    let myval= product.toLocaleLowerCase();
     let mystr= key.name.toLocaleLowerCase();
     let status= mystr.includes(myval);
   
   if (status)
   {

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

  
    return(
        <> 
      <h3 id="h3tag"> Our Latest Products</h3>
        
        <center>

       
        Enter Product Name : <input type="text" value={product}
        onChange={handleInput} id="inpt"/>
       </center>
       <br /> <br /> <br />
      <div id='carddata'>
      {ans}
      </div>  

      <div id="carddata">
    {ans2}
  </div>   
        </>
    )
}
export default Search;