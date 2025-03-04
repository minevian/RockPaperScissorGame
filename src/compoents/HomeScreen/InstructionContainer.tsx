import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../Redux/store";
import { goldenStart, InstructionHeading, totalRound } from "../Constant";
import TypingAnimation from "../common/TypingAnimation";
import clickSoundEffect from '../../assets/Musics/click_sound_2.mp3'
import { useNavigate } from "react-router-dom";
import gameImage from '.././../assets/gameImage.png';
const InstructionContainer = () => {
  const { userInput } = useSelector((state: RootState) => state.game);
  console.log(userInput);
  const userName = userInput?.name || "Guest";
const navigate = useNavigate();
 
  const [showTotalRound, setShowTotalRound] = useState(false);

  const clickSound = new Howl({
    src: [clickSoundEffect],
    volume: 2.5, 
});

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setShowTotalRound(true);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  const navigategamePage = () => {
    clickSound.play();
    navigate('/game-dashboard')
  }

  return (
    <div className="w-full h-screen md:h-100 mx-auto pt-20 bg-gray-900 text-white p-6 rounded-lg shadow-lg overflow-scroll md:overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <img src={gameImage} alt="" />
        </div>
        <div>
        <div className="text-sm md:text-md  md:mt-2 lg:text-2xl font-bold text-center mb-4">
        Dear {userName} !!
      </div>

    
      <h2 className="text-2xl font-bold text-center mb-4">{InstructionHeading}</h2>

     
      <div className="text-sm md:text-md">
       
        <h4 className="mt-4">
          <TypingAnimation disPlayContent={goldenStart} />
        </h4>

       
        {showTotalRound && (
          <div className="flex flex-col gap-8"><div className="mt-4">
            <TypingAnimation disPlayContent={totalRound} />
          </div>
          <button
  className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-auto flex justify-center items-center bg-yellow-500 text-white px-4 py-2 cursor-pointer rounded-md text-sm lg:text-lg md:relative  md:transform-none md:w-auto hover:text-yellow-500 hover:bg-yellow-100"
  onClick={navigategamePage}
>
  Let's Start
</button>
</div>
        )}
      </div>

        </div>
      </div>
      
     
    </div>
  );
};

export default InstructionContainer;
