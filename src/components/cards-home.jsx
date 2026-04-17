import '../index.css'
import { Link } from 'react-router-dom';

const CardsHome = ({ title, text, buttontxt, link }) => (
    <div className="cardshome-container">
        <h2>{title}</h2>
        <p>{text}</p>

        <Link to={link}>
            <button >{buttontxt}</button>
        </Link>
    </div>

);
export default CardsHome