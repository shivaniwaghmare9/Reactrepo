

import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/Shoestem.jpg"
import img2 from "../images/shoes2.jpg"
import img3 from "../images/shoes3.jpg"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useEffect, useState } from 'react';
import axios from 'axios';

const Home=()=>{
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
         <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{key.image}</Card.Title>
        <Card.Text>
          Name:{key.name}<br/>
          Brand:{key.brand}<br/>
          Category:{key.category}<br/>
          Price:{key.price}<br/>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
      </>
    )
  })
   return(
    <>
     <Carousel >
      <Carousel.Item>
        <img src={img1} alt="web" width="100%" height="600px"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="web" width="100%" height="600px"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="web" width="100%" height="600px"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

{/*==============================================================================================================================================*/}
  <div>
    {ans}
  </div>
    </>
   )
}
export default Home;