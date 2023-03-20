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
            <motion.img style={{width: isHovered1 ? 250 : 150}} className="h-80 rounded-md object-cover" src="/speaker1.png" alt="speakers background image "/>
            <motion.div 
              className="absolute bottom-2 text-left pl-4 leading-4"
              animate={{rotate: isHovered1 ? 0 : -90}}
              transition={{layout: {duration: 1, type: "tween"}}}
            >
              <h2 className="text-white text-xl">Name</h2>
              <h2 className="text-white text-base">Title</h2>
            </motion.div>
        </motion.div>
        {isHovered1 && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration:1}}
          exit={{opacity:0}}
          className="w-60 pl-2 text-base pt-4"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        </motion.div>
        )}
      </motion.div>
      <motion.div 
        layout
        onMouseEnter={handleHover2}
        className="flex pl-2 mx-2"
        transition={{layout: {duration: 0.3, type: "linear", bounce: 0}}}
      >
        <motion.div className="relative text-black mb-20">
            <motion.img style={{width: isHovered2 ? 250 : 150}} className="h-80 rounded-md object-cover" src="/speaker2.png" alt="speakers background image "/>
            <motion.div 
              className="absolute bottom-2 text-left pl-4 leading-4"
              animate={{rotate: isHovered2 ? 0 : -90}}
              transition={{layout: {duration: 1, type: "tween"}}}
            >
              <h2 className="text-white text-xl">Name</h2>
              <h2 className="text-white text-base">Title</h2>
            </motion.div>
        </motion.div>
        {isHovered2 && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration:1}}
          exit={{opacity:0}}
          className="w-60 pl-2 text-base pt-4"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        </motion.div>
        )}
      </motion.div>
      <motion.div 
        layout
        onMouseEnter={handleHover3}
        className="flex pl-2 mx-2"
        transition={{layout: {duration: 0.3, type: "linear", bounce: 0}}}
      >
        <motion.div className="relative text-black mb-20">
            <motion.img style={{width: isHovered3 ? 250 : 150}} className="h-80 rounded-md object-cover" src="/speaker3.png" alt="speakers background image "/>
            <motion.div 
              className="absolute bottom-2 text-left pl-4 leading-4"
              animate={{rotate: isHovered3 ? 0 : -90}}
              transition={{layout: {duration: 1, type: "tween"}}}
            >
              <h2 className="text-white text-xl">Name</h2>
              <h2 className="text-white text-base">Title</h2>
            </motion.div>
        </motion.div>
        {isHovered3 && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration:1}}
          exit={{opacity:0}}
          className="w-60 pl-2 text-base pt-4"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        </motion.div>
        )}
      </motion.div>
        
   </div>
  )
}

export default SpeakerCards;