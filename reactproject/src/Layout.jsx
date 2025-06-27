import { Outlet } from "react-router-dom";
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout=()=>{
    return(
        <>
         <Header/>
         <Topnav/>
         <Outlet/>
         <Footer/>
        </>
    )
}
export default Layout;