import { useState, useEffect } from "react";
import NavList from "./nav-list";
import { ListIcon } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "/img/horizontal-logo-cream.svg";



function MobileMenu() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const { pathname } = useLocation()

    const toggleMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    }
    useEffect(() => {
        setOpenMobileMenu(false);
    }, [pathname]);

    return (
        <div>
            <div className="mobile-menu">
                <Link to="https://giigidomikinaak.ca/" className="logo">
                    <img src={logo} alt="Logo" />
                </Link>
                {/* Hamburger menu for smaller screens */}
                <button className="hamburger" onClick={toggleMobileMenu}>
                    <ListIcon size={32} />
                </button>
            </div>
            <NavList isOpen={openMobileMenu} className="mobile-nav-list" />
        </div>
    )
};

export default MobileMenu