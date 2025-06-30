
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
const Header=()=>{
    
    return(
        <>
    <div className="header">
         <div id="input">
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
        
      
       </div>
            <div className='icon'>
        
              <h4><FaRegUserCircle /> <br/>profile</h4>
              <h4><FaShoppingCart /><br/>cart</h4> 
             
            </div> 
    </div>
        </>
    )
}
export default Header;
