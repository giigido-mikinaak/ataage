import { useState, useEffect } from "react";
import NavList from "./nav-list";
import { ListIcon } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";

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
        <div className="mobile-menu">
            {/* Hamburger menu for smaller screens */}
            <button className="hamburger" onClick={toggleMobileMenu}>
                <ListIcon size={32} />
            </button>
            <NavList isOpen={openMobileMenu}></NavList>
        </div>
    )
};

export default MobileMenu