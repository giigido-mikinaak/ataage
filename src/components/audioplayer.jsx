import { useState } from "react";

function AudioPlayer({ src }) {
  const [show, setShow] = useState(false);

  if (!src) return null;

  return (
    <>
                <div className="cardaudio-container">

      {!show ? (
        <button onClick={() => setShow(true)}>
          Play Audio
        </button>
      ) : (
        <audio controls src={src}
          controlsList="nodownload"
          autoPlay
        />
      )}
      </div>
    </>
  );
}

export default AudioPlayer;