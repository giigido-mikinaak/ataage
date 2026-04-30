import '../index.css'
import audioData from "../data/audioData.json"

const Audiocards = ({ item }) => (
    <div className="audio-container">
        <div className="audio-card-container" key={item.id}>
            <div className="audio-card-content">
                <h3>{item.oj}</h3>
                <p>{item.en}</p>
                <audio controls
                    controlsList="nodownload"
                    preload="metadata"
                    src={item.audio}></audio>
                {item.audio2 && (<audio controls
                    controlsList="nodownload"
                    preload="metadata"
                    src={item.audio2}></audio>)}
            </div>
        </div>
    </div>
);
export default Audiocards