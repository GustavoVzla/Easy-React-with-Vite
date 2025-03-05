import { useRef } from "react";
import SoundButton from "./components/SoundButton";
import "./styles/App.css";

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const App = () => {
  // Crear un objeto de refs vacío, pero estable entre renders
  const audioRefs = useRef({});

  // Crear refs solo si aún no existen
  sounds.forEach((sound) => {
    if (!audioRefs.current[sound]) {
      audioRefs.current[sound] = new Audio(`/sounds/${sound}.mp3`);
    }
  });

  const stopAllSounds = () => {
    Object.values(audioRefs.current).forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
  };

  return (
    <div className="container">
      <h1>Sound Board</h1>
      <div className="buttons-container">
        {sounds.map((sound) => (
          <SoundButton
            key={sound}
            sound={sound}
            audioRef={audioRefs.current[sound]}
            stopAllSounds={stopAllSounds}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
