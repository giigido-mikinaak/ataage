import { Link } from "react-router-dom";

function NavList({ isOpen, className = "" }) {
  return (
    <div className={`nav-list ${className} ${isOpen ? "open" : ""}`}>
            <Link to="/" >Home</Link>
            <Link to="/learn">Learn</Link>
            <Link to="/cards">Cards</Link>
            <Link to="/audio">Audio</Link>
            <Link to="/supporters">Supporters</Link>
        </div>
    )
}
export default NavList