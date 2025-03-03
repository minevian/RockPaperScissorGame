import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  disPlayContent: string;
  showInputField?: () => void; 
}

const TypingAnimation = ({ disPlayContent, showInputField }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayText(""); 

    const interval = setInterval(() => {
      if (i < disPlayContent.length) {
        setDisplayText((prev) => prev + disPlayContent.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          if (showInputField) showInputField(); 
        }, 500); 
      }
    }, 50);

    return () => clearInterval(interval);
  }, [disPlayContent]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-md lg:text-2xl font-semibold text-center"
    >
      {displayText}
    </motion.p>
  );
};

export default TypingAnimation;
