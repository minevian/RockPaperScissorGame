import { motion, AnimatePresence } from "framer-motion";
import { useDisableDocumentScroll, useIsMobile } from "../../utils/hooks";

interface PopupContainerProps {
  popupContent: React.ReactNode;
  isOpen: boolean;
}

const PopupCard = ({ popupContent, isOpen }: PopupContainerProps) => {
  const isMobile = useIsMobile();
  useDisableDocumentScroll(isOpen);

  const popupCards = {
    hidden: {
      x: "100vw",
      opacity: 0,
      transition: { ease: "easeOut", duration: 0.4 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  const sliderCards = {
    hidden: {
      y: "100%",
      transition: { duration: 0.255, ease: "linear" },
    },
    visible: {
      y: 0,
      transition: { duration: 0.1, ease: "linear" },
    },
    exit: {
      y: "100%",
      transition: { duration: 0.3, ease: "linear" },
    },
  };

  return (
    <AnimatePresence>
      {!isMobile
        ? isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="popup-container fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center  bg-[rgba(0,0,0,0.7)]"
            >
              <motion.div
                key="desktoppop"
                className="popup-content flex h-fit w-fit items-center justify-center rounded-2xl"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={popupCards}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {popupContent}
              </motion.div>
            </motion.div>
          )
        : isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sliderCards}
              className="mobile-slider-common fixed inset-0 z-[1000] h-full w-[100vw] overflow-clip  bg-white px-4 transition-all duration-300
                    ease-linear xs:px-8  ss:px-16  sm:px-0 "
            >
              {popupContent}
            </motion.div>
          )}
    </AnimatePresence>
  );
};

export default PopupCard