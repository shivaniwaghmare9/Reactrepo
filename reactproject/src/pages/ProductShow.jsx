import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductShow = () => {
    const { id } = useParams();
    const [mydata, setMydata] = useState({})
    const loadData = async () => {
        let api = `http://localhost:3000/product/${id}`;
        const response = await axios.get(api);
        setMydata(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        loadData();
    }, []);


return (
        <>
            <div id="productShow">
                <div>
                    <img src={mydata.image} width="300" height="300" />
                </div>
                <div>
                    <h2> Product Name : {mydata.name}</h2> 
                    <h3 style={{color:"green"}}> Category : {mydata.category}</h3>
                    <h2 style={{color:"red"}}> Price  : {mydata.price} /-</h2>
                     </div>
            </div>

            
        </>
    )
}
export default ProductShow;