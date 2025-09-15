
// import payment from "../images/loading.gif"
// import success from "../images/success2.png"
// import { useState } from "react";

// const Payment=()=>{
//     const[isLoading,setIsLoading]=useState(true);

//     setTimeout(()=>{
//        setIsLoading(false)
//     },1500)

//     return(
//         <>
//         <center>
//          {isLoading ? (<> 
//          <img src={payment} alt="jpg" width="150px" height="150px" style={{marginTop:"30px"}}/>
//          </>):(<>
//          <img src={success} alt="jpg" width="300px" height="300px" />
//          </>)
//          }
//         </center>
//     </>
//     )
// }
// export default Payment;

import payment from "../images/loading.gif"
import success from "../images/success2.png"
import { useState } from "react";

const Payment=()=>{
    const[isLoading,setIsLoading]=useState(true);

    setTimeout(()=>{
       setIsLoading(false)
    },1500)

    return(
        <>
        <center>
         {isLoading ? (<> 
         <img src={payment} alt="jpg" width="150px" height="150px" style={{marginTop:"30px"}}/>
         </>):(<>
         <img src={success} alt="jpg" width="300px" height="300px" />
         </>)
         }
        </center>
    </>
    )
}
export default Payment;