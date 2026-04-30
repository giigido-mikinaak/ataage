import { Link } from "react-router-dom";
import logo from "/img/horizontal-logo.svg";
import { useState } from "react";
import NavList from "./nav-list";
import MobileMenu from "./mobilemenu";

function Navbar() {

    return (
        <header>
            <nav className="navbar">
                <div className="nav-left">
                    <Link to="https://giigidomikinaak.ca/" className="logo">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="web-nav">
                    <NavList></NavList>
                </div>
                <MobileMenu></MobileMenu>


            </nav>
        </header>
    );
}

export default Navbar;