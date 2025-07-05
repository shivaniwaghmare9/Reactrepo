
import payment from "../images/paydone.jpg"
import success from "../images/successful.jpg"
import { useState } from "react";
const Payment=()=>{
    const[isLoading,setIsLoading]=useState(true);

    setTimeout(()=>{
       setIsLoading(false)
    },1000)
    return(
        <>
        <center>
         {isLoading ? (<> 
         <img src={payment} alt="jpg" />
         </>):(<>
         <img src={success} alt="jpg" />
         </>)
         }
        </center>
        

         
        </>
    )
}
export default Payment;