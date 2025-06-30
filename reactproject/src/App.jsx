import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"

const App=()=>{
  return(
    <>
     <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            </Route>
         </Routes>
     </BrowserRouter>
     <ToastContainer/>
    </>
  )
}
export default App