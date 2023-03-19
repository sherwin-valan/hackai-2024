import {motion} from 'framer-motion';
import { useState } from 'react';

function Card()
{
  const [isOpen, setIsOpen] = useState(false);

  return(
   <div className="height-60 bg-white">
        <motion.div 
          transition={{layout: {duration: 1, type: "spring"}}}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className=""
        >
            <motion.h2 layout="position">Framer Motion</motion.h2>
            {isOpen && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration:1}}
              exit={{opacity:0}}
              className=""
            >
              <p>yo</p>
              <p>yo</p>
              <p>yo</p>
              <p>yo</p>
            </motion.div>
            )}
        </motion.div>
   </div>
  )
}

export default Card;