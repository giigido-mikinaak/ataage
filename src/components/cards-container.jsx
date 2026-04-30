import '../index.css'
import cardsData from "../data/cardsData.json"

const CardsContainer = ({ card }) => {
    return (
        <div className="cards-container">
            <div className="row">
                <img className="card-img" src={card.img} alt="" oncontextmenu="return false;" />
                <div>
                    <h3 className='card-names'>{card.oj}</h3>
                    <p className='card-names'>{card.en}</p>
                    <p className='italic'>{card.phonetic}</p>
                    <p>{card.direct}</p>
                </div>

            </div>
            <p className='card-rules'>{card.rules}</p>
            <audio
                controls
                controlsList="nodownload"
                preload="metadata"
                src={card.audio} />
        </div>
    );
};

export default CardsContainer