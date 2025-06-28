import { Outlet } from "react-router-dom";
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout=()=>{
    return(
        <>
        <div id="topHeader">
         <Header/>
         <Topnav/>
        </div>
         <div>
            <Outlet/>
         </div>
         
         <Footer/>
        </>
    )
}
export default Layout;