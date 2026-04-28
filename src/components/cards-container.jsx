import '../index.css'
import cardsData from "../data/cardsData.json"

const CardsContainer = ({ card }) => {
    return (
            <div className="cards-container">
                <div className="row">
                    <img className="card-img" src={card.img} alt="" oncontextmenu="return false;" />
                    <div className="cards-content">
                        <h3>{card.oj}</h3>
                        <p>{card.en}</p>
                        <p className='italic'>{card.phonetic}</p>
                        <p>{card.direct}</p>
                        <p>{card.rules}</p>
                    </div>
                </div>
                <audio
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                    src={card.audio} />
                Your browser does not support the audio element.
            </div>
    );
};

export default CardsContainer