
import { useState } from "react";
const Payment=()=>{
    const[isLoading,setIsLoading]=useState(true);

    setTimeout(()=>{
       setIsLoading(false)
    },1000)
    return(
        <>
         <center>

            
         </center>
        </>
    )
}
export default Payment;