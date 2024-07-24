import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

import { Link } from "react-router-dom";

import logo from "../utils/logo.png"

import { useSelector } from "react-redux";


const Header = () => {


    const [btnNameReact , setBtnNameReact] = useState("Login");

    const cartItems = useSelector((store) => store.cart.items);

    return (
    <div className="flex justify-between shadow-lg  bg-green-50  ">
       <div className="logo-container">
          <Link to="/">  <img className="w-40 m-4 rounded-3xl " src={logo} /></Link>  
       </div>
       <div className="">
        <ul className="flex  text-lg font-semibold  ">
          <li className="p-4 m-4 hover:font-bold">
            <Link to="/">Home</Link></li>
          <li className="p-4 m-4 hover:font-bold">
            <Link to="/about">About Us</Link></li>
          <li className="p-4 m-4 hover:font-bold">Contact Us</li>
          <li className="p-4 m-4 hover:font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button className="login" onClick={() => {setBtnNameReact(btnNameReact==="Login"? "Logout" : "Login");

          }}>{btnNameReact}</button>
       </ul>
      </div>
    </div>
    );
};

export default Header;