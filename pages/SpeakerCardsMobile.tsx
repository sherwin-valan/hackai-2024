import {motion} from 'framer-motion';
import { useState } from 'react';

function SpeakerCardsMobile()
{
  return(
   <div className="h-[1500px] grid grid-rows-3 justify-center place-content-center">
      <div className="h-[500px] flex flex-col items-center">
        <img src="/web1.png" className="w-[300px] h-[300px] object-cover rounded-[20px]"/>
        <div className="text-center font-sans">
          <h2 className="text-[#1A2025] text-xl">Lokesh</h2>
          <h2 className="text-[#1A2025] text-base">Tech Lead</h2>
          <p className="text-base font-hind">Coming Soon</p>
        </div>
      </div>
      <div className="h-[500px] w-[350px] pt-[20px] border-y-[2px] border-[#B1D4E0] flex flex-col items-center">
        <img src="/web2.png" className="w-[300px] h-[300px] object-cover rounded-[20px]"/>
        <div className="text-center font-sans">
          <h2 className="text-[#1A2025] text-xl">Lokesh</h2>
          <h2 className="text-[#1A2025] text-base">Tech Lead</h2>
          <p className="text-base font-hind">Coming Soon</p>
        </div>
      </div>
      <div className="h-[500px] mt-[20px] flex flex-col items-center">
        <img src="/web3.png" className="w-[300px] h-[300px] object-cover rounded-[20px]"/>
        <div className="text-center font-sans">
          <h2 className="text-[#1A2025] text-xl">Lokesh</h2>
          <h2 className="text-[#1A2025] text-base">Tech Lead</h2>
          <p className="text-base font-hind">Coming Soon</p>
        </div>
      </div>
   </div>
  )
}

export default SpeakerCardsMobile;