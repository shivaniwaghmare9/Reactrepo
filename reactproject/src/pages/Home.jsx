

import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/Shoestem.jpg"
import img2 from "../images/shoes2.jpg"
import img3 from "../images/shoes3.jpg"
const Home=()=>{
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
    </>
   )
}
export default Home;