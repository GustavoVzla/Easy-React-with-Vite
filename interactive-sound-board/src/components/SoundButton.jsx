import "../styles/SoundButton.css";

const SoundButton = ({ sound, audioRef, stopAllSounds }) => {
  const handleClick = () => {
    stopAllSounds();
    if (audioRef) {
      audioRef.currentTime = 0; // Reiniciar el sonido
      audioRef.play();
    }
  };

  return (
    <button className="btn" onClick={handleClick}>
      {sound.charAt(0).toUpperCase() + sound.slice(1)}
    </button>
  );
};

export default SoundButton;
