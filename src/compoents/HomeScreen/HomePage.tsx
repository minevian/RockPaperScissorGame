import { useState } from "react";
import TypingAnimation from "../common/TypingAnimation"
import { HomeDisplayedText } from "../Constant"
import InputField from "../common/InputField";


const HomePage = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <TypingAnimation disPlayContent={HomeDisplayedText}
        showInputField={() => setShowInput(true)}
      />

      {showInput && <InputField />}
    </div>
  )
}

export default HomePage