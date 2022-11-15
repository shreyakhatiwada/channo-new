import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdRoofing } from "react-icons/md";
 import { Link } from "react-router-dom";
// import { BrowserRouter, Route, Link } from "react-router-dom";


import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <span>
            <MdRoofing />
            छानो
          </span>
        </h1>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to = "/about">About</Link>
          </li>
          <li>
            <Link to = "/contact">Contact</Link>
          </li>
        </ul>
        <button className="btn">
          <Link to ="/login">Login</Link>
        </button>
        <button className="btn">
          <Link to ="/signin">Signin</Link>
        </button>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
