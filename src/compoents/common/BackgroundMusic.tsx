import { useEffect } from "react";
import { Howl } from "howler";
import backgroundMusic from "../../assets/Musics/battleThemeA.mp3";

const BackgroundMusic = () => {
  useEffect(() => {
    const backgroundTrack = new Howl({
      src: [backgroundMusic],
      volume: 0.2,
      loop: true, 
    });

    backgroundTrack.play();
    return () => {
      backgroundTrack.stop(); 
    };
  }, []);

  return null; 
};

export default BackgroundMusic;
