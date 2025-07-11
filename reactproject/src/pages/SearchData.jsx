import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addCart } from "../cartSlice";

const SearchData=()=>{
    const {txtval} = useParams();
    const [mydata, setMydata] = useState([]);
    const dispatch = useDispatch();
    const loadData=async()=>{
        let api=`http://localhost:3000/product/?brand=${txtval}`;
        const response = await axios.get(api);
        console.log(response.data);
         setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    }, []);

    const ans= mydata.map((key)=>{
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
        <Button variant="primary" onClick={()=>{dispatch(addCart({id:key.id,name:key.name,image:key.image,brand:key.brand,category:key.category,qnty:1,price:key.price}))}} className='cartbtn'>Add To Cart</Button>
      </Card.Body>
    </Card>
        </>
    )
})

const[myData,setMyData]=useState([])
  const loaddata=async()=>{
    let api=`http://localhost:3000/records/?brand=${txtval}`;
    const response=await axios.get(api);
    setMyData(response.data);
    console.log(response.data)
  }
  useEffect(()=>{
   loaddata();
  },[])

  const ans2=myData.map((key)=>{
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
        <Button variant="primary" onClick={()=>{dispatch(addCart({id:key.id,name:key.name,image:key.image,brand:key.brand,category:key.category,qnty:1,price:key.price}))}} className='cartbtn'>Add To Cart</Button>
      </Card.Body>
    </Card>
      </>
    )
  })
    return(
        <>
         <h3 id="h3tag" >Search Data</h3>     
        <div id="carddata">
             {ans}
        </div> 

        <div id="carddata">
           {ans2}
       </div>
        </>
    )
}
export default SearchData;