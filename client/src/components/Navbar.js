import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/authContext";
import login from "../pages/Login";
const Navbar = ()=> {

    const {currentUser,logout} = useContext(AuthContext);


    return (
        <div className="flex justify-center text-center p-8">
            <div className="flex navbarWidth justify-between text-center">
                <div className="centerText">
                    <Link to="/"><h6>HOME</h6></Link>
                    <Link to="/about"><h6>ABOUT</h6></Link>
                </div>
                <div className="centerText">
                    <Link to="/?category=daily"><h6>DAILY</h6></Link>
                    <Link to="/?category=art"><h6>ART</h6></Link>
                    <Link to="/?category=science"><h6>SCIENCE</h6></Link>
                    <Link to="/?category=travel"><h6>TRAVEL</h6></Link>
                    <Link to="/?category=photography"><h6>PHOTOGRAPHY </h6></Link>
                    <Link to="/?category=health"><h6>HEALTH</h6></Link>
                    <Link to="/?category=food"><h6>FOOD</h6></Link>
                </div>
                <div className="centerText">
                    <span className="ml-6" >{currentUser?.username}</span>
                    {currentUser ? <span className="cursor-pointer" onClick={logout}>Logout</span>
                        : <Link to="/login">Login</Link>
                    }
                    <span className="p-2 rounded-tr-3xl rounded-bl-3xl bg-firstBackground">
                        <Link to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}


export default Navbar;