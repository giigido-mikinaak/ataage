import { Link } from "react-router-dom";
import logo from "/img/horizontal-logo.svg";
import { useState } from "react";
import NavList from "./nav-list";
import MobileMenu from "./mobilemenu";

function Footer() {

    return (
        <footer>
            <div className="footer-content">
                <p className="copyright">© 2026 Giigido Mikinaak. All rights reserved</p>
                <p className="speaker">Chi-miigwech to Corey Whitford for sharing his voice and knowledge.</p>
                <div className="copyright-usage row">
                    <div>
                        <p>This work includes Indigenous language and knowledge. Please respect its cultural significance and do not reuse or redistribute without permission.</p>
                        <p>This content may not be used for machine learning, AI training, or data extraction.</p>
                    </div>
                    <p>No part of this game or website, including text, audio, visuals, and design, may be reproduced, distributed, or used without prior written permission.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;