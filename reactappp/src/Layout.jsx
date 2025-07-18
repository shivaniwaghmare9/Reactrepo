
import { Outlet } from "react-router-dom";
import Topnav from "./TopNav";
const Layout=()=>{
    return(
        <>
        <Topnav/>
        <Outlet/>
        </>
    )
}
export default Layout;