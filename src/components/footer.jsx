import { Link } from "react-router-dom";
import logo from "/img/horizontal-logo.svg";
import { useState } from "react";
import NavList from "./nav-list";
import MobileMenu from "./mobilemenu";

function Footer() {

    return (
        <footer>
            <div className="footer-content">
                <div className="translations">
                    <p className="speaker">Chi-miigwech to Corey Whitford for sharing his voice and knowledge.</p>
                    <p>Written and audio translations were provided by Corey Whitford from Sandy Bay First Nation.</p>
                    <p>We acknowledge that Indigenous languages can vary between communities, families, and speakers.</p>
                    <p> Some words, spellings, or translations on this site may differ from what you know or use.</p>
                </div>
                <div className="copyright-usage row">
                    <p>No part of this game or website, including text, audio, visuals, and design, may be reproduced, distributed, or used without prior written permission.</p>
                    <div>
                        <p>This work includes Indigenous language and knowledge. Please respect its cultural significance and do not reuse or redistribute without permission.</p>
                        <p>This content may not be used for machine learning, AI training, or data extraction.</p>
                    </div>

                </div>
                <div className="footer-legal">
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/cookie-policy">Cookie Policy</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <a
                        href="#"
                        className="termly-display-preferences"
                        onClick={(e) => e.preventDefault()}
                    >
                        Privacy Settings
                    </a>
                </div>

                <p className="copyright">© 2026 Giigido Mikinaak. All rights reserved</p>

            </div>
        </footer>
    );
}

export default Footer;