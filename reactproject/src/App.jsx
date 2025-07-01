import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Kid from "./pages/Kid"

const App=()=>{
  return(
    <>
     <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="men" element={<Men/>}/>
            <Route path="women" element={<Women/>}/>
            <Route path="kid" element={<Kid/>}/>
            </Route>
         </Routes>
     </BrowserRouter>
     <ToastContainer/>
    </>
  )
}
export default App