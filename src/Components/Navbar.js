import { Link, useLocation } from "react-router-dom";



import { faCog, faHome, faList } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from "./Sidebar";


export default function Navbar(){
    const [showSidebar, setShowsidebar] = useState(false)
    const Location = useLocation()

    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar(){
        setShowsidebar(false)
    }




    return( 
        <>
    <div className="navbar container" > 
    <Link to="/" href="#!" className="logo">F<span>oo</span>diesHub</Link>
    <div className="nav-links">

        { links.map(link => (
            <Link className={Location.pathname === link.path ? "active" : ""}  to={link.path} key={link.name}>{link.name}</Link>
        ))}
        {/* <a href="#!" className="active">Home</a>
        <a href="#!">Recipes</a>
        <a href="#!">Settings</a> */}


    </div>

    <div onClick={()=> setShowsidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"} >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>
    </div>

    {showSidebar && <Sidebar close={closeSidebar} links= {links} />}
    
    </>
    
    )

}

