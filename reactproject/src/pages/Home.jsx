

import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/Shoestem.jpg"
import img2 from "../images/shoes2.jpg"
import img3 from "../images/shoes3.jpg"
import img4 from "../images/footer up.webp"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { FaTruck } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCart } from '../cartSlice';

const Home=()=>{
  const dispatch=useDispatch();
  const[mydata,setMydata]=useState([])
  const loadData=async()=>{
    let api="http://localhost:3000/products";
    const response=await axios.get(api);
    setMydata(response.data);
    console.log(response.data)
  }
  useEffect(()=>{
   loadData();
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
     <Carousel className='outlet' >
      <Carousel.Item>
        <img src={img1} alt="web" width="100%" height="600px"/>
        <Carousel.Caption>
            <h3>Fresh Kicks, Fresh Vibes</h3>
            <p>Lace up with the latest drops and turn heads wherever you go.</p>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="web" width="100%" height="600px"/>
        <Carousel.Caption>
             <h3>Step Into Style</h3>
             <p>Discover comfort, confidence, and craftsmanship—one step at a time.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img src={img3} alt="web" width="100%" height="600px"/>
        
      <Carousel.Caption>
          <h3>Built to Perform</h3>
        <p>From gym to street, our shoes move with you.</p>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
{/*=============================================================================================================================================================================================*/}
 <div id="icon">
      <div id="box1">
        <h3><FaTruck id="icons2"/>FREE DELIVERY</h3>
        <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <h3> <MdHighQuality id="icons2"/>QUALITY GUARANTEE</h3>
        <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
      </div>
      <div>
       <h3><MdLocalOffer id="icons2"/>DAILY OFFERS</h3> 
       <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
        </div>
      <div>
        <h3><RiSecurePaymentFill id="icons2"/>100% SECURE PAYMANT</h3>
        <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
        </div>
 </div>
 {/*=======================================================================================================================================================*/}
{/*==============================================================================================================================================*/}
  <div id="carddata">
    {ans}
  </div>

  <Carousel className='outlet' >
      <Carousel.Item>
        <img src={img4} alt="web" width="100%" height="300px"/>
        <Carousel.Caption>
            <h3>Fresh Kicks, Fresh Vibes</h3>
            <p>Lace up with the latest drops and turn heads wherever you go.</p>
       </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    <div id="carddata">
    {ans2}
  </div>
    </>
   )
}
export default Home;