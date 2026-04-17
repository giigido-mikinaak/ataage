import { Link } from "react-router-dom";
import logo from "/src/assets/img/horizontal-logo.svg";
function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="nav-left">
                    <Link to="/" className="logo">
                        <img src={logo} alt="Logo"   />
                    </Link>
                </div>

                <div className="nav-right">
                    <Link to="/" >Home</Link>
                    <Link to="/learn">Learn</Link>
                    <Link to="/cards">Cards</Link>
                    <Link to="/audio">Audio</Link>
                    <Link to="/supporters">Supporters</Link>
                </div>

            </nav>
        </header>
    );
}

export default Navbar;