
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Kid from "./pages/Kid"
import Cartdata from "./pages/CartData"
import Search from "./pages/Search";
import CheckOut from "./pages/CheckOut"
import Payment from "./pages/Payment"
import SearchData from "./pages/SearchData";
import ProductShow from "./pages/ProductShow";
import SortData from "./pages/SortData"
import Wishlist from "./pages/WishList"

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
             <Route path="sortData" element={<SortData/>}/>
            <Route path="cartdata" element={<Cartdata/>}/>
            <Route path="search" element={<Search/>} />
            <Route path="checkout" element={<CheckOut/>}/>
            <Route path="paydone" element={<Payment/>}/>
            <Route path="searchdata/:txtval" element={<SearchData/>}/>
            <Route path="productshow/:id" element={<ProductShow/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            
            
             

            </Route>
         </Routes>
     </BrowserRouter>
     <ToastContainer/>
    </>
  )
}
export default App