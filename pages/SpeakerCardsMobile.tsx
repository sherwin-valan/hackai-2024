import {motion} from 'framer-motion';
import { useState } from 'react';

function SpeakerCardsMobile()
{
  return(
   <div className="h-[700px] grid grid-rows-3 justify-center place-content-center">
      <div className="h-[500px] flex flex-col items-center">
        <img src="/web1.jpg" className="w-[300px] h-[300px] object-cover rounded-[20px]"/>
        <div className="text-center font-sans">
          <h2 className="text-[#1A2025] text-xl">Guhan Venguswamy</h2>
          <h2 className="text-[#1A2025] text-base">Head of Platform at Jasper.ai</h2>
        </div>
      </div>
   </div>
  )
}

export default SpeakerCardsMobile;