import '../index.css'
import audioData from "../data/audioData.json"
import AudioPlayer from './audioplayer';

const Audiocards = ({ item }) => (
    <div className="audio-container">
        <div className="audio-card-container" key={item.id}>
            <div className="audio-card-content">
                <h3>{item.oj}</h3>
                <p>{item.en}</p>
                <AudioPlayer src={item.audio}
                    controls
                    controlsList="nodownload"
                    autoPlay />
                {item.audio2 && <AudioPlayer src={item.audio2}
                    controls
                    controlsList="nodownload"
                    autoPlay />}
            </div>
        </div>
    </div>
);
export default Audiocards