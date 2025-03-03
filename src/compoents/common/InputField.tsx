import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import clickSoundEffect from '../../assets/Musics/click_sound_2.mp3';
import { Howl } from "howler";
import { useDispatch, useSelector } from "react-redux";
import { handleInstructionPopup, handleUserInput } from "../../Redux/slice";
import { RootState } from "../../Redux/store";
import Instruction from "../HomeScreen/Instruction";


const InputField = () => {
const [value, setValue ] = useState({
    name:''
})
const dispatch = useDispatch();
const {isInstructionPopupOpen} = useSelector((state:RootState) => state.game)
const clickSound = new Howl({
    src: [clickSoundEffect],
    volume: 2.5, // Adjust volume as needed
});
    const handleSubmit = () => {
        const requestData = {
            name:value.name
        }
        clickSound.play();
        console.log('name', requestData);
        
        dispatch(handleInstructionPopup({isInstructionPopupOpen:true}))
        dispatch(handleUserInput(requestData.name))

    }

    const hadlename = (event:any) => {
          const newInput = {
           ... value, [event?.target.name]:event.target.value
          }
          setValue(newInput);
         
         
          
    }
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <motion.input
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        type="text"
        name="name"
        onChange={hadlename}
        placeholder="Enter your name..."
        className="mt-5 px-4 py-2 rounded-md text-white border-2   text-sm lg:text-lg"
      />

      <button
       
        type="submit" className="cursor-pointer flex justify-center items-center md:mt-5 md:ml-4"
        onClick={handleSubmit}
        
      >
        <FaArrowRightLong className="text-white md:w-10 md:h-10  " />
      </button>
      {
        isInstructionPopupOpen && <Instruction/>
      }

    </div>
  );    
};

export default InputField;
