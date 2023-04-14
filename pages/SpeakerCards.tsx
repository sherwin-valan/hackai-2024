import {motion} from 'framer-motion';
import { useState } from 'react';

function SpeakerCards()
{
  const [isHovered1, setHovered1] = useState(true)
  const [isHovered2, setHovered2] = useState(false)
  const [isHovered3, setHovered3] = useState(false)

  const handleHover1 = () => {
    setHovered1(true);
    setHovered2(false);
    setHovered3(false);
  };

  const handleHover2 = () => {
    setHovered1(false);
    setHovered2(true);
    setHovered3(false);
  };

  const handleHover3 = () => {
    setHovered1(false);
    setHovered2(false);
    setHovered3(true);
  };

  return(
   <div className="height-60 flex justify-center place-content-center">
      <motion.div 
        layout
        onMouseEnter={handleHover1}
        className="flex pl-2 mx-2"
        transition={{layout: {duration: 0.3, type: "linear", bounce: 0}}}
      >
        <motion.div className="relative text-black mb-20">
            <motion.img style={{width: isHovered1 ? 250 : 150}} className="h-80 rounded-md object-cover" src="/web1.jpg" alt="speaker image "/>
            <motion.div 
              className="absolute bottom-4 text-left pl-4 leading-4 font-sans"
              animate={{rotate: isHovered1 ? 0 : -90}}
              transition={{layout: {duration: 1, type: "tween"}}}
            >
              <h2 className="text-white text-xl">Guhan Venguswamy</h2>
              <h2 className="text-white text-base">Head of Platform at Jasper.ai</h2>
            </motion.div>
        </motion.div>
      </motion.div>
   </div>
  )
}

export default SpeakerCards;