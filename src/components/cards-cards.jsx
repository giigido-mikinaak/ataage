import '../index.css'
import cardsData from "../data/cardsData.json"
const Cardscards = () => {




    return (
        <div className="cards-section-container">
            {cardsData.map((item) => (
                <div className="cards-container" key={item.id}>
                    <div className="row">
                        <img className="card-img" src={item.img} alt="" oncontextmenu="return false;" />
                        <div className="cards-content">
                            <h3>{item.oj}</h3>
                            <p>{item.en}</p>
                            <p className='italic'>{item.phonetic}</p>
                            <p>{item.direct}</p>
                            <p>{item.rules}</p>

                            {/* <button key={item.id} onClick={() => playAudio(item.audio)}>
                                Play {item.en}
                            </button> */}
                        </div>
                    </div>
                    <audio
                        controls
                        controlsList="nodownload"
                        preload="metadata"
                        src={item.audio}
                    >
                        Your browser does not support the audio element.
                    </audio>
                </div>
            ))}
        </div>
    );
};

export default Cardscards