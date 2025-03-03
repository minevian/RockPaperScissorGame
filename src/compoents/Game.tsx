import { GiStoneSphere } from "react-icons/gi"; 
import { RiFilePaperLine } from "react-icons/ri";
import { RxScissors } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import clickSoundEffect from '../assets/Musics/click_sound.mp3'
import { Howl } from "howler";
import loseingSoundEffect from '../assets/Musics/lose.mp3';
import wonningSoundEffect from '../assets/Musics/Won.wav'
import winningImage from '../assets/winningAnimation.gif';
import gameOver from '../assets/loosingAnimation.gif';


const Game = () => {
    const choice = ['rock', 'paper', 'scissors'];
    const totalRounds = 5; 

  
    const [userCount, setUserCount] = useState<number>(0);
    const [computerCount, setComputerCount] = useState<number>(0);
    const [round, setRound] = useState<number>(1);
    const [winHistory, setWinHistory] = useState<boolean[]>([]);
    const [isUserStartedToPlay, setUserStartedToPlay] = useState<boolean>(false);
    const [wonTheMatch, setwonTheMatch] = useState<string>('');
    const [message, setmessage] = useState<string>('');

    const clickSound = new Howl({
        src: [clickSoundEffect],
        volume: 2.5, // Adjust volume as needed
    });

    const playSound = (soundFile: string) => {
        const sound = new Audio(soundFile);
        sound.play();
    }
   
    const handleChoice = (selectedChoice: string) => {
        if (round > totalRounds) return; 

        setUserStartedToPlay(true);
        const user = selectedChoice;
        const computer = choice[Math.floor(Math.random() * choice.length)];
        console.log(`Round ${round} - User: ${user} | Computer: ${computer}`);
        clickSound.play();

        let userWon = false;
        if (user === computer) {
            console.log("Match Draw");
            setmessage('Match Draw')
        } else if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')
        ) {
            setUserCount(prev => prev + 1);
            userWon = true;
            setmessage('🧑🏻‍💻User won this round!')
            console.log("User wins this round!");
        } else {
            setComputerCount(prev => prev + 1);
            console.log("Computer wins this round!");
            setmessage("💻Computer won this round!");
        }

        
        setWinHistory(prev => [...prev, userWon]);

       
        if (round === totalRounds) {
            
                if (userCount > computerCount) {
                    console.log(`🏆 User Wins the Match by ${userCount - computerCount} points 🎉`);
                    setwonTheMatch(`🏆 User Wins the Match `);
                    
                    playSound(wonningSoundEffect)
                    
                } else if (userCount < computerCount) {
                    console.log(`❌ You Lost the Match by ${computerCount - userCount} points`);
                    setwonTheMatch(`❌ You Lost the Match`);
                    playSound(loseingSoundEffect)

                } else {
                    console.log("🤝 Match Tie!");
                    setwonTheMatch("🤝 Match Tie!");
                }

           
        } else {
            setRound(prev => prev + 1); 
        }
    };

   
    const resetGame = () => {
        setUserCount(0);
        setComputerCount(0);
        setRound(1);
        setWinHistory([]);
        setUserStartedToPlay(false);
        window.location.reload();
    };

    return (
        <div className="w-full h-screen  gap-6 py-30  overflow-hidden">
            <div className="w-full  h-10 text-sm md:text-md lg:text-lg text-white flex justify-center">
                Rock Paper Scissors - Round {round} / {totalRounds}
            </div>

           
            <div className="flex flex-row justify-center mt-5">
                {isUserStartedToPlay ? (
                    Array.from({ length: totalRounds }).map((_, i) => (
                        <div key={i} className="flex flex-row justify-center gap-3">
                            {winHistory[i] ? (
                                <FaStar className="text-yellow-500 w-5 h-5 md:w-10 md:h-10" />
                            ) : (
                                <CiStar className="text-white w-5 h-5 md:w-10 md:h-10" />
                            )}
                          
                        </div>
                    ))
                ) : (
                    <div className="text-white text-sm md:text-md lg:text-lg flex justify-center">
                        Let's Begin The Game! Total {totalRounds} Rounds
                    </div>
                )}
            </div>

         
            <div className="flex flex-row justify-center gap-6 mx-auto py-5 mt-5">
                <GiStoneSphere onClick={() => handleChoice('rock')} className="text-white w-10 h-10 cursor-pointer" />
                <RiFilePaperLine onClick={() => handleChoice('paper')} className="text-white w-10 h-10 cursor-pointer" />
                <RxScissors onClick={() => handleChoice('scissors')} className="text-white w-10 h-10 cursor-pointer" />
            </div>

            <div className="flex flex-row justify-center gap-6 mx-auto py-5 mt-5">
    {wonTheMatch ? (
        <div className="text-white text-sm md:text-md lg:text-lg flex flex-col items-center">
            <p>{wonTheMatch}</p>
            <img 
                src={userCount > computerCount ? winningImage : gameOver} 
                alt={userCount > computerCount ? "Winning Animation" : "Losing Animation"} 
                className="w-40 h-40 mt-3" 
            />
            <button className="cursor-pointer text-xl"  onClick={resetGame}>click to restart</button>
        </div>
    ) : (
        <div className="text-white text-sm md:text-md lg:text-lg flex justify-center">
            {message}
        </div>
    )}
</div>

        </div>
    );
};

export default Game;
