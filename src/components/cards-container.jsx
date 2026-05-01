import '../index.css'
import cardsData from "../data/cardsData.json"
import AudioPlayer from './audioplayer';
const CardsContainer = ({ card }) => {
    return (
        <div className="cards-container">
            <div className="card-main">
                <div className="row">
                    <img className="card-img" src={card.img} alt="" oncontextmenu="return false;" loading="lazy" />
                    <div>
                        <h3 className='card-names'>{card.oj}</h3>
                        <p className='card-names'>{card.en}</p>
                        <p className='italic'>{card.phonetic}</p>
                        <p>{card.direct}</p>
                    </div>

                </div>
                {card.rules && (
                    <p className="card-rules">{card.rules}</p>
                )}
            </div>
            <AudioPlayer src={card.audio} />
            {card.audio2 && <AudioPlayer src={card.audio2} />}
        </div>
    );
};

export default CardsContainer